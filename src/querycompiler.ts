import { QueryDescription, QueryType, WhereType } from "./querybuilder.ts";
import { DatabaseDialect } from "./connect.ts";
import { DateUtils } from "./utils/date.ts";

/**
 * Transform QueryDescription to an executable SQL query string
 */
export class QueryCompiler {
  private values: any[] = [];

  constructor(
    private description: QueryDescription,
    private dialect: DatabaseDialect,
  ) {
  }

  /**
   * Generate executable SQL statement
   */
  public compile(): { text: string; values: any[] } {
    let query: string;

    switch (this.description.type) {
      case QueryType.Insert:
        query = this.toInsertSQL();
        break;
      case QueryType.Replace:
        query = this.toInsertSQL(true);
        break;
      case QueryType.Update:
        query = this.toUpdateSQL();
        break;
      case QueryType.Delete:
        query = this.toDeleteSQL();
        break;
      case QueryType.Select:
      default:
        query = this.toSelectSQL();
        break;
    }

    return { text: query, values: this.values };
  }

  /**
   * Generate `UPDATE` query string
   */
  private toUpdateSQL(): string {
    let query: string[] = [
      `UPDATE ${this.quote(this.description.tableName)} SET`,
    ];

    // Prevent to continue if there is no value
    if (!this.description.values) {
      throw new Error("Cannot perform update query without values!");
    }

    // Map values to query string
    const values = Object
      .entries(this.description.values)
      .map(([key, value]) =>
        `${this.quote(key)} = ${this.toDatabaseValue(value)}`
      );

    // Prevent to continue if there is no value
    if (!(values.length >= 1)) {
      throw new Error("Cannot perform update query without values!");
    }

    query.push(values.join(", "));

    // Add RETURNING statement if exists
    if (this.description.returning.length > 0) {
      query.push("RETURNING", this.description.returning.join(", "));
    }

    // Add all query constraints
    query = query.concat(this.collectConstraints());

    return query.join(" ") + ";";
  }

  /**
   * Generate `INSERT` query string
   */
  private toInsertSQL(replace: boolean = false): string {
    // Initialize query string
    // Decide wether to use REPLACE or INSERT
    let query: string[] = replace
      ? [`REPLACE INTO ${this.quote(this.description.tableName)}`]
      : [`INSERT INTO ${this.quote(this.description.tableName)}`];

    // Prevent to continue if there is no value
    if (!this.description.values) {
      throw new Error(
        `Cannot perform ${
          replace ? "replace" : "insert"
        } query without values!`,
      );
    }

    // If the user passes multiple records, map the values differently
    if (Array.isArray(this.description.values)) {
      if (!(this.description.values.length >= 1)) {
        throw new Error(
          `Cannot perform ${
            replace ? "replace" : "insert"
          } query without values!`,
        );
      }

      // Get all inserted columns from the values
      const fields = this.description.values
        .map((v) => Object.keys(v))
        .reduce((accumulator, currentValue) => {
          for (const field of currentValue) {
            if (!accumulator.includes(field)) {
              accumulator.push(field);
            }
          }

          return accumulator;
        });

      if (!(fields.length >= 1)) {
        throw new Error(
          `Cannot perform ${
            replace ? "replace" : "insert"
          } query without values!`,
        );
      }

      // Map values to query string
      const values = this.description.values.map((item) => {
        const itemValues = fields.map((field) =>
          this.toDatabaseValue((item[field]))
        );
        return `(${itemValues.join(", ")})`;
      });

      const columns = fields.map((field) => this.quote(field)).join(", ");
      query.push(`(${columns})`, "VALUES", values.join(", "));
    } else {
      const fields = Object.keys(this.description.values);

      if (!(fields.length >= 1)) {
        throw new Error(
          `Cannot perform ${
            replace ? "replace" : "insert"
          } query without values!`,
        );
      }

      const values = Object.values(this.description.values)
        .map((i) => this.toDatabaseValue(i))
        .join(", ");
      const columns = fields.map((field) => this.quote(field)).join(", ");
      query.push(`(${columns}) VALUES (${values})`);
    }

    // Add RETURNING statement if exists
    if (this.description.returning.length > 0) {
      query.push("RETURNING", this.description.returning.join(", "));
    }

    return query.join(" ") + ";";
  }

  /**
   * Generate `SELECT` query string
   */
  private toSelectSQL(): string {
    // Query strings
    let query: string[] = [`SELECT`];

    // Select table columns
    if (this.description.columns.length > 0) {
      query.push(`(${this.description.columns.join(", ")})`);
    } else {
      query.push("*");
    }

    // Add table name
    query.push(`FROM ${this.quote(this.description.tableName)}`);

    // Add all query constraints
    query = query.concat(this.collectConstraints());

    return query.join(" ") + ";";
  }

  /**
   * Generate `DELETE` query string
   */
  private toDeleteSQL(): string {
    // Query strings
    let query: string[] = [
      `DELETE FROM ${this.quote(this.description.tableName)}`,
    ];

    // Add all query constraints
    const constraints = this.collectConstraints();
    if (!(constraints.length >= 1)) {
      throw new Error("Cannot perform delete without any constraints!");
    }
    query = query.concat(constraints);

    return query.join(" ") + ";";
  }

  /**
   * Collect query constraints in the current query
   * 
   * Example result:
   * 
   * ```
   * ["WHERE email = 'a@b.com'", "LIMIT 1"]
   * ```
   */
  private collectConstraints(): string[] {
    // Query strings (that contain constraints only)
    let query: string[] = [];

    // Add where clauses if exists
    if (this.description.wheres.length > 0) {
      for (let index = 0; index < this.description.wheres.length; index++) {
        const { type, operator, value, column } =
          this.description.wheres[index];

        let expression: string;

        if (operator === "between") {
          if (!Array.isArray(value) || value.length !== 2) {
            throw new Error("BETWEEN must have two values!");
          }

          expression = `${this.quote(column)} ${operator} ${
            this.toDatabaseValue(value[0])
          } and ${this.toDatabaseValue(value[1])}`;
        } else {
          expression = `${this.quote(column)} ${operator} ${
            this.toDatabaseValue(value)
          }`;
        }

        if (index === 0) {
          // The first where clause should have `WHERE` explicitly.
          if (type === WhereType.Not) {
            query.push(`WHERE NOT ${expression}`);
          } else {
            query.push(`WHERE ${expression}`);
          }
        } else {
          // The rest of them use `AND`
          switch (type) {
            case WhereType.Not:
              query.push(`AND NOT ${expression}`);
              break;
            case WhereType.Or:
              query.push(`OR ${expression}`);
              break;
            case WhereType.Default:
            default:
              query.push(`AND ${expression}`);
              break;
          }
        }
      }
    }

    // Add "order by" clauses
    if (this.description.orders.length > 0) {
      query.push(`ORDER BY`);

      query.push(
        this.description.orders
          .map((order) => `${order.column} ${order.order}`)
          .join(", "),
      );
    }

    // Add query limit if exists
    if (this.description.limit && this.description.limit > 0) {
      query.push(`LIMIT ${this.description.limit}`);
    }

    // Add query offset if exists
    if (this.description.offset && this.description.offset > 0) {
      query.push(`OFFSET ${this.description.offset}`);
    }

    return query;
  }

  /**
   * Transform value to a format that the database can understand
   * 
   * @param value The value to be sanitized
   */
  private toDatabaseValue(value: any): string {
    if (Array.isArray(value)) {
      const values = value
        .map((item) => {
          this.toDatabaseValue(item);
          return this.getPlaceholder();
        })
        .join(", ");
      return `(${values})`;
    }

    if (typeof value === "undefined" || value === null) {
      return "NULL";
    }

    if (value instanceof Date) {
      this.values.push(DateUtils.formatDate(value));
    } else if (
      typeof value === "boolean" &&
      (this.dialect === "mysql" || this.dialect === "sqlite")
    ) {
      this.values.push(value ? 1 : 0);
    } else {
      this.values.push(value);
    }

    return this.getPlaceholder();
  }

  private getPlaceholder() {
    switch (this.dialect) {
      case "mysql":
      case "sqlite":
        return "?";
      case "postgres":
        return "$" + this.values.length;
      default:
        throw new Error(
          `Dialect '${this.dialect}' is not supported yet!`,
        );
    }
  }

  private quote(data: string) {
    switch (this.dialect) {
      case "postgres":
        return `"${data}"`;
      case "mysql":
      case "sqlite":
        return `\`${data}\``;
    }
  }
}