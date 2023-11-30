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

submit.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(tofu.checked);
  console.log(tet.checked);
  console.log(odin.checked);
  const build = document.getElementById("buildCheck");
  const switches = document.getElementById("switchCheck");
  let sum =
    (keyboardPrice() +
      parseInt(switches.options[switches.selectedIndex].value) +
      parseInt(build.options[build.selectedIndex].value)) *
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
