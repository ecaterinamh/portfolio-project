"use strict";
// ELEMENTS
const hamburgerBtn = document.querySelector(".hamburger--menu");
const menuList = document.querySelector(".menu-icon-container");
const navlinks = document.querySelector(".nav__links");
const section1 = document.querySelector(".section--1");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const handlehovers = document.querySelectorAll(".handlehover");

// FUNCTIONS

// FUNCTION FOR DROPDOWN LIST
hamburgerBtn.addEventListener("click", function () {
  menuList.classList.toggle("show-dropdown");
  hamburgerBtn.classList.toggle("active");
});

// SMOOTH SCROOLING TO EACH SECTION
header.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// NAVBAR STICKY BY USING INTERSECTION OBSERVER
let headerCoords = document
  .querySelector("header")
  .getBoundingClientRect().height;

const getStickyHeader = function (entries) {
  const [entry] = entries;
  //   console.log(entry);
  if (entry.isIntersecting === false) {
    header.classList.add("sticky");
  }
};

const options = {
  root: null,
  thresold: 0,
};

const headerObserver = new IntersectionObserver(getStickyHeader, options);

headerObserver.observe(header);

// HANDLEHOVER EFFECT
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = e.target.closest("nav").querySelectorAll(".nav__link");

    siblings.forEach((item) => {
      if (item !== link) item.style.opacity = this;
    });
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));

// REVEALING ELEMENTS ON SCROLL
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

handlehovers.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
