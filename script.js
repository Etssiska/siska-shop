const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
  menu.classListt.toggle("d-none");
});
