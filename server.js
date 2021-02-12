const express = require("express");
const mongoose = require("mongoose");
const mongojs = require("mongojs");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
  const databaseUrl = process.env.MONGODB_URI || "mongodb://localhost/inventory";
  const collections = ["ppls_fridge"];

  const db = mongojs(databaseUrl, collections);
  
  db.on("error", error => {
    console.log("Database Error:", error);
  });

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);

});
