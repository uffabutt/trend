"use strict";
var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["Feburary"] = 1] = "Feburary";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["August"] = 7] = "August";
    months[months["September"] = 8] = "September";
    months[months["October"] = 9] = "October";
    months[months["November"] = 10] = "November";
    months[months["December"] = 11] = "December";
})(months || (months = {}));
var earthPhysics;
(function (earthPhysics) {
    earthPhysics[earthPhysics["gravity"] = 9.81] = "gravity";
    earthPhysics[earthPhysics["c"] = Math.pow(2.99, 8)] = "c";
    earthPhysics[earthPhysics["weight"] = 1] = "weight";
})(earthPhysics || (earthPhysics = {}));
console.log(days[0]);
//html elements 
var pTodayDate = document.getElementById("p--today-date");
var buttonBirthday = document.getElementById("button--birthday");
var pBirthdayMessage = document.getElementById("p--birthday-message");
var inputDatePicker = document.getElementById("input--date-picker");
//today as a date
var today = new Date();
console.log(today.getMonth());
pTodayDate.innerHTML = "Today is " + days[today.getDay()] + months[today.getMonth()] + today.getDate() + "," + today.getFullYear();
buttonBirthday.onclick = function () {
    var userBDay = inputDatePicker.value;
    var userBDayDate = new Date(userBDay);
    pBirthdayMessage.innerHTML = makeDateString(userBDayDate);
};
function makeDateString(inputDate) {
    //if today is your birthday 
    if ((inputDate.getDate() === today.getDate())
        &&
            (inputDate.getMonth() === today.getMonth())) {
        return "Happy Birthday!!";
    }
    var thisYearsbirthday = new Date();
    thisYearsbirthday.setDate(inputDate.getDate());
    thisYearsbirthday.setFullYear(today.getFullYear());
    thisYearsbirthday.setMonth(inputDate.getMonth());
    return "Your Birthday is " + days[thisYearsbirthday.getDay()] + "," + months[inputDate.getMonth()] + "," + inputDate.getDate() + ", " + today.getFullYear();
}
