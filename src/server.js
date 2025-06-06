require("dotenv").config();
const express = require("express");
const app = express();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");
console.log("Check port =>", process.env.PORT);
const port = process.env.PORT;
const host = process.env.HOST_NAME;

configViewEngine(app);
app.use("/test", webRoutes);

connection.query(
  "SELECT * FROM Users u",
  ["Page", 45],
  function (err, results, fields) {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }

    console.log("Results:", results);
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
