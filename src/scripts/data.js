const API = {
    getJournalEntries() {
        return fetch("http://localhost:3000/entries")
        .then(entries => entries.json())
    },
    postJournalEntries(newJournalEntry) {
        return fetch("http://localhost:3000/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
        })
    },
    deleteEntry(entryId) {
        return fetch(`http://localhost:3000/entries/${entryId}`, {
            method: "DELETE"
        })
    }
}

export default API