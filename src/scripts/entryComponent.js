const makeEntry = {
    component(journalEntry) {
        return `
            <h1>${journalEntry.concept}</h1>
            <p>${journalEntry.entry}<br>${journalEntry.date}</p>
        `
    }
}

export default makeEntry;