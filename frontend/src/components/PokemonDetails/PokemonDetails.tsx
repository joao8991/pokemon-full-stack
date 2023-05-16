import styled from "styled-components";

import { PageLayout } from "../../design/common";
import BackButton from "./BackButton";
import Image from "../common/Image";
import PokemonDetailsContentLoader from "./PokemonDetailsContentLoader";
import { usePokemonDetailsQuery } from "../../queries/usePokemonDetailsQuery";

const PageLayoutStyled = styled(PageLayout)`
  display: flex;
  flex-direction: column;
`;

export const PokemonDetailsHolder = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function PokemonDetails({ name }: { name: string }) {
  const { data: pokemon, isLoading } = usePokemonDetailsQuery(name);

  return (
    <PageLayoutStyled>
      <BackButton />
      {isLoading ? (
        <PokemonDetailsContentLoader />
      ) : (
        <PokemonDetailsHolder>
          <Image
            src={pokemon.imgSrc}
            alt={pokemon.name}
            width={500}
            height={500}
          />
          <div>
            <h2>{pokemon.name}</h2>
            <h3>Description</h3>
            <p>{pokemon.description}</p>
            <h3>Stats</h3>
            <p>Weight: {pokemon.weight}</p>
            <p>Likes: {pokemon.likes}</p>
          </div>
        </PokemonDetailsHolder>
      )}
    </PageLayoutStyled>
  );
}
