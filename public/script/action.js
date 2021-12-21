// scroll
$(window).scroll(function () {
  let header = document.querySelector(".header");
  if ($(this).scrollTop() > 0) {
    header.style.backgroundColor = "#222";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
setTimeout(() => {
  $("body").removeClass("pre-loading")
$(".load").delay(50).fadeOut("fast")
}, 100);

