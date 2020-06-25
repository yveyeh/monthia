/** 
 * Element holding the report after submit.
 */
const report = document.querySelector('#report')

/** */
function computeInputs(month, year) {
    let days = ""
    if (month >= 1 && month <= 12) {
        if (month == 4 || month == 6 || month == 9 || month == 11) {
            days = "30 days"
        } else if (month == 2) {
            if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
                days = "29 days"
            } else {
                days = "28 days"
            }
        } else {
            days = "31 days"
        }
        report.innerHTML = days + "<br><br>"
        report.style.color = "green"
    } 
    else {
        report.innerHTML = "Please, enter a valid month and year.<br><br>"
        report.style.color = "red"
    }        
}

/** */
function getInputs() {
    const month = document.getElementById('month').value
    const year = document.getElementById('year').value
    return { 
        month: month, 
        year: year 
    }
}

/** */
function outputResults() {
    let inputs = getInputs()
    computeInputs(inputs.month, inputs.year)
}




