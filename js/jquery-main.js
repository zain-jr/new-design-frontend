$(document).ready(function() {
  $(".js-example-basic-single").select2();
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var headerHeight = $("#header").height() / 2;

    if (scroll >= headerHeight) {
        $(".fixed-scroll-block").addClass("fixed");
    } else {
        $(".fixed-scroll-block").removeClass("fixed");
    }
});

// page init
jQuery(function(){
  initCarousel();
	initSlideShow();
});

// slideshow init
function initSlideShow() {
	jQuery('.news-slideshow').fadeGallery({
		useSwipe: true,
		slides: '.slide',
		currentNumber: 'span.cur-num',
		totalNumber: 'span.all-num',
		switchSimultaneously: true,
		disableWhileAnimating: false,
		generatePagination: '.pagination',
		autoRotation: true,
		autoHeight: true,
		switchTime: 5000,
		animSpeed: 600
	});
}
// scroll gallery init
function initCarousel() {
	jQuery('.news-carousel').scrollGallery({
		mask: '.mask',
		slider: '.slideset',
		slides: '.slide',
		currentNumber: 'span.cur-num',
		totalNumber: 'span.all-num',
		disableWhileAnimating: true,
		generatePagination: '.pagination',
		circularRotation: true,
		pauseOnHover: true,
		autoRotation: true,
		maskAutoSize: true,
		stretchSlideToMask: true,
		switchTime: 2000,
		animSpeed: 600
	});
  jQuery('.agent-slider').scrollGallery({
		mask: '.mask',
		slider: '.slideset',
		slides: '.slide',
		currentNumber: 'span.cur-num',
		totalNumber: 'span.all-num',
		disableWhileAnimating: true,
		circularRotation: true,
		pauseOnHover: true,
		autoRotation: false,
		maskAutoSize: false,
		stretchSlideToMask: true,
		switchTime: 2000,
		animSpeed: 600
	});
}
