import {
  getParentElement,
  renderCartList,
  removeProductInCart,
  renderCartCount,
  renderCartActivebtn,
} from "./script.js";
import products from "./products.js";


const shippingOptions = document.querySelectorAll(
  ".cart__total-shipping-item"
);
const inputShippingOptions = document.querySelectorAll(
  ".cart__total-shipping-item input"
);

// render cart item

function renderCartItem() {
  const cartWrapper = document.querySelector(".cart__list");
  const cartTotalWrapper = document.querySelector(".cart__total-product-wrapper");
 
  if (localStorage.getItem("carts") == null) {
    localStorage.setItem("carts", "[]");
  }
  let cartStorages = JSON.parse(localStorage.getItem("carts"));
  cartTotalWrapper.innerHTML = "";
  cartWrapper.innerHTML = "";
  document.querySelector(".cart__header span").innerHTML = cartStorages.length;
  for (let i = 0; i < cartStorages.length; i++) {
    let product = products.find((item) => item.id == cartStorages[i]);
    let cartItem = document.createElement("div");
    let cartTotalItem = document.createElement("div");
    cartTotalItem.setAttribute("class", "cart__total-product-item");
    cartItem.setAttribute("class", "cart__item");
    cartItem.innerHTML = `
    <div class="cart__item-img">
        <img src="${product.image}">
    </div>
    <div class="cart__item-details">
        <p class="cart__item-details-name">
        ${product.title}
        </p>
        <div class="cart__item-details-style">
            <p class="cart__item-details-style-color">
                Color: <span>Blue</span>
            </p>
            <p class="cart__item-details-style-size">
                Size: <span>M</span>
            </p>
        </div>
    </div>
    <div class="cart__item-quantity">
        <span class="cart__item-quantity-decrease">-</span>
        <input required class="cart__item-quantity-input" type="text" value="1">
        <span class="cart__item-quantity-increase">+</span>
    </div>
    <div class="cart__item-price">
        $<span data-set="${product.price}">${product.price}</span>
    </div>
    <div class="cart__item-delete">
        <i class="fa-solid fa-xmark"></i>
    </div>
    `;
    cartTotalItem.innerHTML = `
    <p class="cart__total-product-item-name">
        ${product.title}
    </p>
    <p class="cart__total-product-item-quantity">
        x<span>1</span>
    </p>
    <p class="cart__total-product-item-price">
        $<span>${product.price}</span>
    </p>
    `;
    cartTotalWrapper.appendChild(cartTotalItem);
    cartWrapper.appendChild(cartItem);
  }
  const cartTotalList = document.querySelectorAll(".cart__total-product-item");
  //inscrease quantity
  const inscreaseQuantityBtns = document.querySelectorAll(
    ".cart__item-quantity-increase"
  );

  inscreaseQuantityBtns.forEach((btn, index) => {
    btn.addEventListener("click", (e) =>
      handleIncreaseQuantity(e.target, index,cartTotalList)
    );
  });

  // decrease quantity
  const decreaseQuantityBtns = document.querySelectorAll(
    ".cart__item-quantity-decrease"
  );
  decreaseQuantityBtns.forEach((btn, index) => {
    btn.addEventListener("click", (e) =>
      handleDecreaseQuantity(e.target, index,cartTotalList)
    );
  });

  
  const quantityInputs = document.querySelectorAll(
    ".cart__item-quantity-input"
  );

  checkQuantityInput(quantityInputs,cartTotalList);
   
}
renderCartItem();
// increase quantity

function handleIncreaseQuantity(btn, index,cartTotalList) {
  const parentElm = getParentElement(btn, ".cart__item");
  const quantityInput = parentElm.querySelector(".cart__item-quantity-input");
  let value = parseInt(quantityInput.value);
  value++;
  quantityInput.value = value;
  const price = parentElm.querySelector(".cart__item-price span").dataset.set;
  let total = Math.floor(value * price);
  parentElm.querySelector(".cart__item-price span").innerText = total;

  cartTotalList[index].querySelector(
    ".cart__total-product-item-quantity span"
  ).innerText = value;
  cartTotalList[index].querySelector(
    ".cart__total-product-item-price span"
  ).innerText = total;
  caculatorSubTotal(cartTotalList);
  caculatorTotal();
}

// decrease quantity
function handleDecreaseQuantity(btn, index, cartTotalList) {
  const parentElm = getParentElement(btn, ".cart__item");
  const quantityInput = parentElm.querySelector(".cart__item-quantity-input");
  let value = parseInt(quantityInput.value);
  if (value > 1) {
    value--;
    quantityInput.value = value;
    const price = parentElm.querySelector(".cart__item-price span").dataset.set;
    let total = Math.floor(value * price);
    parentElm.querySelector(".cart__item-price span").innerText = total;
    cartTotalList[index].querySelector(
      ".cart__total-product-item-quantity span"
    ).innerText = value;
    cartTotalList[index].querySelector(
      ".cart__total-product-item-price span"
    ).innerText = total;
    caculatorSubTotal(cartTotalList);
    caculatorTotal();
  }
}

// valid quntity input

function checkQuantityInput(quantityInputs, cartTotalList) {
  quantityInputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      let parentElm = getParentElement(e.target, ".cart__item");
      let value = e.target.value;
      if (isNaN(value) || value < 1) {
        value = 1;
      } else {
        value = value;
      }
      e.target.value = value;
      const price = parentElm.querySelector(".cart__item-price span").dataset
        .set;
      let total = Math.floor(value * price);
      parentElm.querySelector(".cart__item-price span").innerText = total;
      cartTotalList[index].querySelector(
        ".cart__total-product-item-quantity span"
      ).innerText = value;
      cartTotalList[index].querySelector(
        ".cart__total-product-item-price span"
      ).innerText = total;
      caculatorSubTotal(cartTotalList);
      caculatorTotal();
    });
  });
}

// cauclator subtotal

function caculatorSubTotal(cartTotalList) {
  let total = Array.from(cartTotalList).reduce((acc, item) => {
    let price = item.querySelector(
      ".cart__total-product-item-price span"
    ).innerText;
    return acc + parseInt(price);
  }, 0);
  document.querySelector(".cart__total-subtotal-price span").innerText = total;
}



// render total;
function caculatorTotal() {
  let subtotal = document.querySelector(
    ".cart__total-subtotal-price span"
  ).innerText;
  let shippingPrice = 0;
  inputShippingOptions.forEach((item) => {
    if (item.checked) {
      shippingPrice = item.value;
    }
  });
  document.querySelector(".cart__total-total-price span").innerHTML =
    Number(shippingPrice) + parseInt(subtotal);
}

inputShippingOptions.forEach((item) => {
  item.onchange = () => {
    caculatorTotal();
  };
});

function renderPriceShipping() {
  shippingOptions.forEach((item) => {
    let shippingPrice = item.querySelector("input").value;
    item.querySelector(".cart__total-shipping-price span").innerText =
      shippingPrice;
  });
}
renderPriceShipping();

renderCartList();
removeProductInCart();

// remove product in list
function removeProductCartInList() {
  const removeBtns = document.querySelectorAll(".cart__item-delete");
  if(removeBtns.length > 0) {
    removeBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let parent = getParentElement(e.target, ".cart__item");
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

removeProductCartInList();