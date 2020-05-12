const FACTORY = {
    createJournalEntry(date, concept, entry, mood) {
        return {
            date: date,
            concept: concept,
            entry: entry,
            moodId: mood
        }
    },
    updatedObject() {
        return {
            date: document.getElementById("journalDate").value,
            concept: document.getElementById("conceptsCovered").value,
            entry: document.getElementById("journalEntry").value,
            moodId: parseInt(document.getElementById("mood").value)
        }
    }
}


export default FACTORY