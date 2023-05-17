const counterList = document.querySelectorAll("[data-counter]");

counterList.forEach((counter) => {
    const buttonPlus = counter.querySelector("[data-c-plus]")
    const buttonMinus = counter.querySelector("[data-c-minus]")
    const value = counter.querySelector("[data-c-value]")

    let counterValue = 0;
    value.textContent = counterValue;

    const increment = () => {
        counterValue++;
        value.textContent = counterValue;
    }

    const decrement = () => {
        if (counterValue >= 1) {
            counterValue--;
            value.textContent = counterValue;
        }
    }

    buttonPlus.addEventListener('click', increment)
    buttonMinus.addEventListener('click', decrement)
})
