$(document).ready(function() {
  $(".js-example-basic-single").select2();

  if (screen.width < 768){
		$('.call-agent-btn').each(function(){
			var mobileNumber = $(this).attr('data-tel');
			$(this).attr('href', 'tel:'+mobileNumber)
		});
	}

	if($('.publicProperty-post').length == 0){
		$('.propertyNotFound').removeClass('hidden');
	}

	$('.addPro-type:first').trigger('change');

	$('.list-extraFeatures').slideUp();

});

$(document).on('change keyup', 'input, textarea, select', function(){
	$(this).closest('.input-holder').removeClass('error');
});


$(document).on('click', 'a.lightbox', function(){
	$('#wrapper').addClass('fancy-overlay');
});

$(document).mouseup(function (e)
{
    var container = $(".fancybox-opened");

    if (!container.is(e.target) 
        && container.has(e.target).length === 0) 
    {
		$('#wrapper').removeClass('fancy-overlay');
    }
});

$(document).on('click', '.generic-lightbox>.close, .fancybox-close', function(){
	$('#wrapper').removeClass('fancy-overlay');
});

$(document).keyup(function(e) {
  if (e.keyCode === 27){ 
  		$('#wrapper').removeClass('fancy-overlay');
	}   // esc
});

$(document).on('change', '.addPro-type', function(){
	$(this).closest('ul').find('li').removeClass('active');
	
	$('.addPro-type').each(function(){
		if($(this).is(':checked')){
			$(this).closest('li').addClass('active');
			$('.subtype-links').removeClass('hidden');
		}
	});
});

$(document).on('click', '.propertyImage-slider-btn-next, .propertyImage-slider-btn-prev', function(){
	var windowSize = 5;
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

function previewAddPropertyImg(file, target)
 {
	previewFile(file, target);
	$(file).closest('li').addClass('image-loaded');
	$(file).closest('li').find('.picture-name').focus();
 }


function previewFile(file, target) {
  var preview = document.querySelector(target);
  var file    = file.files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}

$(document).on('click', '.propertyDocumentCloseBtn', function(){
	 $(this).closest('li').find('.picture-name').val('');
	 $(this).closest('li').find('img').attr('src', '#');
	 $(this).closest('li').removeClass('image-loaded');
 });

$(document).on('click', '.extra-features', function(){
	$(this).toggleClass('active');
	$('.list-extraFeatures').slideToggle();
});

$(document).on('keyup', '#search-society', function(){
	var searchValue = $(this).val();
	$('.societiesBlock-listing').find('li').each( function(){
		var re = new RegExp(searchValue, 'gi');
		 if($(this).text().match(re) == null){
		 	$(this).hide();
		 }else{
			 $(this).show();
		 }
	});
});

$('.hidden-checkfield').change(function(){
    if($(this).is(":checked")) {
        $('.registration-form').addClass("agent-info");
    } else {
        $('.registration-form').removeClass("agent-info");
		$('.company-logo').removeClass('hover');
		$('.picture-holder').css({
			'display':'none'
		});
    }
});

$(document).on('click', '.role-opener', function(){
	$('.registration-form').find('.role-listing').slideToggle();
	$(this).toggleClass('active');
});

function countCheckedRoles(){
	var totalCheckedRoles = 0;
	$('.userRole-checkbox').each(function() {
  		if($(this).is(':checked'))
		  totalCheckedRoles++;
	});
	if(totalCheckedRoles == 0)
		$('.role-opener').html('Other Roles');
	else	
		$('.role-opener').html('Other Roles ( '+totalCheckedRoles+' Selected )');
}

$(document).on('change', '.userRole-checkbox', function(){
	countCheckedRoles();
});

function countSelectedSocieties(){
	var totalSelectedSocieties = 0;
	$('.selectSociety-checkbox').each( function(){
		if($(this).is(':checked')){
			totalSelectedSocieties++;	
		}
		if(totalSelectedSocieties > 1){
			$('.calculatedSocieties').text(totalSelectedSocieties+' Societies Selected');			
		}
		else {
			if(totalSelectedSocieties == 1){
				$('.calculatedSocieties').text(totalSelectedSocieties+' Society Selected');
			}
			else{
				$('.calculatedSocieties').text('');
			}
		}
	})
}

$(document).on('change', '.selectSociety-checkbox', function(){
	countSelectedSocieties();
});

$(document).on('change', '.agent-brokerCheckbox', function(){
	if($(this).is(':checked')){
		$('.agent-brokerCheckbox').each(function(){
			$(this).prop('checked', true);
		});
		$('.registration-form').addClass('agent-info')
	}
	else {
		$('.agent-brokerCheckbox').each(function(){
			$(this).prop('checked', false);
			$('.registration-form').removeClass('agent-info')
		});
	}
	countCheckedRoles();
});

function companyLogoUploader(file, target)
 {
	previewFile(file, target);
	$(file).closest('.company-logo').find('.picture-holder').css({
		 'display':'block'
	});
	$(file).closest('.company-logo').addClass('hover');
 }
 
 $(document).on('click', '.delete', function(){
	 $(this).closest('.company-logo').find('.company-profileP').attr('src', '');
	 $(this).closest('.company-logo').find('.company-profileP').attr('alt', '');
	 $(this).closest('.company-logo').removeClass('hover');
	 $(this).closest('.company-logo').find('.picture-holder').css({
		 'display':'none'
	 });
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