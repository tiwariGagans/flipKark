// ------------ Page Redirect ------------
let itemsCard = document.querySelectorAll(".items-card");
itemsCard.forEach((items) => {
  items.addEventListener("click", () => {
    window.open("variety.html");
  });
});

let varietyContainer = document.querySelectorAll(".variety-container");
varietyContainer.forEach((varietyBox) => {
  varietyBox.addEventListener("click", () => {
    window.open("oder.html");
  });
});

// ------------ Dynamic Pruduct Image Change ------------
let smallImage = document.querySelectorAll(".small-image");
let mainImage = document.querySelector(".main-image");

smallImage.forEach((image) => {
  image.addEventListener("click", () => {
    mainImage.src = image.src;
  });
});

// ------------ Add to cart ------------
let cart = document.querySelector(".cart");
let addCart = document.getElementById("add-cart");
addCart.addEventListener("click", () => {
  let item = Number(cart.getAttribute("data-count") || 0);
  cart.setAttribute("data-count", item + 1);
  cart.classList.add("on");
});