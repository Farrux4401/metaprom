$(document).ready(function () {
  $("#regionBtn").click(function () {
    $("#bigMenu").toggle();
  });

  $(".big-menu__box a").hover(function () {
    $(this).toggleClass("_active");
  });
});
