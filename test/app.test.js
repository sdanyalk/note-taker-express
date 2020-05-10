const supertest = require("supertest");
const app = require("../app");
const request = supertest(app);

describe("App", () => {
    describe("root route", () => {
        it("should respond with 200 success", async () => {
            const response = await request.get("/");
            expect(response.statusCode).toBe(200);
        });
    });
});