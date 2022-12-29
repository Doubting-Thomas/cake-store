import {
  btnCart,
  navBtn,
  navCart,
  cartScore,
  cartCount,
  cartTotalValue,
} from "./config.js";
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

        let cartItemValue =
          e.target.parentElement.previousElementSibling.firstChild
            .nextElementSibling.nextElementSibling.textContent;
        console.log(cartItemValue);

        let cartItemPrice = cartItemValue.slice(1).trim();
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
          <span>$</span>
          <span class="cart__price">${cartItem.price}</span>
        </div>
        <a href="#" class="cart-item-remove">
          <img src="img/icons8-trash-can-24.png" alt="trash-icon" />
        </a>
      </div>
    `;
        console.log(addCartItem);

        navCart.insertAdjacentElement("afterbegin", addCartItem);
        alert("Successfully added to cart!");
        cartCount.classList.remove("hidden");
        totalPrice();
      } else {
        console.log("err");
      }
    });
  });
}

addToCart();

function totalPrice() {
  const cartTotal = [];
  const cartItems = document.querySelectorAll(".cart__price");

  cartItems.forEach(function (item) {
    cartTotal.push(parseInt(item.textContent));
  });

  const cartTotalPrice = cartTotal.reduce(function (sum, item) {
    sum += item;
    return sum;
  }, 0);
  console.log(cartTotalPrice);

  cartTotalValue.textContent = `$${cartTotalPrice}`;
  console.log(cartTotalValue);

  cartScore.textContent = cartTotal.length;
  console.log(cartScore);
}
navBtn.addEventListener("click", revealCart);
