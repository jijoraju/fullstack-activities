const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
        <h1>Hello from express Server</h1>
        <p>Testing the first express app</p>
    `);
});

app.get("/json", (req, res) => {
  res.send({
    title: "json",
    content: "Hello from json response helow",
  });
});

app.listen(3000, () => {
  console.log("Application started");
});
