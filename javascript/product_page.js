/// product img prev next

const productPrevBtn = document.querySelector('.product-page__img-prev');
const productNextBtn = document.querySelector('.product-page__img-next');
const productImgList = document.querySelectorAll('.product-page__img-item img');
const imgThumbnail = document.querySelector('.product-page__img-thumb img');
const productImgWrapper = document.querySelectorAll('.product-page__img-item');
let currentIndexImg = 0;

function renderThumbnailImg(currentIndexImg) {
    imgThumbnail.src = `img/products/single__page/${currentIndexImg}.jpg`
    productImgWrapper.forEach(img => img.classList.remove('active'));
    productImgWrapper[currentIndexImg].classList.add('active');
}

productImgList.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndexImg = index;
        productImgWrapper.forEach(img => img.classList.remove('active'));
        item.parentElement.classList.add('active');
        renderThumbnailImg(currentIndexImg)
    })
})


productPrevBtn.addEventListener('click', () =>{
    if(currentIndexImg > 0) {
        currentIndexImg--;
    } else {
        currentIndexImg = productImgList.length - 1;
    }
    renderThumbnailImg(currentIndexImg)
})

productNextBtn.addEventListener('click', () =>{
    if(currentIndexImg < productImgList.length - 1) {
        currentIndexImg++;
    } else {
        currentIndexImg = 0;
    }
    renderThumbnailImg(currentIndexImg)
})


renderThumbnailImg(currentIndexImg);


/// user selected color button
const colorSelectBtns = document.querySelectorAll('.product-page__info-color-item')
const colorName = document.querySelector('.product-page__info-color-name');
colorSelectBtns.forEach(item => {
    item.addEventListener('click', () => {
        colorSelectBtns.forEach(item => item.classList.remove('selected'));
        colorName.innerText = item.dataset.set;
        item.classList.add('selected');
    })
})


///user selected size option

const sizeSelectBtns = document.querySelectorAll('.product-page__info-size-item')
const sizeName = document.querySelector('.product-page__info-size-name');
sizeSelectBtns.forEach(item => {
    item.addEventListener('click', () => {
        sizeSelectBtns.forEach(item => item.classList.remove('selected'));
        sizeName.innerText = item.dataset.set;
        item.classList.add('selected');
    })
})



/// quantity product increase
const increaseQuantityBtn = document.querySelector('.product-page__info-quantity-increase')
const decreaseQuantityBtn = document.querySelector('.product-page__info-quantity-decrease')
const inputQuantity = document.querySelector('.product-page__info-quantity-input');

inputQuantity.addEventListener('change', (e)=> {
    let regexDigit = /^\d+$/;
    let value = e.target.value;
    if(regexDigit.test(value)) {
        inputQuantity.value = value;
    }
    else  inputQuantity.value = 1;
})

function increaseQuantity() {
    let quantityInput = inputQuantity.value;
    quantityInput++;
    inputQuantity.value = quantityInput;
}
function decreaseQuantity() {
    let quantityInput = inputQuantity.value;
    if(quantityInput > 1) {
        quantityInput--;
        inputQuantity.value = quantityInput;
    }
}

increaseQuantityBtn.addEventListener('click', increaseQuantity);
decreaseQuantityBtn.addEventListener('click', decreaseQuantity);


/// hide show product details panel

const productDetailsPanel = document.querySelectorAll('.product-page__details-header-panel');
const productDetailsPanelsItem = document.querySelectorAll('.product-page__details-content-item');
const lineActivePanel = document.querySelector('.product-page__details-header-line');

function addLineActivePanel(item) {
    let itemWidth = item.clientWidth;
    let offsetLeft = item.offsetLeft;
    lineActivePanel.style.left = offsetLeft +'px';
    lineActivePanel.style.width = itemWidth + 'px';
}


addLineActivePanel(productDetailsPanel[0]);

productDetailsPanel.forEach((item, index) => {
    item.addEventListener('click', () => {
        productDetailsPanelsItem.forEach(panel => panel.classList.remove('active'));
        addLineActivePanel(item);
        productDetailsPanelsItem[index].classList.add('active');
    })

})

/// similar scrolling

const similarWrapper = document.querySelector('.similar__wrapper');
const similarPrevBtn = document.querySelector('.similar__direction-prev');
const similarNextBtn = document.querySelector('.similar__direction-next');
const similarProductItem = document.querySelector('.similar__item');

similarPrevBtn.addEventListener('click', () => {
    similarWrapper.scrollLeft -= similarProductItem.offsetWidth + 24;
    console.log(similarWrapper.scrollLeft);
})
similarNextBtn.addEventListener('click', () => {
    console.log(similarWrapper.scrollLeft);
    similarWrapper.scrollLeft += similarProductItem.offsetWidth + 24;
})

