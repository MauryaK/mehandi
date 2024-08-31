$(function(){
    const banner = $(".banner");
    banner.length > 0 ? "" : $('body').addClass('no-banner');

    $('.slideC').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        autoplay: false,
        smartSpeed: 3000,
        nav: false,
        responsive:{
            0:{
                items:3,
                margin: 20,
            },
            768:{
                items:4,
                margin: 20,
            },
            992:{
                items:5,
                margin: 20,
            },
            1000:{
                items:5,
                margin: 30,
            }
        }
    })
    $('.slidePrdScA').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        autoplay: false,
        smartSpeed: 3000,
        nav: false,
        responsive:{
            0:{
                items:1.2,
                margin: 15,
            },
            768:{
                items:2.2,
                margin: 15,
            },
            992:{
                items:3.2,
                margin: 15,
            },
            1200:{
                items:4,
                margin: 15,
            }
        }
    })
})