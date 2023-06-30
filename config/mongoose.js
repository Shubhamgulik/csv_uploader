const mongoose = require("mongoose");

async function connect() {
  await mongoose.connect("mongodb://127.0.0.1:27017/csv-uploader");
}
connect();

const db = mongoose.connection;

db.on(
  "err",
  console.error.bind(console, "Error in connecting to the database")
);

db.once("open", function () {
  console.log("Connected to database :: Mongodb");
});

module.exports = db;
