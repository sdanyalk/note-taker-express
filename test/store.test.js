const file = require("../db/file");
const Store = require("../db/Store");
const { v1: uuidv1 } = require("uuid");

jest.mock("uuid");
jest.mock("../db/file");

describe("App", () => {
    describe("Constructor", () => {
        it("should call the class constructor", () => {
            const store = new Store();
            expect(typeof store).toBe("object");
        });
    });

    describe("Get Notes", () => {
        let mock;

        beforeAll(() => {
            const data = [{ "title": "Test Title", "text": "Test text", "id": "3k94f850-967c-11ea-a6gc-abda3dc51129" }];

            mock = jest.spyOn(file, "readFileAsync");
            mock.mockImplementation(() => JSON.stringify(data));
        });

        afterEach(() => {
            mock.mockRestore();
        });

        it("should get notes from the file", async () => {
            const store = new Store();
            const expectedNotes = [{ "title": "Test Title", "text": "Test text", "id": "3k94f850-967c-11ea-a6gc-abda3dc51129" }];
            const returnedNotes = await store.getNotes();

            expect(returnedNotes).toEqual(expect.arrayContaining(expectedNotes));
        });
    });

    describe("Add Note", () => {
        let mock;

        beforeAll(() => {
            const data = [{ "title": "Test Title", "text": "Test text", "id": "3k94f850-967c-11ea-a6gc-abda3dc51129" }];

            mockreadFileAsync = jest.spyOn(file, "readFileAsync");
            mockreadFileAsync.mockImplementation(() => JSON.stringify(data));

            mockwriteFileAsync = jest.spyOn(file, "writeFileAsync");
            mockwriteFileAsync.mockImplementation(() => { });

            uuidv1.mockReturnValue("4k94f850-967c-11ea-a6gc-abda3dc51129");
        });

        afterEach(() => {
            mockwriteFileAsync.mockRestore();
            mockreadFileAsync.mockRestore();
        });

        it("should add a note to the file", async () => {
            const data = { "title": "Test Title", "text": "Test text", "id": "4k94f850-967c-11ea-a6gc-abda3dc51129" };
            const store = new Store();
            const inputNote = { "title": "Test Title", "text": "Test text" };
            const returnedNote = await store.addNote(inputNote);

            expect(returnedNote).toMatchObject(data);
        });
    });

    describe("Delete Note", () => {
        let mock;

        beforeAll(() => {
            const data = [{ "title": "Test Title", "text": "Test text", "id": "3k94f850-967c-11ea-a6gc-abda3dc51129" }];

            mockreadFileAsync = jest.spyOn(file, "readFileAsync");
            mockreadFileAsync.mockImplementation(() => JSON.stringify(data));

            mockwriteFileAsync = jest.spyOn(file, "writeFileAsync");
            mockwriteFileAsync.mockImplementation(() => { });
        });

        afterEach(() => {
            mockwriteFileAsync.mockRestore();
            mockreadFileAsync.mockRestore();
        });

        it("should delete a note from the file", async () => {
            const id = "3k94f850-967c-11ea-a6gc-abda3dc51129";
            const store = new Store();
            const success = await store.deleteNote(id);

            expect(success).toBeTruthy();
        });
    });
});
