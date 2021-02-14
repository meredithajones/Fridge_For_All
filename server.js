const express = require("express");
const mongoose = require("mongoose");
// const mongojs = require("mongojs");
const path = require("path");
const bodyParser = require("body-parser");
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const cors = require("cors")
// const logger = require("morgan");

dotenv.config()

const PORT = process.env.PORT || 3001;
const app = express();


//Middleware
// app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser);
app.use(cors({
  origin: ["http://localhost:3000"]
}));

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

mongoose.connect(process.env.MDB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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

app.use("/auth", require("./routers/userRouter"))
app.use("/customer", require("./routers/customerRouter"))


// db.on("error", error => {
//   console.log("Database Error:", error);
// });

app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);

  });
  
module.exports = app;
