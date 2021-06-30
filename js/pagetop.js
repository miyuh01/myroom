$(function(){
let pageTop = $('#page-top');

pageTop.hide();
$(window).scroll(function(){
  if($(this).scrollTop()>80){
    pageTop.fadeIn(300);
  }else{
    pageTop.fadeOut(300);
  }
});

pageTop.click(function(){
  $('body,html').animate({
    scrollTop:0
  },500);
  return false;
});
});
