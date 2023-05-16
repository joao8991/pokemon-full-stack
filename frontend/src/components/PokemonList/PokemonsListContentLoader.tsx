import { ContentLoader } from "../../design/common";

export default function PokemonsListContentLoader() {
  return (
    <>
      {Array.from(Array(16).keys()).map((key: number) => (
        <ContentLoader key={key} width="100%" height="242.5px" />
      ))}
    </>
  );
}
