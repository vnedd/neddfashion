import products from './products.js'

//header search

const searchBox = document.querySelector(".header__search-box");
const searchBtn = document.querySelector(".header__search-box-icon");
const searchInput = document.querySelector(".header__search-box-input");
const searchHistory = document.querySelector(".header__search-history");

searchBtn.addEventListener("click", () => {
  searchBox.classList.toggle("open");
  searchHistory.classList.remove("open");
  searchInput.focus();
});
searchInput.addEventListener("input", () => {
  searchHistory.classList.add("open");
  if (searchInput.value === "") {
    searchHistory.classList.remove("open");
  }
});
//show register modal

const registerModal = document.querySelector(".register");
const registerBtns = document.querySelectorAll(".register-btn");
const registerCloseBtn = document.querySelector(".register__close");
const registerOverlay = document.querySelector(".register__overlay");

registerBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    registerModal.classList.add("show");
    registerOverlay.classList.add("show");
    loginModal.classList.remove("show");
  });
});
function hideRegisterModal() {
  registerModal.classList.remove("show");
}
registerOverlay.addEventListener("click", hideRegisterModal);
registerCloseBtn.addEventListener("click", hideRegisterModal);

//show login modal

const loginModal = document.querySelector(".login");
const loginBtn = document.querySelector(".login-btn");
const loginCloseBtn = document.querySelector(".login__close");
const loginOverlay = document.querySelector(".login__overlay");

loginBtn.addEventListener("click", () => {
  loginModal.classList.add("show");
  loginOverlay.classList.add("show");
});
function hideLoginModal() {
  loginModal.classList.remove("show");
}
loginOverlay.addEventListener("click", hideLoginModal);
loginCloseBtn.addEventListener("click", hideLoginModal);

////scroll to top
const scrollTopBtn = document.getElementById("scroll-to-top");

window.onscroll = () => {
  scrollTopBtn.style.display = window.scrollY > 1000 ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
scrollTopBtn.addEventListener("click", scrollToTop);

/// contact page scroll

function isInViewport(elm) {
  let rectElm = elm.getBoundingClientRect();
  let hightScreen = window.innerHeight || document.documentElement.clientHeight;
  return !(rectElm.bottom < 0 || rectElm.top > hightScreen);
}
const animationShowElms = document.querySelectorAll(".show-by-scroll");
window.addEventListener("scroll", (e) => {
  Array.from(animationShowElms).forEach((elm) => {
    if (isInViewport(elm)) {
      elm.classList.add("start-showing");
    } else {
      elm.classList.remove("start-showing");
    }
  });
});

//render card count

function renderCartCount() {
  if (localStorage.getItem("carts") == null) {
    localStorage.setItem("carts", "[]");
  }
  let cartStorages = JSON.parse(localStorage.getItem("carts"));
  document.querySelector(".header__services-cart-quantity").innerHTML =
    cartStorages.length;
}
renderCartCount();


/// render favorite count

function renderFavoriteCount() {
  const favoriteCountElm = document.querySelector(".header__services-favorite-quantity");
  let favoriteCount = getFavoriteCount();
  favoriteCountElm.innerHTML = favoriteCount;
}

function getFavoriteCount() {
  let inFavorite = products.filter(item => item.inCart === true);
  return inFavorite.length.toString();
}
renderFavoriteCount();
