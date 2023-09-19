const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");
const port = 3000;

const pokemon = require("./models/pokemon.js");

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("All routes are currently running");
  next();
});

app.get("/", function (req, res) {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon/", function (req, res) {
  res.render("Index", { pokemon: pokemon });
});

app.get("/pokemon/new", function (req, res) {
  res.render("New");
});

app.post("/pokemon", (req, res) => {
  req.body.img =
    "http://img.pokemondb.net/artwork/" + req.body.name.toLowerCase();
  pokemon.push(req.body);
  console.log(pokemon);
  res.redirect("/pokemon/");
});

app.get("/pokemon/:id", function (req, res) {
  res.render("Show", {
    pokemon: pokemon[req.params.id],
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
