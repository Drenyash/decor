class Input {
    constructor(el) {
        this.el = el;
        this.input = this.el.querySelector('[data-input]')
        this.field = this.el.querySelector('[data-warning]');

        this.setListeners();
    }

    setListeners() {
        this.input.addEventListener('invalid', (e) => {
            this.setErrorClass(true);
            this.input.classList.remove('input--valid')
            this.input.classList.add('input--invalid')
        });

        this.input.addEventListener('valid', (e) => {
            this.setErrorClass(false);
            this.input.classList.add('input--valid')
            this.input.classList.remove('input--invalid')
        });

        this.input.addEventListener('change', () => {
            if (this.input.validity.valid) {
                this.setErrorClass(false);
                this.input.classList.add('input--valid')
                this.input.classList.remove('input--invalid')
            } else {
                this.setErrorClass(true);
                this.input.classList.remove('input--valid')
                this.input.classList.add('input--invalid')
            }
        });
    }

    setErrorClass(flag) {
        flag ? this.el.classList.add('form__item--active') : this.el.classList.remove('form__item--active');
    }
}

export {Input};