jQuery(window).on('scroll', function () {

 if (jQuery('.header-navi').height() < jQuery(this).scrollTop()) {
jQuery('.header-navi').addClass('change-color'); }
 else {
 jQuery('.header-navi').removeClass('change-color'); }
});
