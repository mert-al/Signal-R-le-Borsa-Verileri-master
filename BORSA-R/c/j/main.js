var width = $(window).width();
var height = $(window).height();


// header sticky menu

var body = $('body'),
    currencyHeader = $('.currency-header').height(),
    lastScrollTop =0;

function headerStickyFunction() {

    var st = $(this).scrollTop();

    if (st >= currencyHeader){

        $('.main-header').addClass('sticky');
        

    } else {
        
        $('.main-header').removeClass('sticky');
        
    }

}


function mobileSearchActive() {
    $('.header-search-mobile-button').click(function(){
              
        $('.header-search').toggleClass('active');
        $('.header-search input').focus();
        
    });
   
}

function mobileSubMenu() {
    $('.sub-menu-arrow').click(function() {
        if ($(this).parent().hasClass('active')) {
            $('.main-menu-item').removeClass('active');
        } else {
            $('.main-menu-item').removeClass('active');
            $(this).parent().addClass('active');
        }
    });
}

function mobileMenu() {
    $('.mobile-menu').click(function() {
        
        $(this).toggleClass('active');
        $('.header-menu').toggleClass('active');
        $('body').toggleClass('hidden');
    });
}

$(document).ready(function() {
    
    headerStickyFunction();
    mobileSearchActive();
    mobileSubMenu();
    mobileMenu();
    
});

$(window).scroll(function () {
    headerStickyFunction();
    
});

$(document).mouseup(function(e) {
    var container = $(".header-search, .header-search-mobile-button");
    
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        container.removeClass('active');
    }
});

$(window).resize(function() {
    width = $(window).width();
    height = $(window).height();

});