const cartItemsContainer = document.getElementById("cartItems");
const addOdinEmptyCase = document.getElementById("addOdinEmptyCase");
const addOdinFoam = document.getElementById("addOdinFoam");
const addOdinPlate = document.getElementById("addOdinPlate");
const addOdinFull = document.getElementById("addOdinFull");
const addTetCaseWeight = document.getElementById("addTetCaseWeight");
const addTetEmptyCase = document.getElementById("addTetEmptyCase");
const addTetFullCase = document.getElementById("addTetFullCase");
const addTofuEmptyCase = document.getElementById("addTofuEmptyCase");
const addTofuFullCase = document.getElementById("addTofuFullCase");
//objects for each item sold
const odinEmptyCase = {
  name: "Odin Empty Case",
  price: 200.0,
};

const odinFoam = {
  name: "Odin Case Foam",
  price: 18.0,
};

const odinPlate = {
  name: "Odin Plate",
  price: 40.0,
};

const odinFull = {
  name: "Odin R3 - Assemble Yourself - Keycaps Included",
  price: 350.0,
};

const tetCaseWeight = {
  name: "Tet Case Weight",
  price: 45.0,
};

const emptyTetCase = {
  name: "Empty Tet Case",
  price: 275.0,
};

const tetFull = {
  name: "Tet - Assemble Yourself - Keycaps Included",
  price: 400.0,
};

const tofuFull = {
  name: "Tofu 2.0 - Assemble Yourself - Keycaps Included",
  price: 180.0,
};

let cart = {};

//function for creating html element and adding it to cart
const addToCart = (item) => {
  const cartItem = document.createElement("div");
  cartItem.setAttribute("class", "cartItem");

  //holds product name
  const about = document.createElement("div");
  about.setAttribute("class", "about");
  const productTitle = document.createElement("h3");
  productTitle.setAttribute("class", "title");
  productTitle.innerText = item.name;
  about.appendChild(productTitle);

  //holds price and remove item
  const productPrice = document.createElement("div");
  productPrice.setAttribute("class", "prices");
  const removeBtn = document.createElement("div");
  removeBtn.setAttribute("class", "cost");
  const price = document.createElement("div");
  price.innerText = item.price;
  const remove = document.createElement("u");
  remove.innerText = "Remove";
  removeBtn.appendChild(remove);
  productPrice.appendChild(price);
  productPrice.appendChild(removeBtn);
  cartItem.appendChild(about);
  cartItem.appendChild(productPrice);
  cartItem.appendChild(removeBtn);
  cartItemsContainer.appendChild(cartItem);
};

//Adding event listeners to each link
addOdinEmptyCase.addEventListener("click", () => {
  addToCart(odinEmptyCase);
});
