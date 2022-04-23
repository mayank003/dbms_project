const express = require("express");
const port = 3001;
const app = express();
const db = require("./db");
app.get("/", function (request, response) {
  response.send("server working");
});

const pizzasRoute = require("./routes/pizzasRoute");

app.use("/api/pizzas", pizzasRoute);

app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(port, () => "server running");