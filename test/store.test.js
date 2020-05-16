const file = require("../db/file");
const Store = require("../db/Store");
const { v1: uuidv1 } = require("uuid");

jest.mock("uuid");

describe("App", () => {
    describe("Constructor", () => {
        it("should call the class constructor", () => {
            const store = new Store();
            expect(typeof store).toBe("object");
        });
    });

    describe("Get Notes", () => {
        beforeAll(() => {
            const data = [{ "title": "Test Title", "text": "Test text", "id": "3k94f850-967c-11ea-a6gc-abda3dc51129" }];

            const mock = jest.spyOn(file, "readFileAsync");
            mock.mockImplementation(() => data);

            file.readFileAsync.mockReturnValue(data);
        });

        it("should call get notes from the file", async () => {
            const store = new Store();
            const expectedNotes = [{ "title": "Test Title", "text": "Test text", "id": "3k94f850-967c-11ea-a6gc-abda3dc51129" }];
            const returnedNotes = await store.getNotes();

            expect(returnedNotes).toEqual(expect.arrayContaining(expectedNotes));
        });
    });

    describe("Add Notes", () => {
        const data = { "title": "Test Title", "text": "Test text", "id": "3k94f850-967c-11ea-a6gc-abda3dc51129" };

        beforeAll(() => {
            const mock = jest.spyOn(file, "writeFileAsync");
            mock.mockImplementation(() => { });

            uuidv1.mockReturnValue("3k94f850-967c-11ea-a6gc-abda3dc51129");
        });

        it("should call add note to the file", async () => {
            const store = new Store();
            const inputNote = { "title": "Test Title", "text": "Test text" };
            const returnedNote = await store.addNote(inputNote);

            expect(returnedNote).toMatchObject(data);
        });
    });
});
