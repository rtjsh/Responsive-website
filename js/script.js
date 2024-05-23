const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
const navlist = document.querySelector(".nav-list");
const rightnav = document.querySelector(".right-nav");

burger.addEventListener("click", function () {
  navlist.classList.toggle("v-class-resp");
  rightnav.classList.toggle("v-class-resp");
  navbar.classList.toggle("h-nav-resp");
});
