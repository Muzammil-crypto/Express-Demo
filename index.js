const express = require("express");
const App = express();

App.get("/", (req, res) => {
  res.send("Hello Word");
});

// App.post()
// App.put()
// App.delete()
