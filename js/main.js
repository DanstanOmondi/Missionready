
(function($) {
	"use strict";

  // search box - start
  // --------------------------------------------------
  $('.search_btn').on('click', function() {
    $('.search_btn > .fa-search').toggleClass('fa-times');
  });
  // search box - end
  // --------------------------------------------------


  // sidebar mobile menu - start
  // --------------------------------------------------
  $(document).ready(function () {
    $('.close_btn, .overlay').on('click', function () {
      $('.sidebar_mobile_menu').removeClass('active');
      $('.overlay').removeClass('active');
    });

    $('.mobile_menu_btn').on('click', function () {
      $('.sidebar_mobile_menu').addClass('active');
      $('.overlay').addClass('active');
    });
  });

  // 3rd level dropdown menu
  $('.dropdown > a').addClass('dropdown-toggle');
  $('.dropdown-menu .dropdown > a').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');
    $(this).parents('li.dropdown.show').on('.dropdown', function(e) {
      $('.dropdown-menu > .dropdown .show').removeClass("show");
    });
    $('.dropdown-menu li a.dropdown-toggle').removeClass("show_dropdown");
    if ($(this).next().hasClass('show')) {
      $(this).addClass("show_dropdown");
    }
    return false;
  });
  // sidebar mobile menu - end
  // --------------------------------------------------


  // sticky header - start
  // --------------------------------------------------
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 120) {
      $('.sticky_header').addClass("stuck")
    } else {
      $('.sticky_header').removeClass("stuck")
    }
  });
  // sticky header - end
  // --------------------------------------------------

  // DATA BACKGROUND IMAGE
    var pageSection = $(".bg-image");
    pageSection.each(function(indx){
      if ($(this).attr("data-background")){
        $(this).css("background-image", "url(" + $(this).data("background") + ")");
      }
    });


  // DATA BACKGROUND COLOR
    var pageSection = $(".bg-color");
    pageSection.each(function(indx){
      if ($(this).attr("data-background")){
        $(this).css("background-color", $(this).data("background"));
      }
    });

    // SLIDER
    var menu = [];
    jQuery('.swiper-slide').each( function(index){
      menu.push( jQuery(this).find('.slide-inner').attr("data-text") );
    });
    var interleaveOffset = 0.5;
    var swiperOptions = {
      loop: true,
      speed: 1000,
      parallax: true,
        autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        },
      grabCursor: true,
      watchSlidesProgress: true,
      pagination: {
        el: '.swiper-custom-pagination',
          clickable: true,
          renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
      },
      on: {
      progress: function() {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
        var slideProgress = swiper.slides[i].progress;
        var innerOffset = swiper.width * interleaveOffset;
        var innerTranslate = slideProgress * innerOffset;
        swiper.slides[i].querySelector(".slide-inner").style.transform =
          "translate3d(" + innerTranslate + "px, 0, 0)";
        }      
      },
      touchStart: function() {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = "";
        }
      },
      setTransition: function(speed) {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].querySelector(".slide-inner").style.transition =
          speed + "ms";
        }
      }
      }
    };

    var swiper = new Swiper(".swiper-container", swiperOptions);

    $('.tours-carousel').owlCarousel({
        nav: true,
        navElement: 'button',
        navText: [
          '<i class="las la-long-arrow-alt-left" aria-hidden="true"></i>',
          '<i class="las la-long-arrow-alt-right" aria-hidden="true"></i>'
        ], 
        center: false,
        loop: true,
        dots:false,
        items:4,
        margin:15,
        stagePadding:40,
        responsive:{
            0: {
                stagePadding:0,
                items: 1,
            },
            600: {
                stagePadding:20,
                items:2,
            },
            700: {
                stagePadding:40,
            },
            1024: {
                items: 3,
            },
            1170: {
                items:4,
            }
        }
    });

    $('.news-carousel').owlCarousel({
        nav: true,
        navElement: 'button',
        navText: [
          '<i class="las la-long-arrow-alt-left" aria-hidden="true"></i>',
          '<i class="las la-long-arrow-alt-right" aria-hidden="true"></i>'
        ], 
        center: false,
        loop: true,
        dots:false,
        items:3,
        margin:15,
        responsive:{
            0: {
                items: 1,
            },
            600: {
                items:2,
            },
            1024: {
                items: 3,
            }
        }
    });

    //Main slider
    $('.call-to-action').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    });

    
})(window.jQuery);