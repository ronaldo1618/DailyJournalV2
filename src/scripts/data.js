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
    },
    editEntry(id, updatedObject) {
        return fetch(`http://localhost:3000/entries/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedObject)
        })
        .then(res => res.json())
    },
    getJournalEntry(id) {
        return fetch(`http://localhost:3000/entries/${id}`)
        .then(entries => entries.json())
    }
}

export default API