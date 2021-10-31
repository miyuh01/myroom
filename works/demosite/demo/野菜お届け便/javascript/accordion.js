$(function(){
  $('.js-faq__item__link').each(function(){
    $(this).on('click',function(){
      $("+.faq__contents__menu",this).slideToggle();
      return false ;
   });
  });
});
