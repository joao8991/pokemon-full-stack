import { screen } from "@testing-library/react";

import { render } from "../../tests/test-utils";
import PokemonsList from "./PokemonsList";

describe("test PokemonList component", () => {
  it("renders component", async () => {
    render(<PokemonsList />);
    expect(screen.getByTestId("search-testid")).toBeInTheDocument();
  });
});
