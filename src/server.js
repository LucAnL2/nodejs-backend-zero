const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();
console.log("Check port =>", process.env.PORT);
const port = process.env.PORT;
const host = process.env.HOST_NAME;

//config template engine
app.set("views", path.join(__dirname, "views/"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/viewSample", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
