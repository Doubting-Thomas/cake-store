const btnAdd = document.querySelector(".btn-info");
const cartCount = document.querySelector(".cart-count");

btnAdd.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    cartCount.classList.remove("hidden");
    console.log("clicked");
  }
});
