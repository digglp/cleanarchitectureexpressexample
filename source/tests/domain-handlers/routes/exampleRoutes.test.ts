import request from "supertest";
import ServerHandler from "../../../src/domain-handlers/serverHandler";

describe("Example routes test suite", () => {
  describe("When /example is called", () => {
    it("should return a 200 status code", async () => {
      const app = new ServerHandler().setup();

      const result = await request(app).get("/example");
      expect(result.status).toBe(200);
    });
    it("should return an object with the correct properties", async () => {
      const app = new ServerHandler().setup();

      const result = await request(app).get("/example");
      expect(result.body).toHaveProperty("exampleString");
      expect(result.body).toHaveProperty("exampleNumber");
    });
  });
});
