import axios from 'axios';
import {Fancybox} from "@fancyapps/ui";

document.addEventListener('DOMContentLoaded', () => {
    const accepted = document.querySelectorAll("[data-accept]");

    accepted.forEach(element => {
        new Form(element);
    })
})

class Form {
    constructor(el) {
        this.el = el;
        this.url = this.el.getAttribute('action');
        this.button = this.el.querySelector('[data-submit]');
        this.accepted = this.el.querySelector('[data-accept]');
        this.inputs = this.el.querySelectorAll('[data-input]');

        this.setListeners();
    }

    setListeners() {
        this.el.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submit();
        });
    }

    getData() {
        const els = [...this.el.querySelectorAll('input'), ...this.el.querySelectorAll('textarea'), ...this.el.querySelectorAll('select')];
        const data = new FormData;

        els.forEach(item => {
            if (item.type === 'file') {
                data.append(item.name, item.files[0]);
            } else if (item.type === 'radio' || item.type === 'checkbox') {
                if (item.checked) {
                    data.append(item.name, item.value);
                    item.checked = false;
                }
            } else {
                data.append(item.name, item.value);
                item.value = '';
            }
        });

        // Вывод данных в лог для проверки
        for (let pair of data.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        return data;
    }

    disable(state) {
        if (state) {
            this.button.setAttribute('disabled', 'disabled');
        } else {
            this.button.removeAttribute('disabled');
        }
    }

    setMessage(text) {
        this.button.innerHTML = text;
    }


    submit() {
        this.disable(true);
        this.setMessage('Отправка...');

        axios.post(this.url, this.getData())

            .then((response) => {
                console.log(response);
                this.setMessage('Отправлено!');
                this.accepted.classList.add('form__accepted--show');
            })
            .catch((error) => {
                console.error(error);
                this.setMessage('Ошибка');
            })
            .finally(() => {
                this.inputs.forEach(el => {
                    el.classList.remove('input--valid')
                })
                setTimeout(() => {
                    this.setMessage('Отправить');
                    this.accepted.classList.remove('form__accepted--show');
                }, 3000);
            });
    }
}

export {Form};