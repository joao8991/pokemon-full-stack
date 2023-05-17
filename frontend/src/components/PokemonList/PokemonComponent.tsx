import styled from "styled-components";
import { LinkStyled } from "../../design/common";
import { Pokemon } from "../../types/Pokemon";
import Image from "../common/Image";

const PokemonHolder = styled.div`
  text-align: center;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.2s;

  // effect
  background: rgba(255, 255, 255, 0.29);
  border-radius: 2;
  box-shadow: 0 0px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid white;

  & h4 {
    margin: 10px 0;
  }

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
  }
`;

export default function PokemonComponent({ pokemon }: { pokemon: Pokemon }) {
  const { id, name, imgSrc } = pokemon;

  return (
    <LinkStyled key={id} to={`pokemon/${name}`}>
      <PokemonHolder data-cy="pokemon">
        <Image src={imgSrc} alt={name} width={200} height={200} />
        <h4>{name}</h4>
      </PokemonHolder>
    </LinkStyled>
  );
}
