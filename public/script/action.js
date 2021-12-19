// scroll
$(window).scroll(function () {
  let header = document.querySelector(".header");
  if ($(this).scrollTop() > 0) {
    header.style.backgroundColor = "#222";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
const btnSearch = document.querySelector(".btn-search");
const inputSearch = document.querySelector("#input-search");
btnSearch.addEventListener("click", () => {
  inputSearch.classList.toggle("hidden");
});
