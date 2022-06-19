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
  //console.log(window.location.protocol + "//" + window.location.host + "/#", item.href.includes("#"))
  if (item.href.includes("#")) {
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


let cart = {
  'a1': {
    'name': 'Indicator A-Scalp (1.0)',
    'cost': 50,
    'added': false
  },
  'a2': {
    'name': 'Indicator A-Scalp (2.0)',
    'cost': 50,
    'added': false
  },
  'a3': {
    'name': 'Indicator A-Scalp (3.0)',
    'cost': 50,
    'added': false
  },
  'b1': {
    'name': 'Indicator B-Scalp (1.0)',
    'cost': 50,
    'added': false
  },
  'b2': {
    'name': 'Indicator B-Scalp (2.0)',
    'cost': 50,
    'added': false
  },
  'b3': {
    'name': 'Indicator B-Scalp (3.0)',
    'cost': 50,
    'added': false
  },
  'p1': {
    'name': 'Indicator P-Scalp (1.0)',
    'cost': 50,
    'added': false
  },
  'p2': {
    'name': 'Indicator P-Scalp (2.0)',
    'cost': 50,
    'added': false
  },
  'p3': {
    'name': 'Indicator P-Scalp (3.0)',
    'cost': 50,
    'added': false
  },
}

let summ = 0;

document.querySelectorAll("button[data-indicator]").forEach(function (item) {
  item.onclick = function (e) {
    e.preventDefault();
    document.body.style.overflow = "hidden";
    document.querySelector("#modal").style.opacity = "1";
    document.querySelector("#modal").style.zIndex = "999999";
    console.log(item.attributes["data-indicator"].value)
  };
});

document.querySelectorAll("#modal button").forEach(function (item) {
  item.onclick = function (e) {
    if (e.target.dataset.modal == "close") {
      document.body.style.overflow = "inherit";
      document.querySelector("#modal").style.opacity = "0"; 
      document.querySelector("#modal").style.zIndex = "-99999";
    }
    else if (e.target.dataset.id) {
      
      //console.log(cart[e.target.dataset.id].added);
    
      cart[e.target.dataset.id].added = !cart[e.target.dataset.id].added;
      cart[e.target.dataset.id].added ? summ += cart[e.target.dataset.id].cost : summ -= cart[e.target.dataset.id].cost;
      e.target.classList.add("added")
      cart[e.target.dataset.id].added ? e.target.innerHTML = "Добавлено" : e.target.innerHTML = "Добавить"
    
      document.querySelector("#modal .result .oplata h2 span").innerHTML = summ + "$";
     
      var inned = false;
      var cart_items = []
      for (item in cart) {
        if (cart[item].added) {
          cart_items.push({"name": cart[item].name, "cost": cart[item].cost})
          inned = true;
        }
      }

      if (!inned) {
        document.querySelector("#modal .result_ind").innerHTML = "";
      }
      else {
        document.querySelector("#modal .result_ind").innerHTML = "";
        for (item in cart_items) {
          document.querySelector("#modal .result_ind").innerHTML += `<div class="indicator_to_buy"><h4>${cart_items[item].name}</h4><p>${cart_items[item].cost}</p></div>`
        }
      }
    }
  }
})