const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");
const port = 3000;

const pokemons = require("./models/pokemon.js");

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

app.get("/", function (req, res) {
  res.send("Welcome to the Pokemon App!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
