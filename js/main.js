$('#open-drawer').click(function () {
    $('#drawer').animate({width: '250px'}, 500);
    $('#header-content').animate({marginLeft: '250px'}, 500);
});

$('#close-drawer').click(function () {
    $('#drawer').animate({width: '0px'}, 500);
    $('#header-content').animate({marginLeft: '0px'}, 500);
});

$('.singer-header').click(function (e) {
    $('.singer-body').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});