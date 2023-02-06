import products from "./products.js";
import {
  getParentElement,
  renderCartList,
  removeProductInCart,
  renderFavoriteCount,
  renderCartActivebtn,
} from "./script.js";

const similarWrapper = document.querySelector(".similar__wrapper");
const similarPrevBtn = document.querySelector(".similar__direction-prev");
const similarNextBtn = document.querySelector(".similar__direction-next");
const similarProductItem = document.querySelector(".similar__item");

similarPrevBtn.addEventListener("click", () => {
  similarWrapper.scrollLeft -= similarProductItem.offsetWidth + 24;
  console.log(similarWrapper.scrollLeft);
});
similarNextBtn.addEventListener("click", () => {
  console.log(similarWrapper.scrollLeft);
  similarWrapper.scrollLeft += similarProductItem.offsetWidth + 24;
});

const favoriteWrapper = document.querySelector(".favorite__wrapper");

function renderFavoriteList() {
  if (localStorage.getItem("favorites") == null) {
    localStorage.setItem("favorites", "[]");
  }
  let favoriteStorages = JSON.parse(localStorage.getItem("favorites"));
  if (favoriteStorages.length > 0) {
    for (let i = 0; i < favoriteStorages.length; i++) {
      let product = products.find((item) => item.id == favoriteStorages[i]);
      let favoriteItem = document.createElement("div");
      favoriteItem.setAttribute(
        "class",
        "col col-lg-4 col-md-4 col-sm-12 favorite__item-wrapper"
      );
      favoriteItem.innerHTML = `
        <div class="favorite__item">
        <div class="favorite__icon-favo active">
            <i class="fa fa-solid fa-heart"></i>
        </div>
        <div class="favorite__img">
            <img src="${product.image[0]}">
        </div>
        <a href="product_page.html" class="favorite__details">
            <p class="favorite__details-title">
            ${product.title}
            </p>
            <p class="favorite__details-auth">By Nedd store</p>
        </a>
    </div>
        `;
      favoriteWrapper.appendChild(favoriteItem);
    }
  }
}
renderFavoriteList();

function removeFavoritedItem() {
  let favoriteItems = document.querySelectorAll(".favorite__item-wrapper");
  favoriteItems.forEach((favoriteItem) => {
    favoriteItem
      .querySelector(".favorite__icon-favo")
      .addEventListener("click", () => {
        let favoriteStorages = JSON.parse(localStorage.getItem("favorites"));
        let favoriteId = favoriteItem.dataset.set;
        let index = favoriteStorages.indexOf(favoriteId);
        favoriteStorages.splice(index, 1);
        localStorage.setItem("favorites", JSON.stringify(favoriteStorages));
        favoriteItem.remove();
        renderFavoriteCount();
      });
  });
}
removeFavoritedItem();
