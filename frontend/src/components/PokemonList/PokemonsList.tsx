import { useRef, useState } from "react";
import styled from "styled-components";

import TopPanel from "./TopPanel";
import { Pokemon } from "../../types/Pokemon";
import PokemonComponent from "./PokemonComponent";
import { usePokemonsQuery } from "../../queries/usePokemonsQuery";
import PokemonsListContentLoader from "./PokemonsListContentLoader";

const PokemonsHolder = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

const NoPokemon = styled.div`
  text-align: center;
  font-size: 60px;
  position: absolute;
  margin-top: 50px;
  width: 100%;
  box-sizing: border-box;
`;

export default function PokemonsList() {
  const [queryValue, setQueryValue] = useState<string>("");

  const { data: pokemonsResponse = {}, isLoading } =
    usePokemonsQuery(queryValue);

  const debounceTimeoutRef = useRef<number>();

  const handleSearchInputChange = (event: { target: { value: string } }) => {
    //if there's a timeout to be executed is canceled
    clearTimeout(debounceTimeoutRef.current);

    //set query in 400ms
    debounceTimeoutRef.current = window.setTimeout(() => {
      setQueryValue(event.target.value);
    }, 400);
  };

  const pokemons = pokemonsResponse?.pokemons || [];

  return (
    <main>
      <PokemonsHolder>
        {isLoading ? (
          <PokemonsListContentLoader />
        ) : (
          <>
            {pokemons.length === 0 ? (
              <NoPokemon>no pokemon found</NoPokemon>
            ) : null}
            {pokemons.map((pokemon: Pokemon, index: number) => (
              <PokemonComponent key={index} pokemon={pokemon} />
            ))}
          </>
        )}
      </PokemonsHolder>
    </main>
  );
}
