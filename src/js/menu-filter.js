const menuOpen = document.querySelector("[data-menu-open]");
const menuFilter = document.querySelector("[data-menu-filter]");
const menuFilterClose = document.querySelector("[data-menu-exit]");
const menuItem = document.querySelectorAll("[data-menu-item]");
const body = document.querySelector("[data-body]");

if (menuFilter) {
    menuOpen.addEventListener("click", (evt) => {
        evt.preventDefault()
        menuFilter.classList.add('menu-filter--active');
        body.style.overflow = 'hidden';
        body.style.height = '100%';
    });

    menuItem.forEach((menuFilterElement) => {
        const menuFilterInner = menuFilterElement.querySelector("[data-menu-inner]");
        const menuFilterBack = menuFilterElement.querySelector("[data-menu-back]");
        menuFilterElement.addEventListener('click', () => {
            menuFilterInner.classList.add('menu-item--active')
        })
        menuFilterBack.addEventListener("click", (evt) => {
            evt.preventDefault()
            evt.stopPropagation()
            menuFilterInner.classList.remove('menu-item--active')
        })
    })

    menuFilterClose.addEventListener("click", () => {
        menuFilter.classList.remove('menu-filter--active');
        body.style.overflow = 'auto';
        body.style.height = 'auto';
    })
}