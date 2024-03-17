const express = require("express");
const app = express();
const os = require("os");

const port = 8080;

app.get("/", (req, res) => {
  res.send(
    `<body style='background-color:#283E5B'><h1 style='color: orange;text-align:center'>Hello AWS ${os.hostname()}</h1></body>`
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
