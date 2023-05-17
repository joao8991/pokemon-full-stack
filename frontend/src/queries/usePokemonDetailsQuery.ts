import { useQuery } from "@tanstack/react-query";
import { QUERIES, BACKEND_URL } from "./queriesReferences";

export const usePokemonDetailsQuery = (name: string) =>
  useQuery([QUERIES.POKEMON_DETAILS_QUERY], () =>
    fetch(`${BACKEND_URL}/${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((response) => response.json())
  );
