$(document).ready(function() {
  $(".js-example-basic-single").select2();
});

$(document).on('click', '.navigation-toggler', function(){
	$('body').toggleClass('nav-active');
});

$(document).on('click', '.filters-links-opener', function(){
	$(this).closest('li').toggleClass('active');

	if($(this).closest('li').hasClass('active')){
		$(this).closest('li').find('.slide').slideDown();
	}
	else {
		$(this).closest('li').find('.slide').slideUp();
	}
});
$(document).on('click', '.aside-opener-filters', function(){
	$('#aside').slideToggle('active');
});

$(document).on('focusin', '.PriceField', function(){
	$('.calculatedPrice').removeClass('priceShow');
	$('.calculatedPrice').addClass('priceShow');
});
$(document).on('focusout', '.PriceField', function(){
	$('.calculatedPrice').removeClass('priceShow');
});

// page init
jQuery(function(){
  	initCarousel();
	initSlideShow();
	initAccordion();
	
	if(screen.width >= 768){
		initFixedScrollBlock();
	}
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
		mask: '.news-mask',
		slider: '.news-slideset',
		slides: '.news-slide',
		currentNumber: 'span.cur-num',
		totalNumber: 'span.all-num',
		disableWhileAnimating: true,
		generatePagination: '.news-pagination',
		circularRotation: true,
		pauseOnHover: true,
		autoRotation: true,
		maskAutoSize: true,
		stretchSlideToMask: true,
		btnPrev: '.news-btn-prev',
		btnNext: '.news-btn-next',
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