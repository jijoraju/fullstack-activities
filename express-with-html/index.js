const express = require("express");
const fs = require("fs");
const path = require("path");
const home = path.resolve(__dirname, "public/index.html");
const service = path.resolve(__dirname, "public/service.html");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(home);
});

app.get("/service", (req, res) => {
  res.sendFile(service);
});

app.get("/contact", (req, res) => {
  res.send("Hello from contact page");
});

app.get("/about", (req, res) => {
  res.send("Hello from about page");
});

app.listen(8080, () => {
  console.log("application started at 8080");
});
