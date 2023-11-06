const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Basic Calculator");
});

app.get("/add/:num1/:num2", (req, res) => {
  var num1 = parseInt(req.params.num1);
  var num2 = parseInt(req.params.num2);
  var result = (num1 + num2).toString();
  res.send(result);
});

app.get("/subtract/:num1/:num2", (req, res) => {
  var num1 = parseInt(req.params.num1);
  var num2 = parseInt(req.params.num2);
  var result = (num1 - num2).toString();
  res.send(result);
});

app.get("/multiply/:num1/:num2", (req, res) => {
  var num1 = parseInt(req.params.num1);
  var num2 = parseInt(req.params.num2);
  var product = (num1 * num2).toString();
  res.send(product);
});

app.get("/divide/:num1/:num2", (req, res) => {
  var num1 = parseInt(req.params.num1);
  var num2 = parseInt(req.params.num2);
  var quotient = (num1 / num2).toString();
  res.send(quotient);
});

app.listen("3000", () => console.log("server started at port 3000"));
