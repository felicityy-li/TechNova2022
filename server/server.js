const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  const info = { users: ["mel", "felicity"] };
  res.json(info);
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
