$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:false,
        margin:10,
        dots:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
    })

});
