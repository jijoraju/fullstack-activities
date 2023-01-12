const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/home") {
      res.end("Hello from home");
    } else if (req.url === "/") {
      res.end("Hello from base");
    } else {
      res.writeHead(404);
      res.end("error");
    }
  })
  .listen(3000);
