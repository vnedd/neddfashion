import products from "./products.js";




//banner slider home page

const prevBannerBtn = document.querySelector(".banner__large-direction-prev");
const nextBannerBtn = document.querySelector(".banner__large-direction-next");

prevBannerBtn.addEventListener("click", () => {
  let bannerLists = document.querySelectorAll(".banner__large-item");
  document.querySelector(".banner__large-list").appendChild(bannerLists[0]);
});
nextBannerBtn.addEventListener("click", () => {
  let bannerLists = document.querySelectorAll(".banner__large-item");
  document
    .querySelector(".banner__large-list")
    .prepend(bannerLists[bannerLists.length - 1]);
});

/////show hide product panel

///not render js

// const productPanels = document.querySelectorAll('.product__panel');
// const productList = document.querySelectorAll('.product__list');
// productPanels.forEach((panel, index) => {
//   panel.addEventListener('click', () => {
//     productPanels.forEach(item => {
//       item.classList.remove('active');
//     })
//     productList.forEach((item) => {
//       item.classList.remove('show-product-by-panel')
//     })
//     panel.classList.add('active')
//     productList[index].classList.add('show-product-by-panel');
//   })
// })

//render js

const productWrapper = document.querySelector(".product__wrapper");


function renderProducts(options) {

  options.forEach((item,index) => {
    if (index > 12) return;
    let productElm = document.createElement("div");
        productElm.setAttribute('class', 'col col-lg-3 col-md-4 col-sm-6');
        //discount, new, out-stock tag
        let randomDiscount = Math.floor(Math.random() *51);
        let textStatus = item.status === 'discount' ?  `Discount ${randomDiscount}%` : item.status === 'new' ? 'new' : 'out of stock';

        // make count star product
        let ratingStars = Math.floor(item.rating.rate);
        let starElm = '';
        for(let i = 0; i < ratingStars; i++) {
          starElm += `<i class="product__rating-star fa-solid fa-star"></i>`
        }
        for(let i = 0; i < 5 - ratingStars; i++) {
          starElm +=  `<i class="product__rating-star fa-regular fa-star"></i>`
        }

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
                        ${starElm}
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
                    <div class="product__services-add-cart">
                        <i class="fa-solid fa-cart-plus"></i>
                    </div>
                </div>
            </a>
        `
        productWrapper.appendChild(productElm);
  })
}

renderProducts(products);

const productPanels = document.querySelectorAll('.product__panel');

productPanels.forEach(panel => {
  panel.addEventListener('click', () => {
    productPanels.forEach(panel => panel.classList.remove('active'));
    panel.classList.add('active')
    productWrapper.innerHTML = '';
    let dataPanel = panel.dataset.set;
    if(dataPanel === 'all') {
      renderProducts(products);
    } else {
      const filterProductByPanel = products.filter(item => item.panel === dataPanel)
      renderProducts(filterProductByPanel);
    }
  })
})


///// feature item slide
const featurePrevbtn = document.querySelector(".feature__direction-prev");
const featureNextbtn = document.querySelector(".feature__direction-next");

featurePrevbtn.addEventListener("click", () => {
  let featureList = document.querySelectorAll(".feature__item");
  document.querySelector(".feature__list").appendChild(featureList[0]);
});
featureNextbtn.addEventListener("click", () => {
  let featureList = document.querySelectorAll(".feature__item");
  document
    .querySelector(".feature__list")
    .prepend(featureList[featureList.length - 1]);
});
