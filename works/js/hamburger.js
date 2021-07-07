/*jQuery(function ($) {
  $(function () {
    $("#header-nav-open").on("click", function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $("#header-navi").removeClass("open").fadeOut(100);
      } else {
        $(this).addClass("active");
        $("#header-navi").fadeIn(100).addClass("open");
      }
    });
  });
});*/

$(function(){
  $('#header-nav-open').on('click',function(){
    $(this).toggleClass('active');
    $('#header-navi').toggleClass('open');
  });
});
$(function(){
  $('#header-navi a').on('click',function(){
    $('#header-navi').toggleClass('open');
    $('#header-nav-open').toggleClass('active');
  })
});
