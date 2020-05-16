const Store = require("../db/Store");

module.exports = (app) => {
    app.get("/api/notes", async (req, res) => {
        try {
            const store = new Store();
            const notes = await store.getNotes();

            res.json(notes);
        } catch (error) {
            res.status(500).json(error);
        }
    });

    app.post("/api/notes", async (req, res) => {
        try {
            const store = new Store();
            const note = await store.addNote(req.body);

            res.json(note);
        } catch (error) {
            res.status(500).json(error);
        }
    });

    app.delete("/api/notes/:id", async (req, res) => {
        try {
            const store = new Store();
            await store.deleteNote(req.params.id);

            res.json({ ok: true });
        } catch (error) {
            res.status(500).json(error);
        }
    });
};