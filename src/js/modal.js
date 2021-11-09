import "../styles/modal.css";

const btnOpen = document.querySelector(".btn");
const modal = document.querySelector(".modal-overlay");
const btnClose = document.querySelector(".close-btn");

btnOpen.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
btnClose.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
