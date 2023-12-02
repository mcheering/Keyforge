const submit = document.getElementById("mySubmit");
const form = document.getElementById("formWrapper");
const firstName = document.getElementById("myFName");
const lastName = document.getElementById("myLName");
const email = document.getElementById("myEmail");
const quantity = document.getElementById("quantityOrdered");
const comment = document.getElementById("myComment");
const orderFullName = document.getElementById("fullName");
const orderEmail = document.getElementById("email");
const orderBuild = document.getElementById("build");
const orderSwitches = document.getElementById("switches");
const orderQuantity = document.getElementById("quantity");
const orderComments = document.getElementById("comments");
const orderSummary = document.getElementById("orderSummary");
const orderKeyboard = document.getElementById("keyboard");
const total = document.getElementById("total");
const tofu = document.getElementById("tofu");
const tet = document.getElementById("tet");
const odin = document.getElementById("odin");

const switchArray = [
  "No switches = $0",
  "Cherry mx red - $25",
  "Cherry mx blue - $25",
  "Cherry mx brown - $25",
  "Novelkey Creams - $45",
  "Holy Pandas - $65",
];

const buildArray = ["Yes - $100", "No - $0"];

const populateSwitchSelector = (string) => {
  const choice = document.createElement("option");
  choice.innerText = string;
  document.getElementById("switchCheck").appendChild(choice);
};

const populateBuildSelector = (string) => {
  const choice = document.createElement("option");
  choice.innerText = string;
  document.getElementById("buildCheck").appendChild(choice);
};

for (i = 0; i < switchArray.length; i++) {
  populateSwitchSelector(switchArray[i]);
}

for (i = 0; i < buildArray.length; i++) {
  populateBuildSelector(buildArray[i]);
}

const keyboardText = () => {
  if (tofu.checked) {
    return "Tofu 2.0";
  } else if (tet.checked) {
    return "Tet";
  } else {
    return "Odin R3";
  }
};

const keyboardPrice = () => {
  if (tofu.checked) {
    return 120;
  } else if (tet.checked) {
    return 350;
  } else {
    return 300;
  }
};

const validate = (event) => {
  event.preventDefault();
  if (lastName.value == "") {
    lastName.focus();
    return false;
  }
  if (email.value == "") {
    email.focus();
    return false;
  }
  if (
    document.getElementById("buildCheck").options[
      document.getElementById("buildCheck").selectedIndex
    ].text == "--Please choose an option--"
  ) {
    build.focus();
    return false;
  }
  if (
    document.getElementById("switchCheck").options[
      document.getElementById("switchCheck").selectedIndex
    ].text == "--Please choose an option--"
  ) {
    switches.focus();
    return false;
  }

  if (comment.value == "") {
    comment.focus();
    return false;
  }

  return true;
};

document.getElementById("switchCheck").options[0].setAttribute("value", "");

submit.addEventListener("click", (event) => {
  if (!validate(event)) {
    return false;
  } else {
  }
  event.preventDefault();
  const build = document.getElementById("buildCheck");
  const switches = document.getElementById("switchCheck");
  console.log(build);
  console.log(switches);
  const switchChoice =
    document.getElementById("switchCheck").options[
      document.getElementById("switchCheck").selectedIndex
    ].text;

  const buildChoice = build.options[build.selectedIndex].text;

  let switchCost = 0;
  let buildCost = 0;

  if (buildChoice == "Yes - $100") {
    buildCost = 100;
  }
  if (buildChoice == "No - $0") {
    buildCost = 0;
  }
  if (switchChoice == "No switches = $0") {
    switchCost = 0;
  }
  if (
    switchChoice == "Cherry mx red - $25" ||
    switchChoice == "Cherry mx blue - $25" ||
    switchChoice == "Cherry mx brown - $25"
  ) {
    switchCost = 25;
  }
  if (switchChoice == "Novelkey Creams - $45") {
    switchCost = 45;
  }
  if (switchChoice == "Holy Pandas - $65") {
    switchCost = 64;
  }

  let sum =
    (keyboardPrice() + parseInt(switchCost) + parseInt(buildCost)) *
    parseInt(quantity.value);
  form.setAttribute("class", "hidden");
  orderFullName.innerText = `${lastName.value}, ${firstName.value}`;
  orderEmail.innerText = `${email.value}`;
  orderBuild.innerText = `${build.options[build.selectedIndex].text}`;
  orderSwitches.innerText = `${switches.options[switches.selectedIndex].text}`;
  orderQuantity.innerText = `${quantity.value}`;
  orderComments.innerText = `${comment.value}`;
  orderKeyboard.innerText = keyboardText();
  total.innerText = `$${sum}`;
  orderSummary.removeAttribute("class", "hidden");
});
