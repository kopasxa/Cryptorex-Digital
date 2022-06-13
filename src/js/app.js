import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

AOS.init();

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  allowTouchMove: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelectorAll("a").forEach(function (item) {
    item.onclick = function (e) {
        e.preventDefault();
        document.querySelector("#" + e.target.href.split("#")[1]).scrollIntoView({
            behavior: "smooth",
        });
    };
});
