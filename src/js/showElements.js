const toggleElement = document.querySelectorAll("[data-show]");
const hideElement = document.querySelectorAll("[data-hide]");
window.addEventListener("keydown", (evt) => {
    hideElement.forEach(el => {
        if (!el.classList.contains('hide') && evt.keyCode === 27) {
            el.classList.add('hide')
        }
    })
})

window.addEventListener("click", (evt) => {
    const targetEl = evt.target;
    toggleElement.forEach((el, idx) => {
        if (!el || !hideElement[idx]) return
        if (el.dataset.show === hideElement[idx].dataset.hide) {
            const currentHideElement = hideElement[idx]
            if (targetEl.closest("[data-show]") === el && currentHideElement.classList.contains('hide') || targetEl.closest("[data-hide]") === currentHideElement) {
                currentHideElement.classList.remove('hide')
            } else {
                currentHideElement.classList.add('hide')
            }
        }
    });
});
