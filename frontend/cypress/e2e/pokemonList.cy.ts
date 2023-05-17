/// <reference types="cypress" />

describe("Test pokemonList page main use cases", () => {
  it("should open a pokemon details", () => {
    cy.visit("http://localhost:5173");
    cy.get("[data-cy='pokemon']").first().click();
    cy.url().should("include", "/pokemon");
  });

  it("should show only pikachu", () => {
    cy.visit("http://localhost:5173");
    cy.get("input").type("pikachu");
    cy.get("[data-cy='pokemon']").should("have.length", 1);
  });
});
