const makeEntry = {
    component(journalEntry) {
        return `
            <h1>${journalEntry.concept}</h1>
            <p>${journalEntry.entry}<br>${journalEntry.date}</p>
            <button id="delete--${journalEntry.id}">Delete</button>
            <button id="edit--${journalEntry.id}">Edit</button>
        `
    }
}

export default makeEntry;