var today = moment();
var hour = moment().hour();
var textEl = document.querySelectorAll(".description");
var saveBtn = document.querySelectorAll(".saveBtn");

// shows the current date at the top of the page in the proper format

$("#currentDay").text(today.format("LLL"));

/* uses a forEach loop to create a scenario where if the id value for each text element is greater than or less than the current hour a class of future of past will be
assigned otherwise they will be considered the present*/

textEl.forEach((time) => {
  if (time.id > hour) {
    time.classList.add("future");
  } else if (time.id < hour) {
    time.classList.add("past");
  } else {
    time.classList.add("present");
  }
});

/* uses another forEach loop where for each save button there was an event listener that could store all the inputed values in all the text fields of the document.
The stored values are stringified and parsed back out to their places in the page whenever reloaded*/

saveBtn.forEach((save, i) => {
  save.addEventListener("click", (event) => {
    event.preventDefault();
    var store = Array.from(textEl, (text) => text.value);
    var eachTxt;
    textEl.forEach((inputArea) => {
      if (inputArea.id === event.target.name) {
        eachTxt = inputArea;
      }
    });
    localStorage.setItem("Save", JSON.stringify(store));
  });
  textEl[i].value = JSON.parse(localStorage.getItem("Save"))[i];
});
