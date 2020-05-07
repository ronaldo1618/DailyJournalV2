const makeEntry = {
    component(journalEntry) {
        return `
            <h1>${journalEntry.concept}</h1>
            <p>${journalEntry.entry}<br>${journalEntry.date}</p>
            <button id="delete--${journalEntry.id}">Delete</button>
        `
    },
    formField() {
        return `
        <fieldset>
            <label for="journalDate">Date of entry</label>
            <input type="date" name="journalDate" id="journalDate">
        </fieldset>
        <fieldset>
            <label for="conceptsCovered">Concepts covered</label>
            <input type="text" name="conceptsCovered" id="conceptsCovered">
        </fieldset>
        <fieldset>
            <label for="journalEntry">Journal Entry</label>
            <textarea name="journalEntry" id="journalEntry" cols="30" rows="2"></textarea>
        </fieldset>
        <fieldset>
            <label for="mood">Mood</label>
            <select name="mood" id="mood">
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="excited">Excited</option>
                <option value="anxious">Anxious</option>
            </select>
        </fieldset>
        <fieldset>
            <legend>Filter Entries by Mood</legend> 
            <input type="radio" name="radio-btn" value="happy">
            <label for="happy">Happy</label>
            <input type="radio" name="radio-btn" value="sad">
            <label for="sad">Sad</label>
            <input type="radio" name="radio-btn" value="excited">
            <label for="excited">Excited</label>
            <input type="radio" name="radio-btn" value="anxious">
            <label for="anxious">Anxious</label>
        </fieldset>
        <button id="save-button">Record Journal Entry</button>
        `
    }
}

export default makeEntry;