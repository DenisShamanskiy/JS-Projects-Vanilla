import "../styles/navbar.css";

const navToggle = document.querySelector(".navigation-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
