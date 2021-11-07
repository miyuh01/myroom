$(function(){
  $('.js-faq__item__link').each(function(){
    $(this).on('click',function(){
      $("+.faq__contents__menu",this).slideToggle();
      return false ;
   });
  });
});


    $(".js-faq__item__link").click(function(){
        $('img.faq_btn').css('transform','rotate(90deg)');
       return false;
    });
});
