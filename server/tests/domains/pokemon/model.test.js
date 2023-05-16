const { Pokemon } = require("../../../src/domains/pokemon");

describe("test pokemon model", () => {
  it("create Pokemon object", () => {
    const name = "name";
    const id = 1;
    const pokemon = new Pokemon(id, name);
    expect(pokemon.likes).toBe(0);
    expect(pokemon.name).toBe(name);
    expect(pokemon.id).toBe(id);
  });

  it("should increment likes", () => {
    const pokemon = new Pokemon();
    pokemon.incrementLike();
    expect(pokemon.likes).toBe(1);
  });
});
