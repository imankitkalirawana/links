/** @format */

window.addEventListener("scroll", function () {
  var headerScroll = document.getElementById("header-scroll");

  if (window.scrollY > 100) {
    headerScroll.classList.add("header-scroll");
  } else {
    headerScroll.classList.remove("header-scroll");
  }
});

window.addEventListener("scroll", function () {
  var headerScroll = document.getElementById("header-scroll");
  var headContainer = this.document.getElementById("head-container");
  if (window.scrollY > 98) {
    headerScroll.classList.add("header-animation");
    headContainer.classList.add("head-container");
  } else {
    headerScroll.classList.remove("header-animation");
    headContainer.classList.remove("head-container");
  }
});
