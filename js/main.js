$('#open-drawer').click(function () {
    //TODO: open drawer logic
    $('#drawer').animate({width: '250px'}, 500);
    $('#header-content').animate({marginLeft: '250px'}, 500);
});

$('#close-drawer').click(function () {
    $('#drawer').animate({width: '0px'}, 500);
    $('#header-content').animate({marginLeft: '0px'}, 500);
});