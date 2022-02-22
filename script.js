// DOM Elements

let minus = document.querySelectorAll(".fa-minus");
let plus = document.querySelectorAll(".fa-plus");
let productQuantity = document.querySelectorAll("#product-quantity");
let removeProduct = document.querySelectorAll(".remove-product");
let productLinePrice = document.querySelectorAll(".product-line-price");
let subtotal = document.getElementById("cart-subtotal").children[1];
let tax = document.getElementById("cart-tax").children[1];
let shipping = document.querySelector("#cart-shipping").children[1];
let totalPrice = document.getElementById("cart-total").children[1];

console.log(productLinePrice);

// console.log(productQuantity.innerText);

// functions

plus.forEach((e) => {
  e.parentElement.addEventListener("click", () => {
    let quantity = e.parentElement.parentElement.children[1].innerText++;
    let productPrice =
      e.parentElement.parentElement.parentElement.children[1].children[0]
        .children[0].innerText;
    let productPriceTotal = productPrice * (quantity + 1);
    e.parentElement.parentElement.parentElement.children[4].innerHTML =
      productPriceTotal.toFixed(2);

    buying();
  });
});

minus.forEach((e) => {
  e.parentElement.addEventListener("click", () => {
    if (e.parentElement.parentElement.children[1].innerHTML < 2) {
      e.parentElement.parentElement.parentElement.parentElement.remove();
    }
    let quantity = e.parentElement.parentElement.children[1].innerText--;
    let productPrice =
      e.parentElement.parentElement.parentElement.children[1].children[0]
        .children[0].innerText;
    let productPriceTotal = productPrice * (quantity - 1);
    e.parentElement.parentElement.parentElement.children[4].innerHTML =
      productPriceTotal.toFixed(2);

    buying();
  });
});

let removeButton = () => {
  removeProduct.forEach((e) => {
    e.addEventListener("click", () => {
      e.parentElement.parentElement.parentElement.remove();
      e.parentElement.parentElement.children[4].innerHTML = 0;
      buying();
    });
  });
};
removeButton();

let buying = () => {
  totalShopping = 0;
  productLinePrice.forEach((item) => {
    totalShopping += +item.innerHTML;
  });

  subtotal.innerHTML = totalShopping.toFixed(2);
  tax.innerHTML = ((totalShopping * 18) / 100).toFixed(2);
  shipping.innerHTML = "15.00";
  totalPrice.innerHTML = (
    +subtotal.innerHTML +
    +tax.innerHTML +
    +shipping.innerHTML
  ).toFixed(2);

  if (subtotal.innerHTML == 0 && tax.innerHTML == 0) {
    shipping.innerHTML = "0.00";
    totalPrice.innerHTML = "0.00";
  }
};
buying();
