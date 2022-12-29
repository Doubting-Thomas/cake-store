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
        let imgSrc =
          e.target.parentElement.previousElementSibling.previousElementSibling
            .firstChild.nextSibling.src;
        let imgPos = imgSrc.indexOf("img");
        let imgPath = imgSrc.slice(imgPos);
        console.log(imgPath);

        const cartItem = {};
        cartItem.img = imgPath;
        let cartItemName =
          e.target.parentElement.previousElementSibling.firstChild
            .nextElementSibling.textContent;
        cartItem.name = cartItemName;
        let cartItemPrice =
          e.target.parentElement.previousElementSibling.firstChild
            .nextElementSibling.nextElementSibling.textContent;
        cartItem.price = cartItemPrice;
        console.log(cartItem);

        // Insert the values into the HTML
        const addCartItem = document.createElement("div");
        addCartItem.classList.add("cart__item");

        addCartItem.innerHTML = `
        <img
          src="${cartItem.img}"
          class="cart-mini"
          alt="cake-img"
        />
        <div class="cart__text">
          <p class="cart__title">${cartItem.name}</p>
          <span class="cart__price">${cartItem.price}</span>
        </div>
        <a href="#" class="cart-item-remove">
          <img src="img/icons8-trash-can-24.png" alt="trash-icon" />
        </a>
      </div>
    `;
        console.log(addCartItem);

        navCart.insertAdjacentElement("beforeend", addCartItem);
        alert("Successfully added to cart!");
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
