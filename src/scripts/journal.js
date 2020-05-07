import API from "./data.js"
import DOM from "./entriesDOM.js"
import FACTORY from "./createEntry.js"

API.getJournalEntries()
.then(entries => {
    DOM.render(entries)
})

document.getElementById("save-button").addEventListener("click", event => {
    let date = document.getElementById("journalDate").value
    let concept = document.getElementById("conceptsCovered").value
    let entry = document.getElementById("journalEntry").value
    let mood = document.getElementById("mood").value
    if (DOM.formValidation(date, concept, entry) == false) {
        event.preventDefault()
        return document.getElementById("entryLog").innerHTML = "<h2>Please make sure to use the right inputs and all fields are filled out properly</h2>"
    }
    event.preventDefault()
    let newJournalEntry = FACTORY.createJournalEntry(date, concept, entry, mood)
    API.postJournalEntries(newJournalEntry)
    .then( dataJS => {
        return API.getJournalEntries(dataJS)
    })
    .then( journalData => DOM.render(journalData))
})

document.getElementsByName("radio-btn").forEach(radioButton => {
    radioButton.addEventListener("click", event => {
        const mood = event.target.value
        API.getJournalEntries()
        .then( entry => {
            let filtered = entry.filter(entry => entry.mood === mood)
            DOM.render(filtered)})
    })
})

document.getElementById("entryLog").addEventListener("click", event => {
    if (event.target.id.startsWith("delete--")) {
        const entryId = event.target.id.split("--")[1]
        API.deleteEntry(entryId)
        .then(API.getJournalEntries)
        .then(DOM.render)
    }
})