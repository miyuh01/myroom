$(function(){
  $('.js-faq__item__link').each(function(){
    $(this).on('click',function(){
      $("+.faq__contents__menu",this).slideToggle();
      return false ;
   });
  });
});

/*$(function)(){
  $('.js-faq__item__link').on('click',function(){
   $('img.faq_btn').css('transform','rotate(90deg)');
  return false;
   });
});
});*/


$(function(){
    $(".js-faq__item__link").click(function(){
        $('#hoge').css('transform','rotate(90deg)');
       return false ;
    });
});
