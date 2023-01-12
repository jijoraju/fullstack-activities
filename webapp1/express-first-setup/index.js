const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
        <h1>Hello from express Server</h1>
        <p>Testing the first express app</p>
    `);
});

app.listen(3000, () => {
  console.log("Application started");
});
