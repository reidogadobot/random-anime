const express = require("express");
const random = require("./src/random");

const app = express();
const PORT = 3000;

app.get("/anime", (req, res) => {
  res.type("json");
  res.send(JSON.stringify({
    criador: "hunterzin",
    anime: random().anime
  }, null, 2))
})

app.get("/nsfw", (req, res) => {
  res.type("json");
  res.send(JSON.stringify({
    criador: "hunterzin",
    anime: random().nsfw
  }, null, 2))
})

app.listen(PORT, () => console.log("ok"))
