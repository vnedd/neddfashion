import products from "./products.js";

const productWrapper = document.querySelector(".product__wrapper");

function renderProduct() {
  products.forEach((item,index) => {
    if (index > 12) return;
    let productElm = document.createElement("div");
        productElm.setAttribute('class', 'col col-lg-4 col-md-6 col-sm-6');
        let randomDiscount = Math.floor(Math.random() *51);
        let textStatus = item.status === 'discount' ?  `Discount ${randomDiscount}%` : item.status === 'new' ? 'new' : 'out of stock';
        productElm.innerHTML = `
            <a href="product_page.html" class="product__item">
                <p class="product__status product__status-${item.status}">
                <span>
                    ${textStatus} 
                </span>
                </p>
                <div class="product__img">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="product__details">
                    <p class="product__name">${item.title}</p>
                    <div class="product__rating">
                        <i class="product__rating-star fa-solid fa-star"></i>
                        <i class="product__rating-star fa-solid fa-star"></i>
                        <i class="product__rating-star fa-solid fa-star"></i>
                        <i class="product__rating-star fa-solid fa-star"></i>
                        <i class="product__rating-star fa-solid fa-star-half"></i>
                        <span>(${item.rating.count})</span>
                    </div>
                    <p class="product__price">
                        <span class="product__price-old">$150</span>
                        <span class="product__price-cur">$<span>${item.price}</span></span>
                    </p>
                    <p class="product__author">By Nedd store</p>
                </div>
                <div class="product__services">
                    <div class="product__services-favorite">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class="product__services-add-cart add-cart-btn">
                        <i class="fa-solid fa-cart-plus"></i>
                    </div>
                </div>
            </a>
        `
        productWrapper.appendChild(productElm);
  })
}
renderProduct();