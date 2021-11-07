$(function(){
  $('.js-faq__item__link').each(function(){
    $(this).on('click',function(){
      $("+.faq__contents__menu",this).slideToggle();
      return false ;
   });
  });
});


  
$('.js-faq__item__link').on('click', function () {
  /*クリックでコンテンツを開閉*/
  /*矢印の向きを変更*/
  $(this).toggleClass('open', 200);
});

});
