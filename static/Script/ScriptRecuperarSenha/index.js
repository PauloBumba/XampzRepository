
$(document).ready(function () {
   

    $(".fa-bars").click(function () {
         
        $(this).toggleClass("fa-bars fa-times");
        $("#menu").toggle();
    });
});