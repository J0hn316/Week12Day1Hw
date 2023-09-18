const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");
const port = 3000;

const pokemon = require("./models/pokemon.js");

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

app.get("/", function (req, res) {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon/", function (req, res) {
  res.render("Index", { pokemon: pokemon });
});

app.get("/pokemon/:id", function (req, res) {
  res.send(req.params.id);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
