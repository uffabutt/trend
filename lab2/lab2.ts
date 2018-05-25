enum days{
 Sunday,
 Monday,
 Tuesday,
 Wednesday,
 Thursday,
 Friday,
 Saturday
}

enum months{
    January,
    Feburary,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

enum earthPhysics{
    gravity = 9.81,
    c = Math.pow(2.99,8),
    weight =1
}

console.log(days[0]);

//html elements 
let pTodayDate = document.getElementById("p--today-date");
let buttonBirthday= document.getElementById("button--birthday");
let pBirthdayMessage= document.getElementById("p--birthday-message");
let inputDatePicker = document.getElementById("input--date-picker");

//today as a date
let today: Date = new Date();


console.log(today.getMonth());


pTodayDate.innerHTML = `Today is ${days[today.getDay()]}${months[today.getMonth()]}${today.getDate()},${today.getFullYear()}`;

buttonBirthday.onclick = function(){

    let userBDay: string = inputDatePicker.value;
    let userBDayDate: Date = new Date(userBDay);

    pBirthdayMessage.innerHTML = makeDateString(userBDayDate);
}
function makeDateString( inputDate: Date): string{

    //if today is your birthday 
    if((inputDate.getDate()===today.getDate())
    && 
    (inputDate.getMonth()===today.getMonth())
    ){
    return `Happy Birthday!!`;
    }

    let thisYearsbirthday = new Date();
    thisYearsbirthday.setDate(inputDate.getDate());
    thisYearsbirthday.setFullYear(today.getFullYear());
    thisYearsbirthday.setMonth(inputDate.getMonth());

    return `Your Birthday is ${days[thisYearsbirthday.getDay()]},${months[inputDate.getMonth()]},${inputDate.getDate()}, ${today.getFullYear()}`

}