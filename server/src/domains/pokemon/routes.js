const express = require("express");
const {
  getPokemons,
  getPokemonByName,
  likePokemon,
  createPokemon,
} = require("./controller");

const router = express.Router();

router.get("/", (req, res) => {
  const { query, page, size } = req.query;
  res.status(200).send(getPokemons(query, page, size));
});

router.get("/:name", (req, res) => {
  const name = req.params.name;
  res.status(200).send(getPokemonByName(name));
});

router.patch("/:name/like", (req, res) => {
  const name = req.params.name;
  res.status(200).send(likePokemon(name));
});

router.post("/", (req, res) => {
  const creationObject = req.body;
  res.status(200).send(createPokemon(creationObject));
});

module.exports = router;
