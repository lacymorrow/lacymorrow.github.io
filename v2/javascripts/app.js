;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $(document).ready(function() {
    //resize container to page height
    var $root = (window.innerHeight)? window.innerHeight: document.documentElement.clientHeight||document.body.clientHeight||820;
    $('.container-div').css("min-height",$root-45);
    $(window).resize(function() {
      var $root = (window.innerHeight)? window.innerHeight: document.documentElement.clientHeight||document.body.clientHeight||820;
      $('.container-div').css("min-height",$root-45);
    });
    //menu scroll effects
    $('#main-menu li a,#box a').click(function() {
      event.preventDefault();
  		$("html, body").animate({
  			scrollTop: ($($(this).attr("href")).offset().top - 49) + "px"
  		}, {
  			duration: 2000,
  			easing: "easeInOutCubic"  		
  		});
  		return false;
  	});   
    //About hover effects
    /*$('#about-app').hover(function(e) {
      $(this).hoverFlow(e.type,{
        width:"290px",
        height:"290px",
        margin: "-65px 0 -20px -20px",
  			'border-width' : "30px"
  		}, {
  			duration: 400,
  			easing: "easeInOutBack"
  		});
    },function(e) {
      $(this).hoverFlow(e.type,{
        width:"250px",
        height:"250px",
        margin: "-45px 0 0 0",
  			'border-width': "10px"
  		}, {
  			duration: 400,
  			easing: "easeInOutBack"
  		});
    }); */
    
    
    //Web Isotope
    $('#iso-container').isotope({
      // options
      itemSelector : '.isotope-item',
      //sortBy : 'random',
      layoutMode : 'masonry'
    });
    //Web Hover Functions
    $('.isotope-item').hover(function(e) {
      $('.caption',this).hoverFlow(e.type,{
  			bottom: "-35px"
  		}, {
  			duration: 500,
  			easing: "easeInOutBack"
  		});
  		$('.caption-small',this).hoverFlow(e.type,{
  			bottom: "-25px"
  		}, {
  			duration: 500,
  			easing: "easeInOutBack"
  		});
    },function(e) {
      $('.caption',this).hoverFlow(e.type,{
  			bottom: "-80px"
  		}, {
  			duration: 500,
  			easing: "easeInOutBack"
  		});
  		$('.caption-small',this).hoverFlow(e.type,{
  			bottom: "-50px"
  		}, {
  			duration: 500,
  			easing: "easeInOutBack"
  		});
    });
    
    //Web Isotope Filters
    $('#filters a').click(function(){
      event.preventDefault();
      var selector = $(this).attr('data-filter');
      $('#iso-container').isotope({ filter: selector });
      $('#filters dd.active').removeClass('active');
      $(this).parent().addClass('active');
      return false;
    });
    
    //Web OrangeBox
    $(document).bind('oB_init',function(event, id){
        $('#ob_container').css('margin-top','-200px');
        $('#ob_window').css('margin-top','-200px');
    });
    
    //Contact form
    
    //$("#commentForm").validate();
    /*
    $('#submitButtonOld').css('display','none');
    
    $('#submitButton').click(function() {
      event.preventDefault();
      $('#contactForm').submit();
      return false;
    });
    */
    
    $('#contactForm').submit(function(e){
      e.preventDefault();
      $('#submitButton').fadeOut('fast',function() {
        $('#contact-loader').fadeIn('fast');
      });
      $.post("http://lacymorrow.com/javascripts/ajaxmail.php", $(this).serialize())
      .done(function(data) {
        if(data==1){
          $('#alert-boxes').prepend($('#alert-box-success').html());
        } else {
          $('#alert-boxes').prepend($('#alert-box-alert').html());
        }
        $('#submitButton').fadeIn('fast');
        $('#contact-loader').css('display','false');
      })
      .fail(function() { 
        $('#alert-boxes').prepend($('#alert-box-alert').html());
        $('#submitButton').fadeIn('fast');
        $('#contact-loader').css('display','false');
      })
      return false;
    });
    //$("#contactForm").validate();
    
  	
  	
  
    $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
    $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
    $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
    $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
    $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
    $.fn.foundationClearing         ? $doc.foundationClearing() : null;

    $.fn.placeholder                ? $('input, textarea').placeholder() : null;
  });

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

})(jQuery, this);
/*
* hoverFlow - A Solution to Animation Queue Buildup in jQuery
* Version 1.00
*
* Copyright (c) 2009 Ralf Stoltze, http://www.2meter3.de/code/hoverFlow/
* Dual-licensed under the MIT and GPL licenses.
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*/
(function($){$.fn.hoverFlow=function(c,d,e,f,g){if($.inArray(c,['mouseover','mouseenter','mouseout','mouseleave'])==-1){return this}var h=typeof e==='object'?e:{complete:g||!g&&f||$.isFunction(e)&&e,duration:e,easing:g&&f||f&&!$.isFunction(f)&&f};h.queue=false;var i=h.complete;h.complete=function(){$(this).dequeue();if($.isFunction(i)){i.call(this)}};return this.each(function(){var b=$(this);if(c=='mouseover'||c=='mouseenter'){b.data('jQuery.hoverFlow',true)}else{b.removeData('jQuery.hoverFlow')}b.queue(function(){var a=(c=='mouseover'||c=='mouseenter')?b.data('jQuery.hoverFlow')!==undefined:b.data('jQuery.hoverFlow')===undefined;if(a){b.animate(d,h)}else{b.queue([])}})})}})(jQuery);
$(window).load(function(){
  //$("#featured").orbit();
});
