const category = document.querySelector("[data-category]");
const categoryItem = document.querySelectorAll("[data-category-item]");
const categoryButton = document.querySelector("[data-catalog-button]");
const categoryButtonMobile = document.querySelector("[data-catalog-button-m]");
const dropdownHeader = document.querySelector("[data-dropdown-header]");
const body = document.querySelector("[data-body]")

const categoryMain = document.querySelector("[data-category-wrapper-main]");
const categoryCategory = document.querySelector("[data-category-wrapper-category]");
const categoryLink = document.querySelectorAll("[data-category-link]");
const categoryBack = document.querySelectorAll("[data-category-back]");

if (category) {
    const showCategoryDropdown = () => {
        if (!dropdownHeader.classList.contains('section--dropdown--show')) {
            body.style.overflowY = 'hidden';
            dropdownHeader.classList.add('section--dropdown--show')
            categoryButton.classList.add('nav__link--menu--active');
        } else {
            body.style.overflowY = 'auto';
            dropdownHeader.classList.remove('section--dropdown--show')
            categoryButton.classList.remove('nav__link--menu--active');
        }
    }

    categoryItem.forEach((el) => {
        const categorylist = el.querySelector("[data-category-list]")
        el.addEventListener('click', () => {
            el.classList.toggle('category__item--toggle');
        })
        categorylist.addEventListener('click', (evt) => {
            evt.stopPropagation()
        })
    })

    if (categoryButton && categoryButtonMobile) {
        categoryButton.addEventListener('click', showCategoryDropdown)
        categoryButtonMobile.addEventListener('click', showCategoryDropdown)
    }

    dropdownHeader.addEventListener('click', () => {
        body.style.overflowY = 'auto';
        dropdownHeader.classList.remove('section--dropdown--show');
        categoryButton.classList.remove('nav__link--menu--active');
    })

    window.addEventListener('keydown', (evt) => {
        if (evt.keyCode === 27) {
            body.style.overflowY = 'auto';
            dropdownHeader.classList.remove('section--dropdown--show');
            categoryButton.classList.remove('nav__link--menu--active');
        }
    })

    category.addEventListener('click', (evt) => {
        evt.stopPropagation()
    })
}

if (categoryMain) {
    let categoryShowMore = false;

    function openCategory(status) {
        if (status) {
            categoryCategory.style.display = 'flex'
            categoryMain.style.display = 'none'
        } else {
            categoryCategory.style.display = 'none'
            categoryMain.style.display = 'grid'
        }
    }
    openCategory(categoryShowMore)

    categoryLink.forEach(el => {
        el.addEventListener('click', () => {
            categoryShowMore = !categoryShowMore;
            openCategory(categoryShowMore)
        })
    })

    categoryBack.forEach(el => {
        el.addEventListener('click', () => {
            categoryShowMore = !categoryShowMore;
            openCategory(categoryShowMore)
        })
    })
}