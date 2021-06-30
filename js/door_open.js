$('.open').each(function() {

  let room_1_off = $(this).attr('src');
  let room_1_on = $(this).attr('src').replace('off', 'on');
  let room_2_off = $(this).attr('src');
  let room_2_on = $(this).attr('src').replace('off', 'on');
  let room_3_off = $(this).attr('src');
  let room_3_on = $(this).attr('src').replace('off', 'on');

  $(this).hover(
    function () {
      $(this).attr('src', room_1_on);
      $(this).attr('src', room_2_on);
      $(this).attr('src', room_3_on);
    },
    function () {
      $(this).attr('src', room_1_off);
      $(this).attr('src', room_2_off);
      $(this).attr('src', room_3_off);
    }
  );

});
