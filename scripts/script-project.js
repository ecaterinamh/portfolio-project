// DATA PROJECTS ARRAY
const projects = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "This is my very first portfolio after I freshly graduated the Web Development Course at IT School.",
    techStack: "JAVASCRIPT | DOM | CSS3 | HTML5",
    image: "./assets/photos/desktop-image.png",
    liveUrl: "https://portfolio-project-em.netlify.app/",
    codeUrl: "https://github.com/ecaterinamh/portfolio-project",
  },
  {
    id: 2,
    title: "BANKIST APP",
    description:
      "This app was made while I was JavaScript by takind the Course of Jonas Schmedtmann on Udemy.",
    techStack: " JAVASCRIPT | DOM | CSS3 | HTML5",
    image: "./assets/photos/bankist-web-app.png",
    liveUrl: "https://bankist-website-app-js.netlify.app/",
    codeUrl: "https://github.com/ecaterinamh/bankist-website",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "This is an weather app made during the Web Development course at IT School.",
    techStack:
      "JS | JSON | APIs | POSTMAN | Node.js | npm | Bootstrap5 | CSS3 | HTML5",
    image: "./assets/photos/weatherapppreview.png",
    liveUrl: "https://project-it-school-weather-app.netlify.app/",
    codeUrl: "https://github.com/ecaterinamh/project-it-school-weather-app",
  },
  {
    id: 4,
    title: "Game: Roll The Dice",
    description:
      "This game was made while I was studying the JavaScript Course of Jonas Schmedtmann on Udemy.",
    techStack: "JAVASCRIPT | DOM | CSS3 | HTML5",
    image: "./assets/photos/rollthedice.png",
    liveUrl: "https://game-rollthedice.netlify.app/",
    codeUrl: "https://github.com/ecaterinamh/gamerollthedice",
  },
  {
    id: 5,
    title: "IT SCHOOL PAGE",
    description:
      "This site was made while I was taking the Web Development Course online of IT School.",
    techStack: "CSS3 | HTML5",
    image: "./assets/photos/it-school-site.png",
    liveUrl: "https://copy-of-itschool-site.netlify.app",
    codeUrl: "https://github.com/ecaterinamh/it-school-project",
  },
  {
    id: 6,
    title: "Perfume Card",
    description:
      "This was a challenge made from the site Front End Mentor. I built a perfume card by using flexbox.",
    techStack: " CSS3 | HTML5",
    image: "./assets/photos/perfume.png",
    liveUrl: "https://fem-product-preview-card-solution.netlify.app/",
    codeUrl: "https://github.com/ecaterinamh/Product-card-component",
  },
];

// FUNCTION
const projectsContainer = document.querySelector(".projects__container");

const renderProjects = function (projects) {
  projects.forEach((project) => {
    const item = `
    <div class="project__card--body">
        <img class="project__card--image" src=${project.image} alt='picture-project' />
        <div class="project__card--details">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p>${project.techStack}</p>
            <div class="project__links">
                <a class="live" href=${project.liveUrl} target="_blank">
                  <i class="fas fa-laptop"></i>
                  LIVE
                </a>
                <a class="code" href=${project.codeUrl} target="_blank">
                  <i class="fas fa-code"></i>
                  CODE
                </a>
            </div> 
        </div>
    </div>
    `;

    projectsContainer.insertAdjacentHTML("beforeend", item);
  });
};

renderProjects(projects);
