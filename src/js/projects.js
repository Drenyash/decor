const projects = [
    "../assets/images/icon-pattern-column.svg",
    "../assets/images/icon-pattern-sofa.svg",
    "../assets/images/icon-pattern-color.svg",
    "../assets/images/icon-pattern-door.svg"
];
const projectsContainer = document.querySelectorAll("[data-project-pictures]");

projectsContainer.forEach((el) => {
    const imgList = [...el.children];
    imgList.forEach((el, idx) => {
        el.setAttribute('src', projects[Math.floor(Math.random() * projects.length)])
    })
})