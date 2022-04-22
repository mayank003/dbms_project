const express = require("express");

const app = express();
const db = require("./db");
app.get("/", function (request, response) {
  response.send("server working");
});

app.listen(3001, function () {
  console.log("running at 3001");
});
