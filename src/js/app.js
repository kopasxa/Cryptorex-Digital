import anime from "./modules/anime.es.js";

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
  if (item.href.startsWith(window.location.protocol + "//" + window.location.host + "/#")) {
    item.onclick = function (e) {
      e.preventDefault();
      document.body.style.overflow = "inherit";
      document.querySelector("#" + e.target.href.split("#")[1]).scrollIntoView({
        behavior: "smooth",
      });
    };
  }
});

var animation = anime({
  targets: document.querySelector(".menu-burger .wrapper"),
  translateY: 150,
  delay: 100,
  duration: 400,
  direction: "alternate",
  loop: false,
  autoplay: false,
  easing: "easeInOutSine",
});

const icon = document.querySelector(".burger-icon");
const burger_menu = document.querySelector(".menu-burger");
icon.addEventListener("click", (event) => {
  icon.classList.toggle("open");

  if (!burger_menu.classList.contains("open")) {
    animation.play();
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "inherit";
  }

  burger_menu.classList.toggle("open");
});

var elements = [
  document.querySelector("#our-achiv .items .item:nth-child(1) span"),
  document.querySelector("#our-achiv .items .item:nth-child(2) span"),
  document.querySelector("#our-achiv .items .item:nth-child(3) span"),
];

var alreadyAnim = false;

window.addEventListener("scroll", function (e) {
  if (
    window.scrollY >=
      document.querySelector("#our-achiv").offsetTop -
        window.innerHeight +
        document.querySelector("#our-achiv").scrollHeight -
        document.querySelector("#our-achiv").scrollHeight / 2 &&
    !alreadyAnim
  ) {
    alreadyAnim = true;
    anime({
      targets: elements[0],
      innerHTML: [0, 50],
      round: 1,
      easing: "linear",
    });
    anime({
      targets: elements[1],
      innerHTML: [0, 20],
      round: 1,
      easing: "linear",
    });
    anime({
      targets: elements[2],
      innerHTML: [0, 13],
      round: 1,
      easing: "linear",
    });
  }

  //console.log(document.querySelector('#our-achiv').offsetTop - window.innerHeight + document.querySelector('#our-achiv').scrollHeight, window.scrollY)
});
