const toggle = document.querySelector(".toggle");
const links = document.querySelector(".links");

toggle.addEventListener("click", () => {
  links.classList.toggle("show");
  toggle.classList.toggle("close");
  document.querySelector("body").classList.toggle("overflow");
});
