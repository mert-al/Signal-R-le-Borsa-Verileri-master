var headerCurrency = new Swiper(".currency-header-slider .swiper", {
    slidesPerView: 3,
    freeMode: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 'auto',
        }
    },
});