const express = require("express");

const { routes: pokemonRoutes } = require("../domains/pokemon/index");

const router = express.Router();

router.use("/pokemon", pokemonRoutes);

module.exports = router;
