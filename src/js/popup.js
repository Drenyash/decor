const popup = document.querySelector("[data-popup]");
const popupOpenButton = document.querySelectorAll("[data-button-open]");
if (popup) {
    window.addEventListener('click', (evt) => {
        const target = evt.target;
        if (!target.closest("[data-button-open]")) {
            popup.classList.add('hide')
        } else {
            popup.classList.remove('hide')
            popup.style.left = evt.clientX + (+50) + 'px';
            popup.style.top = evt.clientY + (-240) + 'px';

            if (evt.clientY < 200) {
                popup.style.top = evt.clientY + 'px';
            } else if (evt.clientY > 650) {
                popup.style.top = evt.clientY + (-500) + 'px';
            }

            if (evt.clientX > 1000) {
                popup.style.left = evt.clientX + (-400) + 'px';
            }
        }
    })

    window.addEventListener('keydown', (evt) => {
        if (evt.keyCode === 27) {
            popup.classList.add('hide')
        }
    })

    popup.addEventListener('click', (evt) => {
        evt.stopPropagation()
    })
}