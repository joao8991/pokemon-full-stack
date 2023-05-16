import { styled } from "styled-components";
import { ContentLoader } from "../../design/common";
import { PokemonDetailsHolder } from "./PokemonDetails";

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default function PokemonDetailsContentLoader() {
  return (
    <PokemonDetailsHolder>
      <ContentLoader width="500px" height="500px" />
      <div>
        <ContentLoader width="140px" height="20px" />
        <h3>Description</h3>
        <ContentLoader width="180px" height="20px" />
        <h3>Stats</h3>
        <FlexDiv>
          <p>Weight:</p>
          <ContentLoader width="20px" height="20px" />
        </FlexDiv>
        <FlexDiv>
          <p>Likes:</p>
          <ContentLoader width="20px" height="20px" />
        </FlexDiv>
      </div>
    </PokemonDetailsHolder>
  );
}
