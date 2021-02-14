const express = require("express");
const mongoose = require("mongoose");
const mongojs = require("mongojs");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");


const PORT = process.env.PORT || 3001;
const app = express();

c\

//Middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fridge_for_all", {
  useNewUrlParser: true,
  useFindAndModify: false
});


const db = mongojs(databaseUrl, collections);
  
  db.on("error", error => {
    console.log("Database Error:", error);
  });

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.on("error", error => {
  console.log("Database Error:", error);
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);

});
module.exports = app;