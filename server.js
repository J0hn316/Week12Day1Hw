const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const jsxEngine = require("jsx-view-engine");
const dotenv = require("dotenv");
const port = 3001;

const Pokemon = require("./models/pokemon.js");

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.use((req, res, next) => {
  console.log("All routes are currently running");
  next();
});

app.get("/", function (req, res) {
  res.send("Welcome to the Pokemon App!");
});

//seed route
app.get("/pokemon/seed", async (req, res) => {
  try {
    await Pokemon.create([
      {
        name: "bulbasaur",
        img: "http://img.pokemondb.net/artwork/bulbasaur",
      },
      {
        name: "charmander",
        img: "http://img.pokemondb.net/artwork/charmander",
      },
      {
        name: "squirtle",
        img: "http://img.pokemondb.net/artwork/squirtle",
      },
    ]);
    res.redirect("/pokemon");
  } catch (err) {
    console.error(err);
  }
});

app.get("/pokemon/", async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.render("Index", { pokemons: pokemons });
  } catch (err) {
    console.error(err);
  }
});

app.get("/pokemon/new", function (req, res) {
  res.render("New");
});

app.delete("/pokemon/:id", async (req, res) => {
  try {
    await Pokemon.findByIdAndRemove(req.params.id);
    res.redirect("/pokemon");
  } catch (err) {
    console.error(err);
  }
});

app.put("/pokemon/:id", async (req, res) => {
  try {
    req.body.img =
      "http://img.pokemondb.net/artwork/" + req.body.name.toLowerCase();
    await Pokemon.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/pokemon");
  } catch (err) {
    console.error(err);
  }
});

app.get("/pokemon/:id", async (req, res) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id);
    res.render("Show", { pokemon: pokemon });
  } catch (err) {
    console.error(err);
  }
});

app.post("/pokemon", async (req, res) => {
  try {
    req.body.img =
      "http://img.pokemondb.net/artwork/" + req.body.name.toLowerCase();
    await Pokemon.create(req.body);
    res.redirect("/pokemon/");
  } catch (err) {
    console.error(err);
  }
});

app.get("/pokemon/:id/edit", async (req, res) => {
  try {
    const editMon = await Pokemon.findById(req.params.id);
    res.render("Edit", { pokemon: editMon });
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
