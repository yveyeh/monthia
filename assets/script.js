
function outputMonthDays(month, year) {
    var days = "";
    if (month >= 1 && month <= 12) {
        if (month == 4 || month == 6 || month == 9 || month == 11) {
            days = "30 days";
        } else if (month == 2) {
            if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
                days = "29 days";
            } else {
                days = "28 days";
            }
        } else {
            days = "31 days";
        }
        alert(days);
    } else {
        alert("Please, enter a valid month number.");
    }        
}




