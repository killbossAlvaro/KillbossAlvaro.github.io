// Smooth scroll blocking
document.addEventListener( 'DOMContentLoaded', function() {
	if ( 'onwheel' in document ) {
		window.onwheel = function( event ) {
			if( typeof( this.RDSmoothScroll ) !== undefined ) {
				try { window.removeEventListener( 'DOMMouseScroll', this.RDSmoothScroll.prototype.onWheel ); } catch( error ) {}
				event.stopPropagation();
			}
		};
	} else if ( 'onmousewheel' in document ) {
		window.onmousewheel= function( event ) {
			if( typeof( this.RDSmoothScroll ) !== undefined ) {
				try { window.removeEventListener( 'onmousewheel', this.RDSmoothScroll.prototype.onWheel ); } catch( error ) {}
				event.stopPropagation();
			}
		};
	}

	try { $('body').unmousewheel(); } catch( error ) {}
});

function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

/* cookie.JS
 ========================================================*/
include('js/jquery.cookie.js');

/* Easing library
 ========================================================*/
include('js/jquery.easing.1.3.js');

/* Stick up menus
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/tmstickup.js');

        $(window).load(function () {
            $('#stuck_container').TMStickUp({})
        });
    }
})(jQuery);

/* ToTop
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.ui.totop.js');

        $(document).ready(function () {
            $().UItoTop({easingType: 'easeOutQuart'});
        });
    }
})(jQuery);

/* EqualHeights
 ========================================================*/
;
(function ($) {
    var o = $('[data-equal-group]');
    if (o.length > 0) {
        include('js/jquery.equalheights.js');
    }
})(jQuery);

/* SMOOTH SCROLLIG
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.mousewheel.min.js');
        include('js/jquery.simplr.smoothscroll.min.js');

        $(document).ready(function () {
            $.srSmoothscroll({
                step: 150,
                speed: 800
            });
        });
    }
})(jQuery);

/* Copyright Year
 ========================================================*/
var currentYear = (new Date).getFullYear();
$(document).ready(function () {
    $("#copyright-year").text((new Date).getFullYear());
});

/* Superfish menus
 ========================================================*/
;
(function ($) {
    include('js/superfish.js');

    var o = $('.sf-menu-toggle');
    if (o.length > 0) {
        $(document).ready(function () {
            var n = $('.nav');
            o.click(function () {
                n.toggleClass('active');
                return false;
            });

            $(document).click(function (e) {
                if (n.hasClass('active')) {
                    var target = e.clientX;
                    if (target > (n.width())) {
                        n.removeClass('active');
                    }
                }
            });
        });
    } else {
        include('js/jquery.mobilemenu.js');
    }
})(jQuery);


/* Google Map
 ========================================================*/
;
(function ($) {
    var o = document.getElementById("google-map");
    if (o) {
        include('//maps.googleapis.com/maps/api/js?v=3.exp&amp;sensor=false');

        $(document).ready(function () {
            var mapOptions = {
                zoom: 14,
                center: new google.maps.LatLng(parseFloat(40.646197), parseFloat(-73.9724068, 14)),
                scrollwheel: false
            }
            new google.maps.Map(o, mapOptions);
        });
    }
})(jQuery);

/* WOW
 ========================================================*/
;
(function ($) {
    var o = $('html');

    if ((navigator.userAgent.toLowerCase().indexOf('msie') == -1 ) || (isIE() && isIE() > 9)) {
        if (o.hasClass('desktop')) {
            include('js/wow/wow.js');

            $(document).ready(function () {
                new WOW().init();
            });
        }
    }
})(jQuery);

/* Unveil
 ========================================================*/
;
(function ($) {
    var o = $('.lazy-img img');

    if (o.length > 0) {
        include('js/jquery.unveil.js');

        $(document).ready(function () {
            $(o).unveil(0, function () {
                if (isIE() && isIE() < 9) {
                    $(this).load().addClass("lazy-loaded");
                } else {
                    $(this).load(function () {
                        $(this).addClass("lazy-loaded");
                    })
                }
            });
        });
        
        $(window).load(function () {
            $(window).trigger('lookup.unveil');
        });

    }
})(jQuery);

/* Radial Progress Bar
 ========================================================*/
;
(function ($) {
    var o = $('.radial-progress');
    if (o.length > 0) {
        include('js/raphael/jquery.radial-progress-bar.js');
    }
})(jQuery);


/* Orientation tablet fix
 ========================================================*/
$(function () {
    // IPad/IPhone
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,

        gestureStart = function () {
            viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
        },

        scaleFix = function () {
            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                document.addEventListener("gesturestart", gestureStart, false);
            }
        };

    scaleFix();
    // Menu Android
    if (window.orientation != undefined) {
        var regM = /ipod|ipad|iphone/gi,
            result = ua.match(regM);
        if (!result) {
            $('.sf-menus li').each(function () {
                if ($(">ul", this)[0]) {
                    $(">a", this).toggle(
                        function () {
                            return false;
                        },
                        function () {
                            window.location.href = $(this).attr("href");
                        }
                    );
                }
            })
        }
    }
});
var ua = navigator.userAgent.toLocaleLowerCase(),
    regV = /ipod|ipad|iphone/gi,
    result = ua.match(regV),
    userScale = "";
if (!result) {
    userScale = ",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">')

/* Contact Form
========================================================*/
;
(function ($) {
    var o = $('#contact-form');
    if (o.length > 0) {
        include('js/modal.js');
        include('js/TMForm.js');
    }
})(jQuery);

/* Search Form Toggleable
 ========================================================*/
;
(function ($) {
    var o = $('.search-form-toggle');
    if (o.length > 0) {
        var f = $('.search-form');
        o.click(function () {
            o.toggleClass('active');
            f.slideToggle(300);
            f.find('input').val('').focus();
            return false;
        });

        $(document).click(function (e) {
            if (o.hasClass('active')) {
                var target = e.clientY;
                if (target > (f.offset().top) + f.height()) {
                    o.removeClass('active');
                    f.slideUp(300);
                }
            }
        });

        $(window).load(function () {
            var o_stuck = $('.isStuck .search-form-toggle'),
                f_stuck = $('.isStuck .search-form');

            o_stuck.click(function () {
                o_stuck.toggleClass('active');
                f_stuck.slideToggle(300);
                f_stuck.find('input').val('').focus();
                return false;
            });

            $(document).click(function (e) {
                var s = $('.isStuck');
                if (o_stuck.hasClass('active')) {
                    var target = e.clientY;
                    if (target > s.height()) {
                        o_stuck.removeClass('active');
                        f_stuck.slideUp(300);
                    }
                }
            });
        });
    }
})(jQuery);

/* Camera
 ========================================================*/
;
(function ($) {
    var o = $('#camera');
    if (o.length > 0) {
        if (!(isIE() && (isIE() > 9))) {
            include('js/jquery.mobile.customized.min.js');
        }

        include('js/camera.js');

        $(document).ready(function () {
            o.camera({
                autoAdvance: true,
                height: '40.9375%',
                minHeight: '300px',
                pagination: false,
                thumbnails: false,
                playPause: false,
                hover: false,
                loader: 'none',
                navigation: true,
                navigationHover: false,
                mobileNavHover: false,
                fx: 'simpleFade',

            })
        });
    }
})(jQuery);

/* FancyBox
 ========================================================*/
;
(function ($) {
    var o = $('.thumb');
    if (o.length > 0) {
        include('js/jquery.fancybox.js');
        include('js/jquery.fancybox-media.js');
        $(document).ready(function () {
            o.fancybox();
        });
    }
})(jQuery);

/* Responsive Tabs
 ========================================================*/
;
(function ($) {
    var o = $('.resp-tabs');
    if (o.length > 0) {
        include('js/jquery.responsive.tabs.js');

        $(document).ready(function () {
            o.easyResponsiveTabs();
        });
    }
})(jQuery);


/* Parallax
 ========================================================*/
;
(function ($) {
    var o = $('.parallax');
    if (o.length > 0 && $('html').hasClass('desktop')) {
        include('js/jquery.parallax-1.1.3.js');

        $(document).ready(function () {
            o.parallax("50%");
        });
    }
})(jQuery);

/* ScrollTo
 ========================================================*/
include('js/scrollTo.js');


/* Owl Carousel
 ========================================================*/
;
(function ($) {
    var o = $('.owl-carousel');
    if (o.length > 0) {
        include('js/owl.carousel.min.js');
        $(document).ready(function () {
            o.owlCarousel({
                animateOut: 'fadeOutLeft',
                animateIn: 'fadeInRight',
                items:1,
                smartSpeed:450,
                dots: true,
                nav:true,
                navClass: ['owl-prev fa fa-angle-left', 'owl-next fa fa-angle-right']
            });
        });
    }
})(jQuery);

/* Isotope
 ========================================================*/
;
(function ($) {
    var o = $('#isotope');
    if (o.length > 0) {
        include('js/isotope.min.js');
        $(document).ready(function () {
            o.isotope({
                itemSelector: '.item',
                transitionDuration: '1s',
                hiddenStyle: {
                    opacity: 0
                },
                visibleStyle: {
                    opacity: 1
                },
                layoutMode: 'fitRows'
            });

            $('#isotope-filters').on('click', 'a', function () {
                var filterValue = $(this).attr('data-filter');

                if (filterValue == '*') {
                    o.isotope({ filter: filterValue });
                } else {
                    o.isotope({ filter: '.' + filterValue });
                }

                setTimeout(function () {
                    $(window).trigger('lookup.unveil');
                }, 1000);

                $('#isotope-filters').find('li').removeClass('active');
                $(this).parent().addClass('active');
                return false;
            });
        });
    }
})(jQuery);
