const Pokemon = require("../domains/pokemon/model");

//this is a fake db connection
const pokemons = {};

const addPokemons = (...pokemonList) => {
  pokemonList.forEach(([id, name]) => {
    addPokemon({ id, name });
  });
};

const addPokemon = ({ id, name }) => {
  const newPokemon = new Pokemon(id, name);
  pokemons[name] = newPokemon;
  return newPokemon;
};

addPokemons(
  [12, "butterfree"],
  [13, "weedle"],
  [14, "kakuna"],
  [15, "beedrill"],
  [16, "pidgey"],
  [17, "pidgeotto"],
  [18, "pidgeot"],
  [19, "rattata"],
  [20, "raticate"],
  [21, "spearow"],
  [22, "fearow"],
  [23, "ekans"],
  [24, "arbok"],
  [25, "pikachu"],
  [26, "raichu"],
  [27, "sandshrew"],
  [28, "sandslash"],
  [29, "nidoran-f"],
  [30, "nidorina"]
);

module.exports = { pokemons, addPokemon };
