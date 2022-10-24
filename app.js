const express = require("express");
const bodyParser = require("body-parser");
const morse = require("morse");
const { get } = require("express/lib/response");

const app = express();
const port = process.env.PORT || 5000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var encoded = morse.encode('');

app.get("/", function (req, res) {
  res.render("home", { morseCode: encoded });
});

app.post("/", function (req, res) {
  const message = req.body.input;
  encoded = morse.encode(message)
  res.redirect("/");
});

app.listen(port, function () {
  console.log("Server started on port 5000");
});
