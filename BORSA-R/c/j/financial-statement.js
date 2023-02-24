var width = $(window).width();
var height = $(window).height();

var financialStatement = new Swiper(".financial-statement.type-02 .swiper", {
    slidesPerView: 'auto',
});

function financialSlider() {
    if (width < 767 ) {

        var financialStatement = new Swiper(".financial-statement .swiper", {
            slidesPerView: 'auto',
        });
       
    }
}

financialSlider();



$(window).resize(function() {
    width = $(window).width();
    height = $(window).height();
    financialSlider();

});