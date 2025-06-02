require("dotenv").config();
const express = require("express");
const app = express();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");

console.log("Check port =>", process.env.PORT);
const port = process.env.PORT;
const host = process.env.HOST_NAME;

configViewEngine(app);
app.use("/test", webRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
