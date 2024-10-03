const express = require("express");
const app = express();

const PORT = 3305;

app.get("/", function (req, res) {
  //res.sendFile();
  res.sendFile(__dirname + "/src/views/index.html");
});

app.get("/sobre", function (req, res) {
  res.sendFile(__dirname + "/src/views/about.html");
});

app.get("/erro", function (req, res) {
  res.sendFile(__dirname + "/src/views/404.html");
});

app.listen(PORT, () => {
  console.log("running...");
});
