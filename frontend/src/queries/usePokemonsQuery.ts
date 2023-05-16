import { useQuery } from "@tanstack/react-query";

export const usePokemonsQuery = (
  queryValue?: string,
  page?: number,
  size?: number
) =>
  useQuery(["POKEMONS_QUERY", queryValue, page, size], () => {
    let url = "http://localhost:8080/pokemon";
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
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((response) => response.json());
  });
