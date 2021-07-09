/*------------------------------------------------
Trydo Html5 Creative Ahency Template
All Main Js Here  

Index All JS 
-----------------------
        01. Wow Active
        02. Counter Up
        03. Feature Icon Activation
        04. Youtub Popup 
        05. Slick Activation            
        06. Paralax Window
        07. LightBox
        08. Parallax Activation
        09. Masonry Activation
        10. ScrollUp Activation
        11. Mobile Menu Activation
        12. Smoth Scroll
--------------------------------------------------*/


(function ($) {
    'use strict';

    /*-------------------- 
        01. Wow Active 
    --------------------*/

    new WOW().init();


    /*-----------------------
    	02. Counter Up
    -------------------------*/

    $('.count').counterUp({
        delay: 10,
        time: 1000
    });


    /*----------------------------------
        03. Feature Icon Activation  
    --------------------------------------*/

    feather.replace()

    /*--------------------------- 
    	04. Youtub Popup 
    -----------------------------*/

    $('.play__btn').yu2fvl();



    /* -------------------------
    	07. LightBox
    ----------------------------*/

    lightGallery(document.getElementById('animated-thumbnials'), {
        thumbnail: true,
        animateThumb: false,
        showThumbByDefault: false
    });


    /*--------------------------------
        09. Masonry Activation
    ---------------------------------*/
    $('.rn-masonary-wrapper').imagesLoaded(function () {
        // filter items on button click
        $('.messonry-button').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // init Isotope
        var $grid = $('.mesonry-list').isotope({
            itemSelector: '.masonry_item',
            percentPosition: true,
            transitionDuration: '0.7s',
            layoutMode: 'fitRows',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1,
            }
        });
    });
    $('.messonry-button button').on('click', function (event) {
        $(this).siblings('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        event.preventDefault();
    });


    $('.elementor-gallery-item').imagesLoaded(function () {
        // init Isotope
        var $grid = $('.elementor-mesonry-wrapper').isotope({
            itemSelector: '.masonary-item',
            percentPosition: true,
            transitionDuration: '0.7s',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.masonary-item',
            }
        });

    });



    /*--------------------------------
        10. ScrollUp Activation
    ---------------------------------*/

    $.scrollUp({
        scrollText: '<i class="feather-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'slide'
    });


    
    /*--------------------------------
        11. Mobile Menu Activation
    ---------------------------------*/

    function mobileMenuActive() {
        $('.humberger-menu').on('click', function (e) {
            e.preventDefault();
            $('.header-wrapper').addClass('menu-open');
            $('html').css({
                overflow: "hidden"
            })
        })
        $('.close-menu').on('click', function (e) {
            e.preventDefault();
            $('.header-wrapper').removeClass('menu-open');
            $('.has-droupdown > a').removeClass('open').siblings('.submenu').removeClass('active');
            $('html').css({
                overflow: ""
            })
        })
        $('.has-droupdown > a').on('click', function (e) {
            e.preventDefault();
            $(this).siblings('.submenu').toggleClass('active');
            $(this).toggleClass('open')
        })
    }
    mobileMenuActive()


    /*--------------------------------
        12. Smoth Scroll
    ---------------------------------*/

    $(document).on('click', '.smoth-animation', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('.header--sticky').addClass('sticky')
        }else{
            $('.header--sticky').removeClass('sticky')
        }
    })



    $('.testimonial-activation').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        adaptiveHeight: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 485,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });

    $('.inner-demo-activation').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 485,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });
    





})(jQuery)