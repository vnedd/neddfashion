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

