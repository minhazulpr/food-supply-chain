'use-strict';

/**
 *  Jquery
 */
$(document).ready(function(){
    // Carousel
    
    $(".main-carousel").owlCarousel(
        {
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 300,
            responsive: {
                0: {
                items: 1
                },
                600: {
                items: 1
                },
                992: {
                items: 1
                }
            }
        }
    );

});

