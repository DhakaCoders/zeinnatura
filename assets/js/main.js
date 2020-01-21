(function($) {
var windowWidth = $(window).width();
$('.navbar-toggle').on('click', function(){
	$('#mobile-nav').slideToggle(300);
});
	
//matchHeightCol
if($('.mHc').length){
  $('.mHc').matchHeight();
};

//$('[data-toggle="tooltip"]').tooltip();



if($('.fancybox').length){
$('.fancybox').fancybox({
    //openEffect  : 'none',
    //closeEffect : 'none'
  });

}


/**
Responsive on 767px
*/

// if (windowWidth <= 767) {
  $('.toggle-btn').on('click', function(){
    $(this).toggleClass('menu-expend');
    $('.toggle-bar ul').slideToggle(500);
  });


// }



// http://codepen.io/norman_pixelkings/pen/NNbqgG
// https://stackoverflow.com/questions/38686650/slick-slides-on-pagination-hover


if( $('.hm-product-slider').length ){
    $('.hm-product-slider').slick({
      pauseOnHover: false,
      autoplay: true,
      autoplaySpeed: 6000,
      dots: false,
      infinite: false,
      arrows:true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.productsliderarrows .leftArrow'),
      nextArrow: $('.productsliderarrows .rightArrow'),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}


/**
Slick slider
*/
if( $('.responsive-slider').length ){
    $('.responsive-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}


/*Google Map*/
var CustomMapStyles  = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]

if( $('#mapID').length ){
var latitude = $('#mapID').data('latitude');
var longitude = $('#mapID').data('longitude');

var myCenter= new google.maps.LatLng(latitude,  longitude);
function initialize(){
    var mapProp = {
      center:myCenter,
      mapTypeControl:true,
      scrollwheel: false,
      zoomControl: true,
      disableDefaultUI: true,
      zoom:7,
      streetViewControl: false,
      rotateControl: true,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
      styles: CustomMapStyles
      };

    var map= new google.maps.Map(document.getElementById('mapID'),mapProp);
    var marker= new google.maps.Marker({
      position:myCenter,
        //icon:'map-marker.png'
      });
    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);

}

    new WOW().init();





/*Milon*/

/*
 Product Details Slider
*/

if( $('.product-thumb-slider-wrp').length ){
  $('.product-big-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 700,
    fade: true,
    dots: false,
    arrows: false,
    asNavFor: '.product-thumb-slider'
  });
  $('.product-thumb-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    speed: 700,
    dots: false,
    arrows: true,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    asNavFor: '.product-big-slider',
    prevArrow: $('.ThumbSliderArrows .leftArrow'),
    nextArrow: $('.ThumbSliderArrows .rightArrow'),
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            focusOnSelect: true,
            vertical: false,
            verticalSwiping: false,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            focusOnSelect: true,
            vertical: false,
            verticalSwiping: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            vertical: false,
            verticalSwiping: false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });

}




/*Prashanto*/

//banner animation
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $('.animate-banner').css({
    '-webkit-transform' : 'scale(' + (1 + scroll/2000) + ')',
    '-moz-transform'    : 'scale(' + (1 + scroll/2000) + ')',
    '-ms-transform'     : 'scale(' + (1 + scroll/2000) + ')',
    '-o-transform'      : 'scale(' + (1 + scroll/2000) + ')',
    'transform'         : 'scale(' + (1 + scroll/2000) + ')'
  });
});





if( $('.main-slider').length ){
    $('.main-slider').slick({
      pauseOnHover: false,
      autoplay: true,
      autoplaySpeed: 7000,
      dots: true,
      arrows:false,
      infinite: true,
      fade: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1
    });
}


if( $('.specialProductsSlider').length ){
    $('.specialProductsSlider').slick({
      dots: true,
      arrows:true,
      infinite: false,
      speed: 300,
      slidesToShow: 2.73,
      slidesToScroll: 1,
      responsive: [
        
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1.7
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1.7
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1.7
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.7
          }
        }
      ]
    });
}


//product slider
if( $('.product-slider-wrp').length ){
  $('.bigViewSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 700,
    fade: true,
    dots: false,
    arrows: false,
    asNavFor: '.thumbSlider'
  });
  $('.thumbSlider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    speed: 700,
    dots: false,
    arrows: true,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    asNavFor: '.bigViewSlider',
    prevArrow: $('.thumbSlider-arrows .leftArrow'),
    nextArrow: $('.thumbSlider-arrows .rightArrow')
  });

}


if( $('.hm-new-product-slider').length ){
    $('.hm-new-product-slider').slick({
      pauseOnHover: false,
      autoplay: true,
      autoplaySpeed: 6000,
      dots: false,
      infinite: false,
      arrows:true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.productNewSliderArrows .leftArrow'),
      nextArrow: $('.productNewSliderArrows .rightArrow'),
    });
}



if( $('.specialProductsSlider-item-innr').length ){
  $('.specialProductsSlider-item-innr > i').on('click', function(){
    $(this).toggleClass('active');
  });
}


$(".main-slide-item-dsc a").click(function(e) {
  e.preventDefault();
  var goto = $(this).attr('href');
  $('html, body').animate({ scrollTop: $(goto).offset().top - 30 }, 800);
});






/*Shoriful*/





/*Rannojit*/

$('.busket-apply-discount').on('click', function(){
  $(this).next('.bdcode').slideToggle(300);
  $(this).toggleClass('active');

});

/*
--------------
Start checkout
------------
*/

$('.odr-clk-btn button').on('click', function(){
    $(this).toggleClass('btn-expend');
    $('.product-item').slideToggle(500);
  });

$('.odr-sumry-btn-clk button').on('click', function(){
    $(this).toggleClass('odr-btn-expend');
    $('.product-des-innr').slideToggle(500);
  });


$('.view-dtls').on('click', function(){
    $(this).toggleClass('menu-expend');
    $('.view-clr-clk ul').slideToggle(500);
  });

$('.odr-view-dtls').on('click', function(){
  $(this).toggleClass('menu-odr-expend');
  $('.view-odr-clr-clk ul').slideToggle(500);
});

$("input[name='paymethod']").each( function (){
    if($(this).prop('checked') == true){
        $(this).parent().find('.toggleit').fadeIn();
        console.log( $(this).val() );
    }
});
function paymethod(){
  $('.cashondelivery, .paypal, .bankcc').hide();
  var value = $( 'input[name=paymethod]:checked' ).val();
  if( value == 'cashondelivery' )
    $('.cashondelivery').fadeIn();
  if( value == 'paypal' )
    $('.paypal').fadeIn();
  if( value == 'bankcc' )
    $('.bankcc').fadeIn();
}
paymethod();

$("input[name='paymethod']").change(function(){
  paymethod();
});

$("input[name='sameaddress']").on('change', function(){
  
  if ( $(this).is(':checked') ) {
    $(this).parents('.cashondelivery').find('.address-dsc').show();
    $(this).parents('.cashondelivery').find('.account-form').hide();
  }else{    
    $(this).parents('.cashondelivery').find('.address-dsc').hide();
    $(this).parents('.cashondelivery').find('.account-form').show();
  }
});

$('#afcencel').on('click', function(e){
  e.preventDefault();
  $("input[name='sameaddress']").prop('checked', true);
  $('.address-dsc').show();
  $('.account-form').hide();
});

$('.apply-discount-innr span.disc-code').on('click', function(){
  $(this).toggleClass('ds-btn-expend');
  $('.submit-fields').slideToggle(500);
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

if( $('#shipping').length ){
  $('#shipping').validator().on('submit', function (e) {
    if (e.isDefaultPrevented()) {
     
      $('#shipping').hide();
      $('#payment').fadeIn();
      $('#shipto, #shipmethod').fadeIn();
      $('.tab-btn-wrp').removeClass('step1').addClass('step2');
    } else {
      e.preventDefault();
      
      $('#shipping').hide();
      $('#payment').fadeIn();
      $('#shipto, #shipmethod').fadeIn();
      $('.tab-btn-wrp').removeClass('step1').addClass('step2');
      
    }
  });
}

$('.order-history-item-des').slideUp();
$('.order-history-item-tab').on('click', function(e){
  e.preventDefault();
  $(this).toggleClass('order-history-tab-active');
  $(this).parent().find('.order-history-item-des').slideToggle(300);
  $(this).parent().siblings().find('.order-history-item-des').slideUp(300);
  $(this).parent().siblings().find('.order-history-item-tab').removeClass('order-history-tab-active');
});



/*
------
End checkout
------
*/


})(jQuery);