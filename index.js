require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const courses = [
  {
    id: 1,
    courseName: "PMP",
    teacher: "Baboor",
  },
  {
    id: 2,
    courseName: "Kilo",
    teacher: "Zahurudin",
  },
  {
    id: 3,
    courseName: "MUNDI",
    teacher: "Karooli",
  },
];
app.get("/", (_req, res) => {
  res.send("Hello World");
});
app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("the course with the given ID wasnt found");
});

app.listen(port, () => {
  console.log(`Server running on port: `, port);
});
