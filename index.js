const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Word");
});
app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});
app.listen(3000, () => console.log("Listning on port 3000"));

// App.post()
// App.put()
// App.delete()
