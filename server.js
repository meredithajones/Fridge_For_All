const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
// const bodyParser = require("body-parser");
const logger = require("morgan");
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const routes= require("./routes")

dotenv.config()


const PORT = process.env.PORT || 3001;
const app = express();

//Middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', true);
  res.header('Access-Control-Allow-Credentials', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});
app.use(cors({
  Origin: [
    "localhost:3000",
    "https://fridge-for-all-philly.herokuapp.com/"
  ],
  credentials: false
}));


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fridge_for_all", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.use("/auth", require("./routes/api/userRouter"))
app.use(routes)

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

  
// db.on("error", error => {
//   console.log("Database Error:", error);
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);

});
module.exports = app;