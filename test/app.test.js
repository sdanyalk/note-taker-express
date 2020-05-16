const supertest = require("supertest");
const app = require("../app");
const request = supertest(app);
const path = require("path");
const Store = require("../db/Store");
const mockStoreFn = require("../db/Store");

jest.mock("../db/Store");

describe("App", () => {
    beforeEach(() => {
        Store.mockClear();
        mockStoreFn.mockClear();
    });

    describe("root route", () => {
        it("should respond with 200 success and html content", async () => {
            const response = await request.get("/");

            expect(response.status).toBe(200);
            expect(response.type).toBe("text/html");
            expect(response.text).toContain("<!DOCTYPE html>");
        });
    });

    describe("GET /api/notes route", () => {
        beforeAll(() => {
            const data = [{ "title": "Test Title", "text": "Test text", "id": "3k94f850-967c-11ea-a6gc-abda3dc51129" }];

            Store.mockImplementation(() => {
                return {
                    getNotes: () => data
                };
            });
        });

        it("should respond with json array data", async () => {
            const response = await request.get("/api/notes");

            expect(response.status).toBe(200);
            expect(response.type).toBe("application/json");
            expect(response.body[0]).toHaveProperty("title");
            expect(response.body[0]).toHaveProperty("text");
        });
    });

    describe("POST /api/notes route", () => {
        beforeAll(() => {
            const note = { title: "Test Title", text: "Test text" };
            const returnNote = { title: "Test Title", text: "Test text", id: "3k94f850-967c-11ea-a6gc-abda3dc51129" };

            Store.mockImplementation(() => {
                return {
                    addNote: (note) => returnNote
                };
            });
        });

        it("should send json object data", async () => {
            const response = await request.post("/api/notes");

            expect(response.status).toBe(200);
            expect(response.type).toBe("application/json");
            expect(response.body).toHaveProperty("title");
            expect(response.body).toHaveProperty("text");
            expect(response.body).toHaveProperty("id");
        });
    });

    describe("Error GET /api/notes route", () => {
        beforeAll(() => {
            Store.mockImplementation(() => {
                return {
                    getNotes: () => { throw new Error("something bad happened") }
                };
            });
        });

        it("should return error", async () => {
            const response = await request.get("/api/notes");

            expect(response.status).toBe(500);
        });
    });

    describe("Error POST /api/notes route", () => {
        beforeAll(() => {
            Store.mockImplementation(() => {
                return {
                    addNote: () => { throw new Error("something bad happened") }
                };
            });
        });

        it("should return error", async () => {
            const response = await request.post("/api/notes");

            expect(response.status).toBe(500);
        });
    });
});