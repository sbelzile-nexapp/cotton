(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{357:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"schema"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schema"}},[t._v("#")]),t._v(" Schema")]),t._v(" "),s("p",[t._v("Schema is a query interface which allows you to do anything with your database schema. You often see this in your migrations code, however, you can still use it anywhere in your app as long as you connected to the database. Heavily inspired by "),s("a",{attrs:{href:"https://laravel.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Let's take a look at this example.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Schema "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://deno.land/x/cotton/mod.ts"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("up")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("schema"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Schema")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"users"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("down")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("schema"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Schema")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dropTable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"users"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This is an example of a "),s("RouterLink",{attrs:{to:"/guide/migrations.html#creating-a-migration"}},[t._v("migration file")]),t._v(". Here, we're trying to create a basic table called "),s("code",[t._v("user")]),t._v(". This table contains two column, an auto incremental primary key called "),s("code",[t._v("id")]),t._v(" and classic varchar column called "),s("code",[t._v("title")]),t._v(".")],1),t._v(" "),s("p",[t._v("On the "),s("code",[t._v("down")]),t._v(" function, where")]),t._v(" "),s("p",[t._v("With "),s("code",[t._v("Schema")]),t._v(", you can do the following things:")]),t._v(" "),s("ul",[s("li",[t._v("Create a table or schema")]),t._v(" "),s("li",[t._v("Alter tables and columns")]),t._v(" "),s("li",[t._v("Drop tables and columns")]),t._v(" "),s("li",[t._v("Manage constraints and indexes")])]),t._v(" "),s("h2",{attrs:{id:"create-a-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-table"}},[t._v("#")]),t._v(" Create a table")]),t._v(" "),s("p",[t._v("You can use "),s("code",[t._v("createTable")]),t._v(" method to create a new table. This two parameters, the first one is the table name and the second is a callback function. This callback function gets a "),s("code",[t._v("TableBuilder")]),t._v(" from the parameter, which contains series of method that helps you to add columns to your table.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"users"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"age"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"is_active"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("custom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fullname VARCHAR(255)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("timestamps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("You can see all available columns "),s("a",{attrs:{href:"#column-types"}},[t._v("here")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"drop-a-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#drop-a-table"}},[t._v("#")]),t._v(" Drop a table")]),t._v(" "),s("p",[t._v("You can easily drop a table by calling "),s("code",[t._v("dropTable")]),t._v(" and pass the table name.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dropTable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"users"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("To drop multiple tables, use "),s("code",[t._v("dropTables")]),t._v(" and pass an array as the parameter.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dropTables")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"users"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"rename-a-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rename-a-table"}},[t._v("#")]),t._v(" Rename a table")]),t._v(" "),s("p",[t._v("Use "),s("code",[t._v("renameTable")]),t._v(" to rename an existing table.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("renameTable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"users"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"accounts"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"check-if-a-table-exists"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-if-a-table-exists"}},[t._v("#")]),t._v(" Check if a table exists")]),t._v(" "),s("p",[t._v("Use "),s("code",[t._v("hasTable")]),t._v(" check if a table is exists in the database.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasTable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"users"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `users` table exists")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"add-column"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-column"}},[t._v("#")]),t._v(" Add column")]),t._v(" "),s("p",[t._v("Adding a new column to a table can be done by using the "),s("code",[t._v("addColumn")]),t._v(" method.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addColumn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"users"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Optionally, you can pass a length for a varchar column.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addColumn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"users"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"varchar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"check-if-a-table-has-a-column"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-if-a-table-has-a-column"}},[t._v("#")]),t._v(" Check if a table has a column")]),t._v(" "),s("p",[t._v("To check if a table has a column in it, you can use "),s("code",[t._v("hasColumn")]),t._v(" and pass the table name and the expected column.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasTable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"users"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `users` table containts `name` column")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"column-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#column-types"}},[t._v("#")]),t._v(" Column types")]),t._v(" "),s("p",[t._v("These are the available column types you can use to build your tables.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Syntax")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("schema.id()")])]),t._v(" "),s("td",[t._v("Shortcut for "),s("code",[t._v("bigIncrements('id')")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("schema.increments('id')")])]),t._v(" "),s("td",[t._v("Auto incremental column ("),s("code",[t._v("SERIAL")]),t._v(" in PostgreSQL).")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("schema.bigIncrements('id')")])]),t._v(" "),s("td",[t._v("Big auto incremental column.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("schema.smallIncrements('id')")])]),t._v(" "),s("td",[t._v("Small auto incremental column.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("schema.varchar('name', 100)")])]),t._v(" "),s("td",[t._v("VARCHAR (text) column with a length (default "),s("code",[t._v("255")]),t._v(").")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("schema.text('content')")])]),t._v(" "),s("td",[t._v("A large TEXT column ("),s("code",[t._v("LONGTEXT")]),t._v(" in MySQL).")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("schema.boolean('is_active')")])]),t._v(" "),s("td",[t._v("A boolean compatible column. Tiny int in MySQL & SQLite and "),s("code",[t._v("BOOLEAN")]),t._v(" in PostgreSQL.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("schema.integer('votes')")])]),t._v(" "),s("td",[t._v("Basic INTEGER (number) column.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("schema.bigInteger('price')")])]),t._v(" "),s("td",[t._v("BIGINT equivalent column.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("schema.smallInteger('votes')")])]),t._v(" "),s("td",[t._v("SMALLINT equivalent column.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("schema.datetime('created_at')")])]),t._v(" "),s("td",[t._v("Date and time column ("),s("code",[t._v("TIMESTAMP")]),t._v(" in PostgreSQL).")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("schema.date('created_at')")])]),t._v(" "),s("td",[t._v("DATE equvalient column.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("schema.timestamps()")])]),t._v(" "),s("td",[t._v("Creates two "),s("code",[t._v("datetime")]),t._v(" columns called "),s("code",[t._v("created_at")]),t._v(" and "),s("code",[t._v("updated_at")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("schema.custom('age INTEGER')")])]),t._v(" "),s("td",[t._v("Add column by yoursel using SQL query.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("schema.foreignId('user_id')")])]),t._v(" "),s("td",[t._v("Add a foreign key to other table's primary key.")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);