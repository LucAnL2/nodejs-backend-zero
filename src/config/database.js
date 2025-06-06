require("dotenv").config();
const mysql = require("mysql2");
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST || "localhost",
//   user: process.env.DB_USER || "root",
//   database: process.env.DB_NAME || "test",
//   port: process.env.DB_PORT || 3307,
//   password: process.env.DB_PASSWORD || "050804",
// });
const connection = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  database: process.env.DB_NAME || "test",
  port: process.env.DB_PORT || 3307,
  password: process.env.DB_PASSWORD || "050804",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;
