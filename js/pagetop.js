/*$(function(){
let pageTop = $('#page-top');

pageTop.hide();
$(window).scroll(function(){
  if($(this).scrollTop()>80){
    pageTop.fadeIn(300);
  }else{
    pageTop.fadeOut(300);
  }
});*/

pageTop.click(function(){
  $('body,html').animate({
    scrollTop:0
  },500);
  return false;
});
});
jQuery(function(){
  var pagetop = $('#pagetop');
  pagetop.hide();
  $(window).scroll(function(){
    if($(this).scrollTop()>500){
      pagetop.fadeIn();
    }else{
      pagetop.fadeOut();
    }
  });
  pagetop.click(function(){
    $('body,html').animate({
      scrollTop:0
    },800);
  });
});
