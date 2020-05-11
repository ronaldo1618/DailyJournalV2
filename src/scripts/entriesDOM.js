import makeEntry from "./entryComponent.js"

const DOM = {
    render(entries) {
        document.querySelector("#entryLog").innerHTML = ""
        entries.forEach(entry => {
            document.querySelector("#entryLog").innerHTML += makeEntry.component(entry)
        });
    },
    formValidation(date, concept, entry) {
        let regEx = /(ratbastard|bitch|fuck)/gi
        if (date == "" || concept == "" || entry == "") {
            return false;
        } 
        if (regEx.test(entry) || regEx.test(concept)) {
            return false;
        } else {
            return true;
        }
    }
}

export default DOM;