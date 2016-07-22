$(document).ready(function() {
  $(".js-example-basic-single").select2();

  if (screen.width < 768){
		$('.call-agent-btn').each(function(){
			var mobileNumber = $(this).attr('data-tel');
			$(this).attr('href', 'tel:'+mobileNumber)
		});
	}
});

$(document).on('click', '.propertyImage-slider-btn-next, .propertyImage-slider-btn-prev', function(){
	var windowSize = 6;
	var currentSlideNumber = parseInt($('#propertyImageCurrentSlide').text());
	var currentSlideRemainder = currentSlideNumber/ windowSize;
	var currentSlideRemainderCeil = Math.ceil(currentSlideRemainder);
	var currentSlideRemainderFloor = Math.floor(currentSlideNumber);
	var currentWindowNumber = parseInt($('.paginationCurrent-num-1').text());
	 
	 if(currentSlideRemainderCeil > currentWindowNumber)
	 {
		var stepsToMove = currentSlideRemainderCeil - currentWindowNumber;
		for(var i = 0; i< stepsToMove; i++){
			$('.propertyImage-pagination-btn-next-1').click();
		}	 
	 }
	 else if(currentSlideRemainderCeil < currentWindowNumber)
	 {
		var stepsToMove = currentWindowNumber - currentSlideRemainderCeil;
		for(var i = 0; i< stepsToMove; i++){
			$('.propertyImage-pagination-btn-prev-1').click();
		}
	 }
});

$(document).on('click', '.navigation-toggler', function(){
	$('html').toggleClass('nav-active');
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

$(document).on('click', '.call-agent-btn', function(){
	var phoneNumber = $(this).attr('data-tel');
	var placeToGo = $('.call-agent').find('p').text(phoneNumber);
});

// page init
jQuery(function(){
  	initCarousel();
	initSlideShow();
	initAccordion();
	initLightbox();
	initAnchors();
	
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
		pauseOnHover: true,
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

	jQuery('.propertyImage-slider').scrollGallery({
		mask: '.mask',
		slider: '.slideset',
		slides: '.slide',
		btnPrev: '.propertyImage-slider-btn-prev',
		btnNext: '.propertyImage-slider-btn-next',
		pagerLinks: '.propertyImage-pagination .propertyImage-slide',
		autoRotation: false,
		circularRotation: true,
		switchTime: 3000,
		animSpeed: 500,
		swipeGap: true
	});
	
	jQuery('.propertyImage-pagination').scrollGallery({
		mask: '.propertyImage-mask',
		slider: '.propertyImage-slideset',
		slides: '.propertyImage-slide',
		btnPrev: '.propertyImage-pagination-btn-prev-1',
		btnNext: '.propertyImage-pagination-btn-next-1',
		pagerLinks: '.pagination li',
		autoRotation: false,
		circularRotation: true,
		switchTime: 3000,
		animSpeed: 500,
		currentNumber: '.paginationCurrent-num-1',
		totalNumber: '.total-num-1',
		swipeGap: true
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
// smooth anchor links
function initAnchors() {
	// common case:
	new SmoothScroll({
		extraOffset: $('#header').height() || 20,
		anchorLinks: '.scroll',
		activeClasses: 'link',
		wheelBehavior: 'ignore',
		animDuration: 800
	});
}