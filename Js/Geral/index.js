
$(document).ready(function () 
{
   
    $(window).resize(function ()
    {
        if($(window).innerWidth()>=769)
        {
            $("#menu").show();

        }
        else
        {
            $("#menu").hide();

        }
    })
    $(".fa-bars").click(function () {
         
        $(this).toggleClass("fa-bars fa-times");
        $("#menu").toggle();
    });
});