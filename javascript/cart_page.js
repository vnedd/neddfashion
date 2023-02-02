const increaseQuantityBtns = document.querySelectorAll(
  ".cart__item-quantity-increase"
);
const decreaseQuantityBtns = document.querySelectorAll(
  ".cart__item-quantity-decrease"
);
const inputQuantitis = document.querySelectorAll(".cart__item-quantity-input");
const cartTotalList = document.querySelectorAll(".cart__total-product-item");
console.log(cartTotalList);


function getParrentElement(element, selector) {
  while (element.parentElement) {
    if (element.parentElement.matches(selector)) {
      return element.parentElement;
    }
    element = element.parentElement;
  }
}

inputQuantitis.forEach((item) => {
  item.addEventListener("change", (e) => {
    let regexDigit = /^\d+$/;
    let value = e.target.value;
    if (regexDigit.test(value)) {
      item.value = value;
    } else item.value = 1;
  });
});

increaseQuantityBtns.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    let parentElement = getParrentElement(item, ".cart__item");
    const price = parentElement.querySelector(".cart__item-price span").dataset
      .set;
    let quantityInput = parentElement.querySelector(
      ".cart__item-quantity-input"
    );
    let quantity = quantityInput.value;
    quantity++;
    quantityInput.value = quantity;
    let total = price * quantity;
    parentElement.querySelector(".cart__item-price span").innerText = total;
    cartTotalList[index].querySelector('.cart__total-product-item-price span').innerText = total;
    cartTotalList[index].querySelector('.cart__total-product-item-quantity span').innerText = quantity;
    caculatorSubtotal();
    caculatorTotal();
  });
});

decreaseQuantityBtns.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    let parentElement = getParrentElement(item, ".cart__item");
    let quantityInput = parentElement.querySelector(
      ".cart__item-quantity-input"
    );
    const price = parentElement.querySelector(".cart__item-price span").dataset
      .set;
    let quantity = quantityInput.value;
    if (quantity > 1) {
      quantity--;
      quantityInput.value = quantity;
      let total = price * quantity;
      parentElement.querySelector(".cart__item-price span").innerText = total;
      cartTotalList[index].querySelector('.cart__total-product-item-price span').innerText = total;
      cartTotalList[index].querySelector('.cart__total-product-item-quantity span').innerText = quantity;
      caculatorSubtotal();
      caculatorTotal();
    }
  });
});

inputQuantitis.forEach((item) => {
  item.addEventListener("input", (e) => {
    let total = 0;
    let parentElement = getParrentElement(item, ".cart__item");
    let quantityInput = parentElement.querySelector(
      ".cart__item-quantity-input"
    );
    let quantity = quantityInput.value;
    let price = parentElement.querySelector(".cart__item-price span").dataset
      .set;
    if (isNaN(quantity)) {
      parentElement.querySelector(".cart__item-price span").innerText = price;
    } else {
      total += quantity * parseFloat(price);
      parentElement.querySelector(".cart__item-price span").innerText = total;
    }
  });
});

function caculatorSubtotal() {
    let total = 0;
    cartTotalList.forEach((item, index) => {
        let totalItem = item.querySelector(".cart__total-product-item-price span").innerText;
        total += parseFloat(totalItem);
        document.querySelector(".cart__total-subtotal-price span").innerText = total;
    })
}
caculatorSubtotal();
function caculatorTotal() {
    let total = 0;
    let subtotal = document.querySelector(".cart__total-subtotal-price span").innerText;
    let shippingTotal = document.querySelector(".cart__total-shipping-price span").innerText;
    total = parseFloat(subtotal) + parseFloat(shippingTotal);
    document.querySelector(".cart__total-total-price span").innerText = total;
}
caculatorTotal();