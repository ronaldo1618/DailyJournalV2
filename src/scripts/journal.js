import API from "./data.js"
import DOM from "./entriesDOM.js"
import FACTORY from "./createEntry.js"

// Fetching existing entries and posting them to the DOM
const getSortedEntries = () => {
    API.getJournalEntries()
    .then(entries => {
    const sortedEntries = entries.sort((a, b) => {
        return new Date(a.date) - new Date(b.date)
    })
    DOM.render(sortedEntries)
    })
}
getSortedEntries()

// Assigning values for the edited entry
const updateEntry = entryId => {
    API.getJournalEntry(entryId)
    .then(entry => {
        document.getElementById("journalDate").value = entry.date
        document.getElementById("entryId").value = entry.id
        document.getElementById("conceptsCovered").value = entry.concept
        document.getElementById("journalEntry").value = entry.entry
        document.getElementById("mood").value = entry.mood
    })
}

// Fetching a specific entry
const editEntry = id => {
    const updatedObj = FACTORY.updatedObject()
    API.editEntry(id, updatedObj)
    .then((event) => {
        document.querySelector("#entryId").value = ""
        API.getJournalEntries(entryId)
        .then(getSortedEntries)
        document.getElementById("fieldset-container").reset()
    })
}

// Event Listener to decide whether to record a new entry or edit an existing one
document.getElementById("save-button").addEventListener("click", event => {
    event.preventDefault() // prevents page refresh
    const hiddenEntryId = document.getElementById("entryId")
    if (hiddenEntryId.value !== "") {
        editEntry(hiddenEntryId.value)
    } else {
        let date = document.getElementById("journalDate").value
        let concept = document.getElementById("conceptsCovered").value
        let entry = document.getElementById("journalEntry").value
        let mood = parseInt(document.getElementById("mood").value)
        if (DOM.formValidation(date, concept, entry) == false) {
            return document.getElementById("entryLog").innerHTML = "<h2>Please make sure to use the right inputs and all fields are filled out properly</h2>"
        }
        let newJournalEntry = FACTORY.createJournalEntry(date, concept, entry, mood)
        API.postJournalEntries(newJournalEntry)
        .then( dataJS => getSortedEntries(dataJS))
    }
})

// Event listener to filter results by mood
document.getElementsByName("radio-btn").forEach(radioButton => {
    radioButton.addEventListener("click", event => {
        const mood = event.target.value
        if (mood == "all") {
            return getSortedEntries()
        }
        API.getJournalEntries()
        .then( entry => {
            let filtered = entry.filter(entry => entry.mood.label === mood)
            DOM.render(filtered)})
    })
})

// Event listener to delete or edit a specific entry
document.getElementById("entryLog").addEventListener("click", event => {
    if (event.target.id.startsWith("delete--")) {
        const entryId = event.target.id.split("--")[1]
        API.deleteEntry(entryId)
        .then(getSortedEntries)
    }
    if (event.target.id.startsWith("edit--")) {
        const entryId = event.target.id.split("--")[1]
        updateEntry(entryId)
    }
})

document.getElementById("search").addEventListener("keypress", event => {
    
    if (event.charCode === 13) {
        API.getJournalEntries()
        .then(entries => {
        const searchTerm = event.target.value
        const foundEntries = entries.filter(entry => {
            if (entry.date.includes(searchTerm) || entry.concept.includes(searchTerm) || entry.mood.label.includes(searchTerm) || entry.entry.includes(searchTerm)) {
                return true;
            }
        })
        DOM.render(foundEntries)
    })
    }
})

