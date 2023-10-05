$(document).ready(function ($) {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })
    $(".category-wrapper").owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        nav: true,
        smartSpeed: 900,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
      });

});