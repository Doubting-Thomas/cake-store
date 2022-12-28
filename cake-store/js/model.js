const navBtn = document.querySelector(".nav__cart--btn");
const navCart = document.querySelector(".cart");

function revealCart() {
  navCart.classList.remove("hidden");
}

navBtn.addEventListener("click", revealCart);
