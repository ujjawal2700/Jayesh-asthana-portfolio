// alert("Hello!");

var typed = new Typed("#element", {
  strings: ["Content Creation", "Digital marketing", "Online earning"],
  typeSpeed: 50,
  loop: true,
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("#Header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// document.querySelectorAll(".list-item")

const hiddenElements = document.querySelectorAll(".hidden");
const hiddenElementsDown = document.querySelectorAll(".down");

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } 
  });
});
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("up");
    } 
  });
});

hiddenElements.forEach((el) => observer1.observe(el));
hiddenElementsDown.forEach((el) => observer2.observe(el));

const mobile_nav = document.querySelector(".mobile-navbar-button");
const nav_header = document.querySelector("#Header");
const nav_item_1 = document.querySelectorAll(".list-item")[0];
const nav_item_2 = document.querySelectorAll(".list-item")[1];
const nav_item_3 = document.querySelectorAll(".list-item")[2];
const nav_item_4 = document.querySelectorAll(".list-item")[3];
const nav_item_5 = document.querySelectorAll(".list-item")[4];

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());
nav_item_1.addEventListener("click", () => toggleNavbar());
nav_item_2.addEventListener("click", () => toggleNavbar());
nav_item_3.addEventListener("click", () => toggleNavbar());
nav_item_4.addEventListener("click", () => toggleNavbar());
nav_item_5.addEventListener("click", () => toggleNavbar());

const leadsguru_mobile = document.querySelector(".leadsguru-image");
if(window.innerWidth >= 320 && window.innerWidth <= 480){
  leadsguru_mobile.setAttribute("src", "./src/leadsguru-mobile.jpg");
}

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var Presentation = document.querySelector(".present-left iframe");

if(window.innerWidth > 480 && window.innerWidth <= 768){
  gsap.to(Presentation, {
    height: "65vh"
  })
}