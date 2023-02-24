$(document).ready(function() {
    $('.css-tab-head a').click(function() {
        let index = $(this).index();
        $(this).parents('.css-tab').find('.css-tab-head a').removeClass('active');
        $(this).parents('.css-tab').find('.css-tab-content-item').removeClass('active');
        

        $(this).addClass('active');
        $(this).parents('.css-tab').find('.css-tab-content-item').eq(index).addClass('active');
    })
})