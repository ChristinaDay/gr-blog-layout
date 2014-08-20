// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll < 163 && scroll < 2250) {
    $(".side-bar").css({
      position: "absolute",
      top: "",
      bottom: "auto"
    });
  } else if (scroll > 163 && scroll < 2250) {
    $(".side-bar").css({
      position: "fixed",
      top: "0px",
      bottom: "auto"
    });
  } else if (scroll > 2265) {
    $(".side-bar").css({
      position: "absolute",
      bottom: "-45px",
      top: "auto"
    });
  }
});