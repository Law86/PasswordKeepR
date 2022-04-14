// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieSession = require("cookie-session");
const bcrypt = require('bcrypt');
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "session",
    keys: ["key1"],
  })
);
app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);


app.use(express.static("public"));

// Separated Routes for each Resource
const passwordsRoutes = require("./routes/passwords-router");
const renderRoutes = require("./routes/renderRoutes");

// Mount all resource routes
app.use("/passwords", passwordsRoutes(db));
app.use("/", renderRoutes);
app.use("/login", loginRoutes(db));
const newPasswordRoutes = require("./routes/new_password-router");
const loginRoutes = require("./routes/login");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
app.use("api/passwords", passwordsRoutes(db));
app.use("/new_password", newPasswordRoutes);
app.use("/passwords", passwordsRoutes(db));
app.use("/", renderRoutes);
app.use("/login", loginRoutes(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.render("passwords");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


