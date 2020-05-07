import makeEntry from "./entryComponent.js"

const DOM = {
    render(entries) {
        document.querySelector("#entryLog").innerHTML = ""
        entries.forEach(entry => {
            document.querySelector("#entryLog").innerHTML += makeEntry.component(entry)
        });
    },
    formValidation(date, concept, entry) {
        if (date == "" || concept == "" || entry == "") {
            return false;
        } else {
            return true;
        }
    }

}

export default DOM;