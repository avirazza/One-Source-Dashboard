$(document).ready(function(){
    $('.product-variation-toggle').click(function(){
        $(this).parent().parent().find('.product-tab-content').toggle();
    });
});