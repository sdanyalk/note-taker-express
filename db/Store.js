const { v1: uuidv1 } = require("uuid");
const { readFileAsync, writeFileAsync } = require("./file");

class Store {
    constructor() { };

    async getNotes() {
        const notes = await readFileAsync("db/db.json", "utf8");
        const parsedNotes = JSON.parse(notes);

        return parsedNotes;
    };

    async addNote(note) {
        const { title, text } = note;
        const newNote = { title, text, id: uuidv1() };

        const notes = await this.getNotes();
        notes.push(newNote);

        await writeFileAsync("db/db.json", JSON.stringify(notes));

        return newNote;
    };

    async deleteNote(id) {
        const notes = await this.getNotes();        
        const filteredNotes = notes.filter(note => note.id != id);

        await writeFileAsync("db/db.json", JSON.stringify(filteredNotes));
    };
};

module.exports = Store;
