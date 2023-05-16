export interface Pokemon {
  id: number;
  name: string;
  weight: number;
  likes: number;
  imgSrc: string;
  description: string;
}

export interface PokemonsResponse {
  pokemons: Pokemon[];
  pokemonsSize: number;
}
