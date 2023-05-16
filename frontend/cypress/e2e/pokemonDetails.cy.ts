/// <reference types="cypress" />

describe("Test pokemonDetails page main use cases", () => {
  it("should go back to main page", () => {
    cy.visit("http://localhost:5173/pokemon/pikachu");
    cy.get("button").click();
    cy.url().should("not.include", "/pokemon");
  });
});
