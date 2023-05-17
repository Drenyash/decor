const filterItem = document.querySelectorAll("[data-filter-item]");
const filterForm = document.querySelector("[data-form-filter]");
const filterSearchButton = document.querySelector("[data-button-search]");
const filterResetButton = document.querySelector("[data-button-reset]");

if (filterForm) {
    filterItem.forEach((item) => {
        const filterTitle = item.querySelector('[data-filter-title]')
        filterTitle.addEventListener('click', () => {
            item.classList.toggle('form-filter__wrapper--open')
        })
    })
    filterForm.addEventListener("change", () => {
        let cansubmit = false;
        const filterElements = filterForm.elements;
        const filterElementsArray = [...filterElements]
        filterElementsArray.forEach(el => {
            if (el.checked) {
                cansubmit = true;
                return;
            }
        })
        if (cansubmit) {
            filterSearchButton.removeAttribute('disabled')
        } else {
            filterSearchButton.setAttribute('disabled', true)
        }
    })
    filterResetButton.addEventListener("click", () => {
        filterSearchButton.setAttribute('disabled', true)
    })
}
