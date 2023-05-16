import { screen } from "@testing-library/react";

import { render } from "../../tests/test-utils";
import PokemonDetails from "./PokemonDetails";

describe("test PokemonDetails component", () => {
  it("renders component", async () => {
    render(<PokemonDetails name="pikachu" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
