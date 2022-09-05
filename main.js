const navBg = document.querySelector(".navigation__background");
const direcs = document.querySelectorAll(".navigation__list-item-link");
const nav = document.querySelector(".navigation__nav");
const navList = document.querySelector(".navigation__list");
const navToggle = document.querySelector(".navigation__button");

function hideNav() {
  navBg.classList.remove("open");
  nav.classList.remove("open");
  navList.classList.remove("open");
  navToggle.classList.remove("open");
}
navToggle.onclick = function () {
  navToggle.classList.toggle("open");
  navBg.classList.toggle("open");
  navList.classList.toggle("open");
  nav.classList.toggle("open");
};
for (const direc of direcs) {
  direc.addEventListener("click", hideNav);
}

const btnMode = document.querySelector(".btn-mode-content");
const darkMode = document.querySelector(".body");
const darkMode1 = document.querySelectorAll(".btn--white");
const darkMode2 = document.querySelectorAll(".btn-link");
const aboutMode = document.querySelectorAll(".about__container-title");
const aboutMode1 = document.querySelectorAll(".about__container-content");
const helfMode = document.querySelector(".help-form");
const formMode = document.querySelectorAll(".form__group-input");
const formMode1 = document.querySelectorAll(".form__radio-label");
const formMode2 = document.querySelectorAll(".form__group-label");
const skinMode = document.querySelectorAll(".skin__side--front");
const skinMode1 = document.querySelectorAll(".skin__details");
const skillMode = document.querySelectorAll(".skill-box");
const skillMode1 = document.querySelectorAll(".skill-box__heading");
const skillMode2 = document.querySelectorAll(".skill-box__content");
const commentMode = document.querySelectorAll(".comment__text");
const commentMode1 = document.querySelectorAll(".comment__text-heading");
const navigationMode = document.querySelector(".navigation__button");
const navigationMode1 = document.querySelectorAll(
  ".navigation__list-item-link"
);
const navigationMode2 = document.querySelector(".navigation__icon");
const navigationMode3 = document.querySelector(".navigation__background");
const buyMode = document.querySelectorAll(".form-buy");
const buyMode1 = document.querySelectorAll(".buy-heading");
const buyMode2 = document.querySelectorAll(".buy-desc");

btnMode.onclick = function () {
  darkMode.classList.toggle("dark");
  helfMode.classList.toggle("dark");
  navigationMode.classList.toggle("dark");
  for (const navigation1 of navigationMode1) {
    navigation1.classList.toggle("dark");
  }
  navigationMode2.classList.toggle("dark");
  navigationMode3.classList.toggle("dark");
  for (const dark1 of darkMode1) {
    dark1.classList.toggle("dark");
  }
  for (const dark2 of darkMode2) {
    dark2.classList.toggle("dark");
  }
  for (const about of aboutMode) {
    about.classList.toggle("dark");
  }
  for (const about of aboutMode1) {
    about.classList.toggle("dark");
  }
  for (const form of formMode2) {
    form.classList.toggle("dark");
  }
  for (const form2 of formMode) {
    form2.classList.toggle("dark");
  }
  for (const form1 of formMode1) {
    form1.classList.toggle("dark");
  }
  for (const skill of skillMode) {
    skill.classList.toggle("dark");
  }
  for (const skill1 of skillMode1) {
    skill1.classList.toggle("dark");
  }
  for (const skill2 of skillMode2) {
    skill2.classList.toggle("dark");
  }
  for (const skin of skinMode) {
    skin.classList.toggle("dark");
  }
  for (const skin1 of skinMode1) {
    skin1.classList.toggle("dark");
  }
  for (const comment of commentMode) {
    comment.classList.toggle("dark");
  }
  for (const comment1 of commentMode1) {
    comment1.classList.toggle("dark");
  }
  for (const buy of buyMode) {
    buy.classList.toggle("dark");
  }
  for (const buy1 of buyMode1) {
    buy1.classList.toggle("dark");
  }
  for (const buy2 of buyMode2) {
    buy2.classList.toggle("dark");
  }
};
