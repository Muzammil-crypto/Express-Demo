require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.send("Hello World");
});
app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

app.listen(port, () => {
  console.log(`Server running on port: `, port);
});
