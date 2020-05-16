const mockGetNotes = jest.fn();
const mockAddNotes = jest.fn();

const mock = jest.fn().mockImplementation(() => {
    return { getNotes: mockGetNotes, addNotes: mockAddNotes };
});

module.exports = {
    mockGetNotes: mockGetNotes,
    mockAddNotes: mockAddNotes,
    mock: mock
};