const express =require("express");
const app = express();

app.get("/r/:count", (req, res) => {
  res.send(`i want kinder ${req.query.count}`);
});

app.listen("4679");