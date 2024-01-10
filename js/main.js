$(document).ready(function () {
  $(".regionBtn").click(function () {
    $("#bigMenu").toggle();
  });

  $(".close-bigmenu").click(function () {
    $("#bigMenu").toggle();
  });

  $(".big-menu__box a").hover(function () {
    $(this).toggleClass("_active");
  });

  //   Search input
  $("#myInput").on("keyup", function () {
    let value = $(this).val().toLowerCase();
    $(".region-block .region-block__list li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  $(".hamburger").click(function () {
    $(".hamburger").toggleClass("active");
    $(".header-nav__menu").toggleClass("active");
  });

  $(".nav-link").click(function () {
    $(".hamburger").removeClass("active");
    $(".header-nav__menu").removeClass("active");
  });

  // ***************
  $(".settings-btn").click(function () {
    $(".filter-block ").toggleClass("active");
  });

  $(".close-btn").click(function () {
    $(".filter-block ").removeClass("active");
  });

  $(".back-btn").click(function () {
    $(".big-menu__sub").addClass("big-menu__sub-close");
  });
  // $(".nav-vertical__item").click(function () {
  //   $(".big-menu__sub").toggle();
  // });
  // $(".back-btn").on("click touchstart", function (e) {
  //   e.preventDefault();
  //   history.back();
  // });

  //   Tabs
  $(".tab_content").hide();
  $(".tab_content:first").show();
  $(".tabs li:first").addClass("active");
  $(".tabs li").click(function (event) {
    $(".tabs li").removeClass("active");
    $(this).addClass("active");
    $(".tab_content").hide();

    var selectTab = $(this).find("a").attr("href");

    $(selectTab).fadeIn();
  });
});

// Scroled
let nav = document.querySelector(".header-bottom__item_input");
let sticky = nav.offsetTop;
window.onscroll = function () {
  sticker();
};
function sticker() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
