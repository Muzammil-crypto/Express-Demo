const Joi = require("joi");
require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
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
  res.send(course);
});
app.post("/api/courses", (req, res) => {
  const schema = {
    courseName: Joi.string().min(3).required(),
    teacher: Joi.string().min(2).required(),
  };
  const result = Joi.valid(req.body, schema);
  console.log(result);
  if (!req.body.courseName || req.body.courseName.length < 3) {
    res.status(400).send("Name required/ must be more than 3 charecters");
    return;
  }

  const course = {
    id: courses.length + 1,
    courseName: req.body.courseName,
    teacher: req.body.teacher,
  };
  courses.push(course);
  res.send(course);
});

app.listen(port, () => {
  console.log(`Server running on port: `, port);
});
