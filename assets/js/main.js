/*==================== MENU SHOW & HIDDEN ====================*/
const navMenu = document.querySelector("#nav-menu");
const menuButton = document.querySelector("#menu-button");
const menuClose = document.querySelector("#menu-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (menuButton) {
  menuButton.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (menuClose) {
  menuClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  navMenu.classList.remove("show-menu");
}
// When we click on each nav-link we remove show-menu class
navLink.forEach(link => link.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS / SPOILERS ====================*/
const skillsContent = document.querySelectorAll(".skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");
function toggleSpoilers() {
  let itemClass = this.parentNode.className;
  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills_close";
  }
  if (itemClass === "skills__content skills_close") {
    this.parentNode.className = "skills__content skills_open";
  }
}
skillsHeader.forEach(elem => {
  elem.addEventListener("click", toggleSpoilers);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove("qualification_active");
    });
    target.classList.add("qualification_active");
    tabs.forEach(tab => {
      tab.classList.remove("qualification_active");
    });
    tab.classList.add("qualification_active");
  });
});

/*==================== PORTFOLIO MIXITUP FILTER  ====================*/
const mixerPortfolio = mixitup(".portfolio__container", {
  selectors: {
    target: ".portfolio__card",
  },
  animation: {
    duration: 300,
  },
});

// Link active portfolio
const linkPortfolio = document.querySelectorAll(".portfolio__item");
function activePortfolio() {
  linkPortfolio.forEach(l => l.classList.remove("active-portfolio"));
  this.classList.add("active-portfolio");
}
linkPortfolio.forEach(l => l.addEventListener("click", activePortfolio));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
  const nav = document.querySelector("#header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
  const scrollUp = document.querySelector("#scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to a tag with the scroll-up class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.querySelector("#theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we activated or deactivated the dart theme
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
