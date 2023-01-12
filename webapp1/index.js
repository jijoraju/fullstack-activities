const http = require("http");
const fs = require("fs");
const home = fs.readFileSync("public/home.html");
const service = fs.readFileSync("public/service.html");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.end(home);
    } else if (req.url === "/contact") {
      res.end("Hello from contact");
    } else if (req.url === "/service") {
      res.end(service);
    } else {
      res.writeHead(404);
      res.end("Error");
    }
  })
  .listen(3000);
