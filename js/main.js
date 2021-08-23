$(document).ready(function() {
        "use strict";

    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);

    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < 1) {
           header.removeClass("sticky");
       } else {
           header.addClass("sticky");
       }

        $("section").each(function() {
        var elementTop = $(this).offset().top - $('#rs-header').outerHeight();
            if(scroll >= elementTop) {
                $(this).addClass('loaded');
            }
        });

    });

    // scrollspy
    $('body').scrollspy({
        offset: 190,
        target: '.dtr-scrollspy'
    });
    
    // nav scroll   
    var myoffset = $('#dtr-header-global').height();
    $('.navbar a[href^="#"]').click(function(){  
        event.preventDefault();  
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - myoffset
        }, "slow","easeInSine");
    });

    //stickyatTop
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 670) {
            $(".scrollheader").addClass("is-sticky");
            $('.scrollheader').css('position', 'fixed');
        } else {
            $(".scrollheader").removeClass("is-sticky");
            $(".scrollheader").css('position', 'relative');
        }
    });

    // Offcanvas menu toggleClass class 
    $(".off-menu .menu-part li button.first-btn").click(function(){ 
        $(this).parents('.off-menu .menu-part li').children('.sub1').toggleClass("show"); 
        $(this).parents('.off-menu .menu-part li').children('a').toggleClass("opened");         
        $(this).toggleClass("active"); 
    });

    $(".off-menu .menu-part li .off-sub-menu li button.second-btn").click(function(){ 
        $(this).parents('.off-menu .menu-part li .off-sub-menu li').children('.sub2').toggleClass("show"); 
        $(this).parents('.off-menu .menu-part li').children('a').toggleClass("opened");  
        $(this).toggleClass("active"); 
    });

    //canvas menu
    var navexpander = $('#nav-expander');
    if(navexpander.length){
        $('#nav-expander').on('click',function(e){
            e.preventDefault();
            $('body').toggleClass('nav-expanded');
        });
    }
    var navclose = $('#nav-close');
    if(navclose.length){
        $('#nav-close').on('click',function(e){
            e.preventDefault();
            $('body').removeClass('nav-expanded');
        });
    }

        //Scroll back to top

        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function() {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 150;
        var duration = 550;
        jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
        jQuery('.progress-wrap').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        })
    });

(function($) {
	"use strict";

    $('.home-carousel').owlCarousel({
        nav: true,
        navElement: 'button',
        navText: [
          '<i class="las la-long-arrow-alt-left" aria-hidden="true"></i> Previous',
          'Next <i class="las la-long-arrow-alt-right" aria-hidden="true"></i>'
        ], 
        center: false,
        loop: true,
        dots:false,
        items: 1,
        margin: 15,
        stagePadding:50,
    });

    //LightBox / Fancybox
    $('.lightbox-image').fancybox({
        openEffect  : 'fade',
        closeEffect : 'fade',
        helpers : {
            media : {}
        }
    });

    if ($('.case-carousel').length) {
        $('.case-carousel').owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop:false,
            margin:15,
            nav:true,
            dots:false,
            smartSpeed: 500,
            autoplay: true,
            navText: [
              '<i class="las la-long-arrow-alt-left" aria-hidden="true"></i> Previous',
              'Next <i class="las la-long-arrow-alt-right" aria-hidden="true"></i>'
            ], 
            responsive:{
                0: {
                items: 1,
                nav: true
            },
            500: {
                items: 1,
            },
            700: {
                items: 2,
                nav: true,
            },
            1170: {
                items: 3,
            }
            }
        });         
    }


    $('.timeline-nav').slick({
      slidesToShow:5,
      slidesToScroll: 1,
      asNavFor: '.timeline-slider',
      centerMode: false,
      focusOnSelect: true,
       mobileFirst: true,
      arrows: false,
      infinite:false,
       responsive: [
           {
          breakpoint: 768,
          settings: {
            slidesToShow:5,
           }
          },
         {
          breakpoint: 0,
          settings: {
            slidesToShow:4,
            slidesToScroll: 1,
          }
        }
     ]
    });

    $('.timeline-slider').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      loop: false,
      asNavFor: '.timeline-nav',     
      centerMode: false,     
      cssEase: 'ease',
       // edgeFriction: 0.5,
       mobileFirst: true,
       speed: 500,
       responsive: [
         {
          breakpoint: 0,
          settings: {
              centerMode: false,
              slidesToShow: 3,
          }
        },
           {
          breakpoint: 768,
          settings: {
              centerMode: false,
              slidesToShow: 3,
          }
        }
     ]
    });

    // show comments    
    $('.views').on('click', function () {
        $(this).parents(".post-meta").siblings(".coment-area").slideToggle("slow");
    });

    // show comments    
    $('.reply-btn').on('click', function () {
        $(this).parents(".comment").siblings(".coment-area").slideToggle("slow");
    });

    //Show feedback form
    $(".btnfeedback").click(function(){
        $(".insidefeedback").slideToggle(500);
    });
    
})(window.jQuery);

$(window).load(function() {
     $('.filters ul li').click(function(){
      $('.filters ul li').removeClass('active');
      $(this).addClass('active');
      
      var data = $(this).attr('data-filter');
      $grid.isotope({
        filter: data
      })
    });

    var $grid = $(".grid").isotope({
      itemSelector: ".all",
      percentPosition: true,
      masonry: {
        columnWidth: ".all"
      }
    })
});