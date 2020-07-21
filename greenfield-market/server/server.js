var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = process.env.PORT || 5000;
const path = require("path");
app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.static("../build"));
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.get("*", (req, res) => {
  let pathToJoin = path.join(__dirname, "../build/index.html");
  res.sendFile(pathToJoin);
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("mongoose connected");
});

var Users = require("../server/routes/Users.js");
app.use("/users", Users);
app.listen(port, () => {
  console.log("Server is runing on port: " + port);
});
