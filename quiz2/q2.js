const express = require("express");
const app = express();

app.get("/Math/:n1/:n2", (req, res) => {
  let { n1, n2 } = req.query;
  const result=n1*n2;

  res.send(`<h2>Numbers is : ${n1} and ${n2}, Result is = ${result}</h2>`);
});

app.listen("4577")