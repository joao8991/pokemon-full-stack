import { useQuery } from "@tanstack/react-query";

export const usePokemonDetailsQuery = (name: string) =>
  useQuery(["POKEMON_DETAILS_QUERY"], () =>
    fetch(`http://localhost:8080/pokemon/${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((response) => response.json())
  );
