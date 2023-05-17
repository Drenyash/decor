const body = document.querySelector("[data-body]");
const header = document.querySelector("[data-header]");
const burger = document.querySelector("[data-burger]");
const close = document.querySelector("[data-menu-close]");

burger.addEventListener("click", () => {
    body.style.overflow = 'hidden';
    header.classList.add('header--active')
})

close.addEventListener("click", ()=> {
    body.style.overflow = 'auto';
    header.classList.remove('header--active')
})