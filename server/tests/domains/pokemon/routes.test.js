const request = require("supertest");
const app = require("../../../src/server");

const BASE_ROUTE = "/pokemon";

describe("test pokemon routes", () => {
  it("should return a list of pokemon", async () => {
    const response = await request(app).get(BASE_ROUTE);
    expect(response.status).toBe(200);
    expect(response.body.pokemons.length).toEqual(16);
  });

  it("should return 8 pokemons", async () => {
    const response = await request(app).get(`${BASE_ROUTE}?page=0&size=8`);
    expect(response.status).toBe(200);
    expect(response.body.pokemons.length).toEqual(8);
  });

  it("should return 8 pokemons from the second page", async () => {
    const response = await request(app).get(`${BASE_ROUTE}?page=1&size=8`);
    expect(response.status).toBe(200);
    expect(response.body.pokemons.length).toEqual(8);
  });

  it("should increment likes", async () => {
    const response = await request(app).get(`${BASE_ROUTE}`);
    let firstPokemon = response.body.pokemons[0];
    expect(firstPokemon.likes).toEqual(0);
    //like pokemon
    await request(app).patch(`${BASE_ROUTE}/${firstPokemon.name}/like`);

    const responseAfterLike = await request(app).get(`${BASE_ROUTE}`);
    firstPokemon = responseAfterLike.body.pokemons[0];
    expect(firstPokemon.likes).toEqual(1);
  });

  it("should create a pokemon", async () => {
    const requestBody = { name: "test-pokemon", id: 1000 };
    await request(app)
      .post(`${BASE_ROUTE}`)
      .send(requestBody)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");

    //get pokemon
    const response = await request(app).get(
      `${BASE_ROUTE}/${requestBody.name}`
    );

    expect(response.body.name).toEqual(requestBody.name);
  });

  it("should return 404 if the endpoint is not found", async () => {
    const response = await request(app).get("/nonexistent");
    expect(response.status).toBe(404);
  });
});
