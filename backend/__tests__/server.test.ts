import request from "supertest";
import { app } from "../src/server";

describe("GET /", () => {
  it("responds with a text message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toEqual("Hello, World! Current environment: test");
  });
});
