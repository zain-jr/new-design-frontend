$(document).ready(function() {
  $(".js-example-basic-single").select2();
});

// page init
jQuery(function(){
  initCarousel();
	initSlideShow();
	initFixedScrollBlock();
	initAccordion();
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

// initialize fixed blocks on scroll
function initFixedScrollBlock() {
	jQuery('#wrapper').fixedScrollBlock({
		slideBlock: '#header, #nav'
	});
}

// accordion init
function initAccordion() {
	jQuery('.accordion').slideAccordion({
		opener:'>a.opener',
		slider:'>.slide',
		collapsible:false,
		animSpeed: 300
	});
}