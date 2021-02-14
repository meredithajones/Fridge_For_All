const express = require("express");
const mongoose = require("mongoose");
// const mongojs = require("mongojs");
const path = require("path");
const bodyParser = require("body-parser");
const dotenv = require("dotenv")
// const logger = require("morgan");


const PORT = process.env.PORT || 3001;
const app = express();


//Middleware
// app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fridge_for_all", {
useNewUrlParser: true,
  useFindAndModify: false,
},
(err) => {
  if (err) return console.error(err);
  console.log("Connected to Mongo")
}
);

// const db = mongojs(databaseUrl, collections);

//   db.on("error", error => {
//     console.log("Database Error:", error);
//   });

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.get("/test", (req, res) => {
    res.send("it works")
  })

app.use("/auth", require("./routers/userRouter"))

// db.on("error", error => {
//   console.log("Database Error:", error);
// });

app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);

  });
module.exports = app;

//mongodb+srv://luke_martin:MjGhULd1dwlGoiG3@cluster0.nggyf.mongodb.net/<dbname>?retryWrites=true&w=majority