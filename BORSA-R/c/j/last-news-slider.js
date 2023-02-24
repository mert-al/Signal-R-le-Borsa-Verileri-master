var lastNewsSlider = new Swiper(".last-news-slider .swiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".last-news-slider .swiper-button-next",
        prevEl: ".last-news-slider .swiper-button-prev",
    }
});