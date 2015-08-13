var newYear = new Date();
newYear = new Date(2015, 7, 13, 19, 3, 0);
$('#defaultCountdown').countdown({until: newYear});

$('#removeCountdown').click(function () {
    var destroy = $(this).text() === 'Remove';
    $(this).text(destroy ? 'Re-attach' : 'Remove');
    $('#defaultCountdown').countdown(destroy ? 'destroy' : {until: newYear});
});