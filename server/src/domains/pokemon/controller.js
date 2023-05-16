const { pokemons, addPokemon } = require("../../config/db-connection");

const getPokemons = (query = "", page = 0, size = 16) => {
  const pageAsNumber = parseFloat(page);
  const sizeAsNumber = parseFloat(size);

  const pokemonValues = Object.values(pokemons);
  const filteredPokemons = pokemonValues
    .filter((pokemon) => pokemon.name.includes(query))
    .slice(pageAsNumber * sizeAsNumber, (pageAsNumber + 1) * sizeAsNumber);

  return {
    pokemons: filteredPokemons,
    pokemonsSize: pokemonValues.length,
  };
};

const getPokemonByName = (name) => {
  return pokemons[name];
};

const likePokemon = (name) => {
  pokemons[name].incrementLike();
  return pokemons[name];
};
const createPokemon = (creationObject) => {
  const pokemonObject = {
    id: parseFloat(creationObject.id),
    name: creationObject.name,
  };
  return addPokemon(pokemonObject);
};

module.exports = { getPokemonByName, getPokemons, likePokemon, createPokemon };
