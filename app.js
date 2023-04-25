const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all("*", (req, res) => {
  console.log(req.method + " " + req.url);
  console.log(req.headers);
  console.log(req.body);
  console.log("----");
  res.send("A-OK");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
