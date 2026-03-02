// JavaScript Document

// Responsive Menu - Dropdown
const body = document.body;
const btnMenu = document.getElementById("btn-menu");
const nav = document.getElementById("main-navigation");
const backBtn = document.getElementById("back-btn");
const hamBurger = document.getElementsByClassName("hamburger-menu");

const links = document.querySelectorAll("ul a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    {
      link.setAttribute("href", "#" + link.textContent.toLocaleLowerCase());
    }
  });
});

btnMenu.addEventListener("click", openMenu);
btnMenu.addEventListener("mousedown", function (e) {
  e.preventDefault();
});

body.addEventListener("click", (e) => {
  if (
    body.classList.contains("menu-open") &&
    !nav.contains(e.target) &&
    !btnMenu.contains(e.target)
  ) {
    openMenu();
  }
});

const navLinks = nav.querySelectorAll("a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (body.classList.contains("menu-open")) {
      openMenu();
    }
  });
});

backBtn.addEventListener("click", () => {
  btnMenu.classList.remove("active");
  nav.classList.remove("active");
  body.classList.remove("menu-open");
});

function openMenu() {
 
  btnMenu.classList.toggle("active");
  nav.classList.toggle("active");
  body.classList.toggle("menu-open");
}
