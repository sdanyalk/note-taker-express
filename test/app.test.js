const supertest = require("supertest");
const app = require("../app");
const request = supertest(app);
const path = require("path");

describe("App", () => {
    describe("root route", () => {
        it("should respond with 200 success and html content", async () => {
            const response = await request.get("/");

            expect(response.status).toBe(200);
            expect(response.type).toBe("text/html");
            expect(response.text).toContain("<!DOCTYPE html>");
        });
    });

    describe("/api/notes route", () => {
        it("should respond with json array data", async () => {
            const response = await request.get("/api/notes");

            console.log(response.body[0].title);
            expect(response.status).toBe(200);
            expect(response.type).toBe("application/json");
            expect(response.body[0]).toHaveProperty("title");
            expect(response.body[0]).toHaveProperty("text");
        });
    });
});