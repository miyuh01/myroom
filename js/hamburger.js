jQuery(function ($) {
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
});

$(".header-navi-contents-list'.a).on("click",function(){

})
