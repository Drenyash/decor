const tabs = document.querySelectorAll("[data-tab]");
const tabsContent = document.querySelectorAll("[data-content]");
const loader = document.querySelector("[data-loader]");
const activeTabsHeaderClass = "toggle-tab";
const activeTabsContentClass = "active--visible";
const hideClass = "hide";

tabs.forEach((el, idx, arr) => {
    el.addEventListener('click', () => {
        arr.forEach(els => els.classList.remove(activeTabsHeaderClass))
        el.classList.add('toggle-tab')

        tabsContent.forEach(tabContentEl => {
            tabContentEl.classList.remove(activeTabsContentClass)
            tabContentEl.classList.add(hideClass)

            if (el.dataset.tab === tabContentEl.dataset.content) {
                tabContentEl.classList.remove(hideClass)
                tabContentEl.classList.add(activeTabsContentClass)
            }
        })
    })
})

