$(function(){
  $('#header-nav-open').on('click',function(){
    $(this).toggleClass('active');
    $('#header-nav').toggleClass('open');
  });
});
$(function(){
  $('#header-nav a').on('click',function(){
    $('#header-nav ').toggleClass('open');
    $('#header-nav-open').toggleClass('active');
  })
});
