
$(document).ready(function () {
   
    $(window).resize(function (){
        if($(window).innerWidth()>=769){
            $("#menu").show();

        }
        else{
            $("#menu").hide();

        }
    })
    $(".fa-bars").click(function () {
         
        $(this).toggleClass("fa-bars fa-times");
        $("#menu").toggle();
    });
});


const animacao = new ScrollReveal();
animacao.reveal('.dish', {
    origin: 'left',
    distance: '30%',
    duration:2000,
    delay:500,
    
    reset :true
});
animacao.reveal('#home', {
    origin: 'left',
    distance: '30%',
    duration:2000,
    
    
    reset :true
});
animacao.reveal('.feedback', {
    origin: 'rigth',
    distance: '30%',
    duration:2000,
    delay:700,
    
    reset :true
});

