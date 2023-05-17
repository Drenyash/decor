const area = document.querySelectorAll("[data-area]");

area.forEach(el => {
    el.addEventListener("keyup", ()=> {
        el.style.height = 59 + 'px';
        el.style.height = el.scrollHeight + 'px'
    })
})