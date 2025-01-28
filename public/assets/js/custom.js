(function($) {

    'use strict';
    //Cache jQuery Selector
    var $window                 = $(window),
        $header                 = $('header'), // for fixed-header & for navbar all
        $navigation             = $('#navbarSupportedContent'), //for navbar all
        $dropdown               = $('.dropdown-toggle'), //for navbar all
        $single_carousel        = $('.single-carousel'),
        $single_carousel_text   = $('.text-carousel'),
        $four_item			    = $('.4block-carousel'),
		$brand                  = $('.partner-slider'); //for partner-slider;




    // Parallax - START CODE
	if($('.paraxify').length){
		$(function() {
			$window .on("load resize scroll", function() {
				paraxify('.paraxify');
			});
		});
    }
	
	
	// Custom accordion useable settings for any type of accordion system
	if(document.querySelector('.bb-accordion') !== null) {
		$('.ac-toggle').click(function(e) {
			e.preventDefault();
		  
			var $this = $(this);
		  
			if ($this.hasClass('active') && $this.next().hasClass('show')) {
				$this.removeClass('active');
				$this.next().removeClass('show');
				$this.next().slideUp(350);
			} 
			else {
				
				// Check accordion type: for single item open
				if($this.parent().parent().hasClass('ac-single-show')){
					$this.parent().parent().find('.ac-card .ac-toggle').removeClass('active');
					$this.parent().parent().find('.ac-card .ac-collapse').removeClass('show');
					$this.parent().parent().find('.ac-card .ac-collapse').slideUp(350);
					$this.addClass('active');
					$this.next().addClass('show');
					$this.next().slideDown(350);
				}
				
				// Check accordion type: for group item open
				else if($this.parent().parent().hasClass('ac-group-show')) {
					$this.addClass('active');
					$this.next().addClass('show');
					$this.next().slideDown(350);
				}
				
				// Default if not use any accordion type
				else {
					$this.parent().parent().find('.ac-card .ac-toggle').removeClass('active');
					$this.parent().parent().find('.ac-card .ac-collapse').removeClass('show');
					$this.parent().parent().find('.ac-card .ac-collapse').slideUp(350);
					$this.addClass('active');
					$this.next().addClass('show');
					$this.next().slideDown(350);
				}
			}
		});
	}

	
	// Slider push menu visible
	if(document.querySelector('.push-nav-toggle') !== null) {
		var $this = $('.push-nav-toggle'),
			$close = $('.slide-nav-close'),
			$sidenav = $('.nav-leftpush-overlay .navbar-expand-lg .navbar-slide-push');
			
		$this.on('click', function(event){
			event.preventDefault();
			$sidenav.addClass('visible');
			$('#page_wrapper').addClass('overlay');
			event.stopPropagation();
		});
		
		
		$sidenav.on('click', function(event) {
			event.stopPropagation();
		});
		
		$window.on('click', function(e) {
			$sidenav.removeClass('visible');
			$('#page_wrapper').removeClass('overlay');
		});
		
		$close.on('click', function(e) {
			$sidenav.removeClass('visible');
			$('#page_wrapper').removeClass('overlay');
		});
		
	}
    
    // Click Search Icon and Open Search Field	//for header search
    var $srcicon = $('.search-pop span'),
        $srcfield = $('.search-form');
    $srcicon.on('click', function(event) {
        event.preventDefault();
        $srcfield.addClass('visible');
        event.stopPropagation();
    });

    $srcfield.on('click', function(event) {
        event.stopPropagation();
    });

    $window.on('click', function(e) {
        $srcfield.removeClass('visible');
    });


    // Auto active class adding with navigation //for navbar all
    $window.on('load', function() {
        var current = location.pathname;
        var $path = current.substring(current.lastIndexOf('/') + 1);
        $('#navbarSupportedContent li a').each(function(e) {
            var $this = $(this);
            // if the current path is like this link, make it active
            if ($path == $this.attr('href')) {
                $this.parent('li').addClass('active');
            } else if ($path == '') {
                $('.navbar-nav li:first-child').addClass('active');
            }
        })
    });

    //Put slider space for nav not in mini screen //for navbar all
    if (document.querySelector('.nav-on-top') !== null) {
        var get_height = jQuery('.nav-on-top').height();
        if (get_height > 0 && $window.width() > 991) {
            jQuery('.nav-on-top').next().css('margin-top', get_height);
        }
        $window.on('resize', function() {
            $header.removeClass('fixed-top');
            var get_height = jQuery('.nav-on-top').height();
            if ($window.width() < 991) {
                jQuery('.nav-on-top').next().css('margin-top', '0');
            } else {
                jQuery('.nav-on-top').next().css('margin-top', get_height);
            }
        });
    }
    if (document.querySelector('.nav-on-banner') !== null) {
        var get_height = jQuery('.nav-on-banner').height();
        if (get_height > 0 && $window.width() > 991) {
            jQuery('.nav-on-banner').next().css('padding-top', get_height);
        }
        $window.on('resize', function() {
            $header.removeClass('fixed-top');
            var get_height = jQuery('.nav-on-banner').height();
            if ($window.width() < 991) {
                jQuery('.nav-on-banner').next().css('padding-top', '0');
            } else {
                jQuery('.nav-on-banner').next().css('padding-top', get_height);
            }
        });
    }

    // dropdown submenu on hover in desktopand dropdown sub menu on click in mobile //for navbar all
    $navigation.each(function() {
        $dropdown.on('click', function(e) {
            if ($window.width() < 1100) {
                if ($(this).parent('.dropdown').hasClass('visible')) {
                    $(this).parent('.dropdown').children('.dropdown-menu').first().stop(true, true).slideUp(300);
                    $(this).parent('.dropdown').removeClass('visible');
                    // window.location = $(this).attr('href');
                } else {
                    e.preventDefault();
                    $(this).parent('.dropdown').siblings('.dropdown').children('.dropdown-menu').slideUp(300);
                    $(this).parent('.dropdown').siblings('.dropdown').removeClass('visible');
                    $(this).parent('.dropdown').children('.dropdown-menu').slideDown(300);
                    $(this).parent('.dropdown').addClass('visible');
                }
                e.stopPropagation();
            }
        });

        $('body').on('click', function(e) {
            $dropdown.parent('.dropdown').removeClass('visible');
        });

        $window.on('resize', function() {
            if ($window.width() > 991) {
                $('.dropdown-menu').removeAttr('style');
                $('.dropdown ').removeClass('visible');
            }
        });
    });

    // toogle fixed-top class in header when window scroll 200px //for fixed-header
    function headerStyle() {
        if ($header.length) {
            var windowpos = $window.scrollTop();
            if (windowpos >= 200) {
                $header.addClass('fixed-top');
            } else {
                $header.removeClass('fixed-top');
            }
        }
    }

    // Range Slider
    $(document).ready(function(){
        var rangeSlider = function(){
        var slider = $('.range-slider'),
            range = $('.range-slider__range'),
            value = $('.range-slider__value');
            
        slider.each(function(){

            value.each(function(){
            var value = $(this).prev().attr('value');
            $(this).html(value);
            });

            range.on('input', function(){
            $(this).next(value).html(this.value);
            });
        });
        };

        rangeSlider();
    });

    if ($single_carousel.length) {
        $single_carousel.owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: true,
			autoplayHoverPause: true, 
            smartSpeed: 500,
            autoplay: 4000,
            responsive: {
                0: {
                    items: 1
                }
            }
        });
    }

    // Single Text Carusel
	if ($single_carousel_text.length) {
		$single_carousel_text.owlCarousel({
			loop:false,
			margin:30,
			nav:false,
			dots: true,
			smartSpeed: 500,
			autoplay: false,
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
    }
    
    // Four Block Slide
	if ($four_item.length) {
		$four_item.owlCarousel({
			loop:false,
			margin:30,
			nav:true,
			dots: true,
			smartSpeed: 500,
			autoplay: false,
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});    		
    }
    
	 // Our Partner Logos Slider Auto //for partner-slider
    if ($brand.length) {
        $brand.owlCarousel({
            loop: true,
            nav: true,
            dots: true,
            smartSpeed: 500,
            autoplay: 4000,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                600: {
                    items: 3
                },
                800: {
                    items: 4
                },
                1200: {
                    items: 6
                }
            }
        });
    }
            
	// Simple Accordean
	if($('.accorden-block').length){
		$('.accorden-title').on('click', function(){		
			if($(this).hasClass('active')){
				$(this).addClass('active');			
			}
			
			//if ($(this).next('.according_details').is(':visible')){
            //	 $(this).removeClass('active');
            //	}
			else{
				$('.accorden-title').removeClass('active');
				$('.accorden-content').slideUp(300);
				$(this).addClass('active');
				$(this).next('.accorden-content').slideDown(300);	
			}
		});	
	}
	
	// Fact Counter For Achivement Counting //for fact-counting
    function factCounter() {
        if ($('.fact-counter').length) {
            $('.fact-counter .count.animated').each(function() {
                var $t = $(this),
                    n = $t.find(".count-num").attr("data-stop"),
                    r = parseInt($t.find(".count-num").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function() {
                            $t.find(".count-num").text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $t.find(".count-num").text(this.countNum);
                        }
                    });
                }

                //set skill building height
                var size = $(this).children('.progress-bar').attr('aria-valuenow');
                $(this).children('.progress-bar').css('width', size + '%');

            });
        }
    }

    // Elements Animation for //fact-counting
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }
	
    // Start When document is Scrollig, do //for fact-counting & fixed-header
    $window.on('scroll', function() {
        factCounter();
        headerStyle();
    });

    // Single Product Image Slide
    if ($('.full-img-sweep').length) {
        $('.full-img-sweep').layerSlider({
            sliderVersion: '6.0.0',
            responsiveUnder: 0,
            layersContainer: 0,
            slideBGSize: 'auto',
            autoStart: 'false',
            showCircleTimer: 'false',
            skin: 'noskin',
            thumbnailNavigation: 'always',
            skinsPath: 'assets/skins/'
        });
    }
 
    //Scroll top by clicking arrow up //for scroll-top
    $window.scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });

    $('#scroll').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return !1;
    });

})(jQuery);