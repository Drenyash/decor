const searchBox = document.querySelector("[data-search-box]");
const search = document.querySelectorAll("[data-search]");
const searchInput = searchBox.querySelector("[data-search='input']");
const nav = document.querySelector("[data-nav]");
const navUser = document.querySelector("[data-nav-user]");
const headerWrapper = document.querySelector("[data-header-menu]");
const closeButton = document.querySelector("[data-close]");
const dropdown = document.querySelector("[data-dropdown]");
const body = document.querySelector("[data-body]");

const openSearch = () => {
    searchBox.classList.add('search-box--open')
    nav.classList.add('hidden');
    navUser.classList.add('hidden');
    headerWrapper.classList.add('header-body__wrapper--menu--full')
    dropdown.classList.add('section--dropdown--show')
    body.style.overflowY = 'hidden';
    body.style.height = '100%';
};

const closeSearch = () => {
    searchBox.classList.remove('search-box--open')
    nav.classList.remove('hidden');
    navUser.classList.remove('hidden');
    headerWrapper.classList.remove('header-body__wrapper--menu--full')
    dropdown.classList.remove('section--dropdown--show')
    searchInput.value = '';
    body.style.overflowY = 'auto';
    body.style.height = 'auto';
};

window.addEventListener("keydown", (evt) => {
    if (evt.keyCode === 27) {
        closeSearch()
    }
})

searchInput.addEventListener("focus", openSearch);

search.forEach(searchEl => {
    const searchIcon = searchEl.querySelector("[data-icon]")
    const input = searchEl.querySelector("[data-search='input']");
    if (input) {
        input.addEventListener("input", () => {
            if (input.value.length >= 1) {
                input.classList.add('input--typing')
                searchIcon.classList.add('hide')
            } else {
                input.classList.remove('input--typing')
                searchIcon.classList.remove('hide')
            }
        });
    }
})

closeButton.addEventListener("click", closeSearch);
