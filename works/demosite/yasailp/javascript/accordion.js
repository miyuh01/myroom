$(function(){
  $('.js-faq__item__link').each(function(){
    $(this).on('click',function(){
      $("+.faq__contents__menu",this).slideToggle();
      $("img.faq_btn",this ).toggleClass(open);
      return false ;
   });
  });
});


  
