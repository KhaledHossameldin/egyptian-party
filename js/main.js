let secondsToEvent;
let eventIntervalId;

$('#open-drawer').click(function () {
    $('#drawer').animate({ width: '250px' }, 500);
    $('#header-content').animate({ marginLeft: '250px' }, 500);
});

$('#close-drawer').click(function () {
    $('#drawer').animate({ width: '0px' }, 500);
    $('#header-content').animate({ marginLeft: '0px' }, 500);
});

$('.singer-header').click(function (e) {
    $('.singer-body').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

(function () {
    const eventDate = new Date(2023, 9, 25);
    secondsToEvent = Math.ceil(Math.abs(eventDate - new Date()) / 1000);
    setTimerTexts();
    eventIntervalId = setInterval(setTimerTexts, 1000);
})()

function setTimerTexts() {
    if (secondsToEvent <= 0) {
        clearInterval(eventIntervalId);
        return;
    }
    let days = Math.floor(secondsToEvent / (60 * 60 * 24));
    $('#days-text').text(`${days} D`);

    let hours = Math.floor(secondsToEvent % (60 * 60 * 24) / (60 * 60));
    $('#hours-text').text(`${hours} h`);
    
    let minutes = Math.floor(secondsToEvent % (60 * 60) / 60);
    $('#minutes-text').text(`${minutes} m`);
    
    let seconds = Math.floor(secondsToEvent % 60);
    $('#seconds-text').text(`${seconds} s`);

    secondsToEvent--;
}