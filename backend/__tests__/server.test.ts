import request from "supertest";
import server from "../src/server";

afterAll((done) => {
  server.close(done);
});

describe("GET /", () => {
  it("responds with a text message", async () => {
    const response = await request(server).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toEqual("Hello, World!");
  });
});
