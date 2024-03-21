// DATA PROJECTS ARRAY
const projects = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "Portfolio is a SPA which includes a short resume about my ambitious learning path, skills and projects. ",
    techStack:
      "React | React Bootstrap | JS | NodeJs | npm | Bootstrap | CSS3 | HTML5",
    image: "./assets/photos/desktop-preview.png",
    liveUrl: "https://resume-project-me.netlify.app/",
    codeUrl: "https://github.com/ecaterinamh/resume",
  },
  {
    id: 2,
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
    id: 3,
    title: "Game: Roll The Dice",
    description:
      "This game wad made while I was studying the JavaScript Course of Jonas Schmedtmann on Udemy.",
    techStack: "JS | DOM | CSS3 | HTML5",
    image: "./assets/photos/rollthedice.png",
    liveUrl: "https://game-rollthedice.netlify.app/",
    codeUrl: "https://github.com/ecaterinamh/gamerollthedice",
  },
  {
    id: 4,
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
