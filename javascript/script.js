import products from "./products.js";
//export

export {
  renderCartCount,
  renderFavoriteCount,
  getParentElement,
  renderCartActivebtn,
  renderFavoriteActivebtn,
  renderCartList,
  removeProductInCart,
  handleAddCart,
  handleAddFavorite,
};

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

/// about us page scroll

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


// handle add cart
function handleAddCart(btn) {
  let parent = getParentElement(btn, ".product__item");
  let id = parent.dataset.set;
  if (localStorage.getItem("carts") == null) {
    localStorage.setItem("carts", "[]");
  }
  let cartStorages = JSON.parse(localStorage.getItem("carts"));
  if (cartStorages.includes(id)) {
    parent
      .querySelector(".product__services-add-cart")
      .classList.remove("active");
    cartStorages.splice(cartStorages.indexOf(id), 1);
    localStorage.setItem("carts", JSON.stringify(cartStorages));
    renderCartCount();
    renderCartList();
    removeProductInCart();
  } else {
    parent.querySelector(".product__services-add-cart").classList.add("active");
    cartStorages.push(id);
    localStorage.setItem("carts", JSON.stringify(cartStorages));
    renderCartCount();
    renderCartList();
    removeProductInCart();
  }
}

// handle add favorite
function handleAddFavorite(btn) {
  let parent = getParentElement(btn, ".product__item");
  let id = parent.dataset.set;
  if (localStorage.getItem("favorites") == null) {
    localStorage.setItem("favorites", "[]");
  }
  let favoriteStorages = JSON.parse(localStorage.getItem("favorites"));
  if (favoriteStorages.includes(id)) {
    parent
      .querySelector(".product__services-favorite")
      .classList.remove("active");
    favoriteStorages.splice(favoriteStorages.indexOf(id), 1);
    localStorage.setItem("favorites", JSON.stringify(favoriteStorages));
    renderFavoriteCount();
  } else {
    parent.querySelector(".product__services-favorite").classList.add("active");
    favoriteStorages.push(id);
    localStorage.setItem("favorites", JSON.stringify(favoriteStorages));
    renderFavoriteCount();
  }
}


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
  if (localStorage.getItem("favorites") == null) {
    localStorage.setItem("favorites", "[]");
  }
  let favoriteStorages = JSON.parse(localStorage.getItem("favorites"));
  document.querySelector(".header__services-favorite-quantity").innerHTML =
    favoriteStorages.length;
}
renderFavoriteCount();
/// render product incart

function getParentElement(element, selector) {
  while (element.parentElement) {
    if (element.parentElement.matches(selector)) {
      return element.parentElement;
    }
    element = element.parentElement;
  }
}

//render cart active btn
function renderCartActivebtn() {
  if (localStorage.getItem("carts") == null) {
    localStorage.setItem("carts", "[]");
  }
  let cartStorages = JSON.parse(localStorage.getItem("carts"));
  if (cartStorages.length > 0) {
    cartStorages.forEach((id) => {
      let productElms = document.querySelectorAll(".product__item");
      let product = products.find((item) => item.id == id);
      productElms.forEach((productElm) => {
        if (productElm.dataset.set == product.id) {
          productElm
            .querySelector(".product__services-add-cart")
            .classList.add("active");
        }
      });
    });
  } else {
    let productElms = document.querySelectorAll(".product__item");
    productElms.forEach((productElm) => {
      productElm
        .querySelector(".product__services-add-cart")
        .classList.remove("active");
    });
  }
}

function renderFavoriteActivebtn() {
  if (localStorage.getItem("favorites") == null) {
    localStorage.setItem("favorites", "[]");
  }
  let favoriteStorages = JSON.parse(localStorage.getItem("favorites"));
  if (favoriteStorages.length > 0) {
    favoriteStorages.forEach((id) => {
      let productElms = document.querySelectorAll(".product__item");
      let product = products.find((item) => item.id == id);
      productElms.forEach((productElm) => {
        if (productElm.dataset.set == product.id) {
          productElm
            .querySelector(".product__services-favorite")
            .classList.add("active");
        }
      });
    });
  }
}

//render cart list
function renderCartList() {
  if (localStorage.getItem("carts") == null) {
    localStorage.setItem("carts", "[]");
  }
  let cartStorages = JSON.parse(localStorage.getItem("carts"));
  let cartList = document.querySelector(".header__services-cart-list");
  if (cartStorages.length > 0) {
    cartList.innerHTML = "";
    document
      .querySelector(".header__services-cart-empty")
      .classList.add("hide");
    document.querySelector(".header__services-cart-link").classList.add("show");
    for (let i = 0; i < cartStorages.length; i++) {
      let product = products.find((item) => item.id == cartStorages[i]);
      cartList.innerHTML += `
      <li class="header__services-cart-item" data-set="${product.id}">
      <div class="header__services-cart-item-img">
          <img src="${product.image[0]}" alt="">
      </div>
      <div class="header__services-cart-item-info">
          <h2 class="header__services-cart-item-name">
          ${product.title}
          </h2>
          <p class="header__services-cart-item-price">X<span>1</span>$${product.price}</p>
      </div>
      <div class="header__services-cart-item-close">
          <i class="fa-solid fa-xmark"></i>
      </div>
  </li>
      `;
    }
  } else {
    document
      .querySelector(".header__services-cart-empty")
      .classList.remove("hide");
    document
      .querySelector(".header__services-cart-link")
      .classList.remove("show");
    cartList.innerHTML = "";
  }
}

function removeProductInCart() {
  const removeCartBtns = document.querySelectorAll(
    ".header__services-cart-item-close"
  );
  if (removeCartBtns) {
    removeCartBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let parent = getParentElement(e.target, ".header__services-cart-item");
        let id = parent.dataset.set;
        parent.remove();
        let cartStorages = JSON.parse(localStorage.getItem("carts"));
        cartStorages.splice(cartStorages.indexOf(id), 1);
        localStorage.setItem("carts", JSON.stringify(cartStorages));
        renderCartCount();
        renderCartActivebtn();
        if (cartStorages.length == 0) {
          document
            .querySelector(".header__services-cart-link")
            .classList.remove("show");
          document
            .querySelector(".header__services-cart-empty")
            .classList.remove("hide");
        }
      });
    });
  }
}


