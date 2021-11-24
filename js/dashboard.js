$(document).ready(function(){
    /* Notification tabs */
    $('.tab').click(function(){
        var index = $(this).index();
        $('.tab').not(this).removeClass('active');
        $(this).addClass('active');

        var selectedTab = ".tab-content:eq("+ index +")";
        $('.tab-content').not(selectedTab).removeClass('active');
        $(selectedTab).addClass('active');
    });


});