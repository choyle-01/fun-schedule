var today = moment();
var hour = moment().hour();
var text = $(".description");
var containerEl = $(".container");
var saveBtn = $('.saveBtn');
var timeList = document.querySelectorAll('.hour');

$("#currentDay").text(today.format("LLL"));
console.log(timeList.innerText);

for (let i = 0; i < timeList.length; i++) {
    if (timeList.innerText != hour) {
        console.log('random text');
    }
    
}