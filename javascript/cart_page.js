const inscreaseQuantityBtns = document.querySelectorAll(
  ".cart__item-quantity-increase"
);
const decreaseQuantityBtns = document.querySelectorAll(
  ".cart__item-quantity-decrease"
);
const quantityInputs = document.querySelectorAll(".cart__item-quantity-input");

const cartItems = document.querySelectorAll(".cart__item");

const cartTotalList = document.querySelectorAll(".cart__total-product-item");

const shippingOptions = document.querySelectorAll(".cart__total-shipping-item");
const inputShippingOptions = document.querySelectorAll(".cart__total-shipping-item input");
// function get parrent element

function getParentElement(element, selector) {
  while (element.parentElement) {
    if (element.parentElement.matches(selector)) {
      return element.parentElement;
    }
    element = element.parentElement;
  }
}

// increase quantity

inscreaseQuantityBtns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    const parentElm = getParentElement(e.target, ".cart__item");
    const quantityInput = parentElm.querySelector(".cart__item-quantity-input");
    let value = parseInt(quantityInput.value);
    value++;
    quantityInput.value = value;
    const price = parentElm.querySelector(".cart__item-price span").dataset.set;
    let total = value * price;
    parentElm.querySelector(".cart__item-price span").innerText = total;

    cartTotalList[index].querySelector(
      ".cart__total-product-item-quantity span"
    ).innerText = value;
    cartTotalList[index].querySelector(
      ".cart__total-product-item-price span"
    ).innerText = total;
    caculatorSubTotal();
    caculatorTotal();
  });
});

// decrease quantity
decreaseQuantityBtns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    const parentElm = getParentElement(e.target, ".cart__item");
    const quantityInput = parentElm.querySelector(".cart__item-quantity-input");
    let value = parseInt(quantityInput.value);
    if (value > 1) {
      value--;
      quantityInput.value = value;
      const price = parentElm.querySelector(".cart__item-price span").dataset
        .set;
      let total = value * price;
      parentElm.querySelector(".cart__item-price span").innerText = total;
      cartTotalList[index].querySelector(
        ".cart__total-product-item-quantity span"
      ).innerText = value;
      cartTotalList[index].querySelector(
        ".cart__total-product-item-price span"
      ).innerText = total;
      caculatorSubTotal();
      caculatorTotal();
    }
  });
});

// valid quntity input

function checkQuantityInput() {
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
      let total = value * price;
      parentElm.querySelector(".cart__item-price span").innerText = total;
      cartTotalList[index].querySelector(
        ".cart__total-product-item-quantity span"
      ).innerText = value;
      cartTotalList[index].querySelector(
        ".cart__total-product-item-price span"
      ).innerText = total;
      caculatorSubTotal();
      caculatorTotal();
    });
  });
}
checkQuantityInput();
// cauclator subtotal

function caculatorSubTotal() {
  let total = Array.from(cartTotalList).reduce((acc, item) => {
    let price = item.querySelector(
      ".cart__total-product-item-price span"
    ).innerText;
    return acc + parseInt(price);
  }, 0);
  document.querySelector(".cart__total-subtotal-price span").innerText = total;
}

caculatorSubTotal();

// render total;
function caculatorTotal() {
  let subtotal = document.querySelector(".cart__total-subtotal-price span").innerText;
  let shippingPrice = 0;
  inputShippingOptions.forEach((item) => {
    if(item.checked) {
      shippingPrice = item.value;
    }
  })
  document.querySelector('.cart__total-total-price span').innerHTML = Number(shippingPrice) + parseInt(subtotal);
}

inputShippingOptions.forEach((item) => {
  item.onchange = () => {
    caculatorTotal();
  }
})
caculatorTotal();


function renderPriceShipping() {
  shippingOptions.forEach((item) => {
    let shippingPrice = item.querySelector("input").value;
    item.querySelector(".cart__total-shipping-price span").innerText =
      shippingPrice;
  });
}
renderPriceShipping();
