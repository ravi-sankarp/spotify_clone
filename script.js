const prevBtn = document.querySelectorAll(".prev-btn");
const nxtBtn = document.querySelectorAll(".next-btn");
let carouselList;
nxtBtn.forEach(ele => {
    ele.addEventListener('click', function () {
        carouselList = ele.closest('.carousel-container').querySelectorAll('.carousel-list');
        carouselList.forEach((item, i) => {
            let itemWidth = (item.querySelector('li').offsetWidth) ;
            itemWidth=(window.innerWidth>=1200)?itemWidth*4:itemWidth*2;
            item.scrollLeft += itemWidth;
        })
    });
});
prevBtn.forEach(ele => {
    ele.addEventListener('click', function () {
        carouselList = ele.closest('.carousel-container').querySelectorAll('.carousel-list');
        carouselList.forEach((item, i) => {
            let itemWidth = (item.querySelector('li').offsetWidth);
            itemWidth = (window.innerWidth >= 1200) ? itemWidth * 4 : itemWidth * 2;
            item.scrollLeft -= itemWidth;
        })
    });
});



