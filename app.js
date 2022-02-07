const express = require("express");
const bodyParser = require("body-parser");
const morse = require("morse");
const clipBoard = require("clipboard");
const { get } = require("express/lib/response");

const app = express();

app.set("view engine", "ejs");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let encoded = morse.encode("ronen hammond");



app.get("/", function(req, res){
    res.render("home", {morseCode: encoded});
    console.log(req.body.value);
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
