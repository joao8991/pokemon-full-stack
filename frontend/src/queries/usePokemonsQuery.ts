import { QUERIES, BACKEND_URL } from "./queriesReferences";

import { useQuery } from "@tanstack/react-query";

const createUrl = (queryValue?: string, page?: number, size?: number) => {
  let url = BACKEND_URL;
  let hasQuery = false;
  if (queryValue && queryValue.length > 0) {
    url = url.concat("?query=" + queryValue);
    hasQuery = true;
  }
  if (page) {
    url = url.concat(`${hasQuery ? "&" : "?"}page=${page}`);
    hasQuery = true;
  }
  if (size) {
    url = url.concat(`${hasQuery ? "&" : "?"}size=${size}`);
  }
  return url;
};
export const usePokemonsQuery = (
  queryValue?: string,
  page?: number,
  size?: number
) =>
  useQuery([QUERIES.POKEMONS_QUERY, { queryValue, page, size }], () => {
    const url = createUrl(queryValue, page, size);
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((response) => response.json());
  });

// pokemon_key - "p"
// pokemon_key - "pi"
// pokemon_key - "pik"
// pokemon_key - "pika"
// pokemon_key - "pikac"
// pokemon_key - "pikach"
