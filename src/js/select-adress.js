const addresses = document.querySelectorAll("[data-address]");
const addressesContent = document.querySelectorAll("[data-content]");

if (addresses) {
    addresses.forEach((el, idx, arr) => {
        const input = el.querySelector("[data-address-input]")
        const content = el.querySelector("[data-content]")
        const showMapButton = el.querySelector("[data-show-map]")
        const map = el.querySelector("[data-map]")
        el.addEventListener('click', (evt) => {
            if (evt.target !== showMapButton) {
                addressesContent.forEach(el => el.classList.remove('address--toggle'))
                if (window.innerWidth > 1200) {
                    input.checked = true
                }
                if (input.checked) {
                    content.classList.add('address--toggle')
                }
            }
        })

        showMapButton.addEventListener('click', ()=> {
            map.classList.toggle('address__map--show')
        })
    })
}