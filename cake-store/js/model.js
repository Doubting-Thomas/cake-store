import { btnCart, navBtn, navCart } from "./config.js";
// Display the cart
function revealCart() {
  navCart.classList.toggle("hidden");
}
console.log("yes");

//Add items to the cart
function addToCart() {
  btnCart.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      if (e.target.parentElement.classList.contains("btn-info")) {
        console.log(
          e.target.parentElement.previousElementSibling.previousElementSibling
            .firstChild.nextSibling.src
        );
      } else {
        console.log("err");
      }
    });
  });
}

// function addToCart() {
//   btnCart.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//       // if (e.target.classList.contains("product__btn")) {
//       //   console.log(e.target);
//       // } else {
//       //   console.log("err");
//       // }
//       const clicked = e.target.closest("product__img");
//       console.log(clicked);
//     });
//   });
// }
addToCart();
navBtn.addEventListener("click", revealCart);

// btnCart.addEventListener("click", addToCart);
