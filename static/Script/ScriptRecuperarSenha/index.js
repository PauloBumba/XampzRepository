
$(document).ready(function () {
    if ($(window).innerWidth() >= 769) {
        $("#burger").hide();
    } else {
        $("#burger").show();
    }

    $(".fa-bars").click(function () {
         
        $(this).toggleClass("fa-bars fa-times");
        $("#menu").toggle();
    });
});