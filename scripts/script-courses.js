"use strict";

// DATA

const courses = [
  //   {
  //     id: 1,
  //     title: "React- The Complete Guide 2023 on",
  //     href: "https://www.udemy.com",
  //     src: "./assets/photos/Udemy-Symbol.png",
  //     period: "In progress",
  //     description:
  //       "This course is the complete guide to learn React , Hooks,Context API, React Redux, React Router, HTTP, NextJS, React Unit Testing, best practices and way more. The author is Maximilian Schwarzmüller. The course included 74 hours of online study, 38 coding exercises, assigments, articles, and projects. Is is awarded with a certificate of completion.",
  //   },
  {
    id: 2,
    title: "The Complete JavaScript Course 2024: From Zero to Expert! on",
    href: "https://www.udemy.com",
    src: "./assets/photos/Udemy-Symbol.png",
    period: "January 2024 - April 2024",
    description:
      "This course is the complete guide to learn and master JavaScript. The author is Jonas Schmedtmann. The course included 65 hours of online study, 8 coding exercises, assigments, 22 articles, and projects. Is is awarded with a certificate of completion.",
    alt: "udemy-logo",
  },
  {
    id: 3,
    title: " Web Development Course at",
    href: "https://www.itschool.ro/cursuri/curs-web-development-online",
    src: "./assets/photos/itschool-logo.png",
    period: "May 2023 - November 2023",
    description:
      "Successfully graduated the Web Development Online Course certified and accredited by Ministry of Education with a two times/week frequency, totaling more than 150 hours of online and individual study, homeworks and building projects. Tech stack: React, JS, NodeJS, npm, APIs, Git/Github, DOM, Bootstrap, CSS3, HTML5.",
    alt: "itschool-logo",
  },
  {
    id: 4,
    title: "Intro in IT Course at",
    href: "https://scoalainformala.ro/cursuri/cursuri-it-incepatori-online/cursuri-introducere-in-it/",
    src: "./assets/photos/logo_color.png",
    period: "March 2023 - April 2023",
    description:
      "How does an application come to life.Client-Server Application Architecture. Multi-layer ApplicationArchitecture.Basics of Internet and Protocols: DNS, TCP/IP, HTTPS.Agile environment and Scrum framework.Basics of Web Development: HTML5, CSS, JavaScript. Database fundamentals: SQL.Basics of Software Testing.",
    alt: "scoalainformala-logo",
  },
  {
    id: 5,
    title: "Front-End Engineer Course at",
    href: "https://www.codecademy.com/catalog/subject/web-development",
    src: "./assets/photos/Untitled.png",
    period: "June 2022 - December 2023",
    description:
      "Self-paced Online Front-End Engineer Path. HTML5, CSS3,developing sites locally, deploying websites. Websiteresponsiveness: basics of web design, advanced CSS, CSStransitions and animation, Bootstrap; Interactive Websites:JS, DOM, accessibility, Git and GitHub. JS testing, AsyncJS, React, Redux; Interview Prep: linear and complex data structures, algorithms.",
    alt: "codecademy-logo",
  },
];

const techLogos = [
  {
    id: 1,
    img: "./assets/photos/react.svg",
    title: "REACT",
  },
  {
    id: 2,
    img: "./assets/photos/javascript.svg",
    title: "JAVASCRIPT",
  },
  {
    id: 3,
    img: "./assets/photos/nodejs-logo-FBE122E377-seeklogo.com.png",
    title: "NODEJS",
  },
  {
    id: 4,
    img: "./assets/photos/bootstrap.svg",
    title: "BOOTSTRAP",
  },
  {
    id: 5,
    img: "./assets/photos/Git_icon.svg",
    title: "GIT",
  },
  {
    id: 6,
    img: "./assets/photos/css.svg",
    title: "CSS3",
  },
  {
    id: 7,
    img: "./assets/photos/html.svg",
    title: "HTML5",
  },
];

// ELEMENTS
const coursesContainer = document.querySelector(".section__container--courses");
const logosContainer = document.querySelector(".section__skills--list");

// FUNCTIONS

// FUNCTION FOR COURSES
const renderCourses = function () {
  courses.forEach((course, i) => {
    let orientation = "right";

    i % 2 === 0 ? (orientation = "right") : (orientation = "left");

    const item = `
        <div class="card__course ${orientation}__container">
            <div class="point"></div>
            <div class="content__course">
                <h5 class="mb-3"> ${course.title}
                <a class="my-2" href=${course.href}>
                    <img class="${course.alt}" src=${course.src} alt=${course.alt} />
                </a>
                </h5>
                <p>${course.period}</p>
                <p>${course.description}
                </p>
            </div> 
        </div>
        `;
    coursesContainer.insertAdjacentHTML("beforeend", item);
  });
};

renderCourses(courses);

// FUNCTION FOR LOGOS
const renderLogos = function (techLogos) {
  techLogos.forEach((logo) => {
    const item = `
            <li>
                <img class=${logo.title.toLowerCase()} src=${logo.img} alt=${
      logo.title
    } />
                <p>${logo.title}</p>
            </li>
    `;
    logosContainer.insertAdjacentHTML("beforeend", item);
  });
};

renderLogos(techLogos);
