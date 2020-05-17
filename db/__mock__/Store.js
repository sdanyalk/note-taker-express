const mockGetNotes = jest.fn();
const mockAddNote = jest.fn();
const mockDeleteNote = jest.fn();

const mock = jest.fn().mockImplementation(() => {
    return { getNotes: mockGetNotes, addNote: mockAddNote, deleteNote: mockDeleteNote };
});

module.exports = {
    mockGetNotes: mockGetNotes,
    mockAddNote: mockAddNote,
    mockDeleteNote:  mockDeleteNote,
    mock: mock
};