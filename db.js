const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://mayank_admin:mayank111@cluster0.cxee1.mongodb.net/mern-pizza";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("database connected");
});

db.on("error", () => {
  console.log("database not connected");
});

module.exports = mongoose;
