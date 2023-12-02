const clickyButton = document.getElementById("clickyButton");
const tactileButton = document.getElementById("tactileButton");
const linearButton = document.getElementById("linearButton");
const quizContainer = document.getElementById("quizContainer");
const blueSwitch = document.getElementById("blueSwitch");
const brownSwitch = document.getElementById("brownSwitch");
const redSwitch = document.getElementById("redSwitch");
const changeContainer = document.getElementById("changeSelection");
const changeChoice = document.getElementById("change");

var selection = 0;

clickyButton.addEventListener("click", (event) => {
  event.preventDefault();
  selection = 1;
  makeSelection(selection);
});

tactileButton.addEventListener("click", (event) => {
  event.preventDefault();
  selection = 2;
  makeSelection(selection);
});

linearButton.addEventListener("click", (event) => {
  event.preventDefault();
  selection = 3;
  makeSelection(selection);
});

changeChoice.addEventListener("click", (event) => {
  event.preventDefault();
  changeChoice.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  changeSelection(selection);
  selection = 0;
});

const makeSelection = (choice) => {
  if (choice == 1) {
    changeChoice.classList.remove("hidden");
    quizContainer.classList.add("hidden");
    blueSwitch.classList.remove("hidden");
  } else if (choice == 2) {
    changeChoice.classList.remove("hidden");
    quizContainer.classList.add("hidden");
    brownSwitch.classList.remove("hidden");
  } else {
    changeChoice.classList.remove("hidden");
    quizContainer.classList.add("hidden");
    redSwitch.classList.remove("hidden");
  }
};

const changeSelection = (choice) => {
  changeChoice.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  if (choice == 1) {
    blueSwitch.classList.add("hidden");
  } else if (choice == 2) {
    brownSwitch.classList.add("hidden");
  } else {
    redSwitch.classList.add("hidden");
  }
};
