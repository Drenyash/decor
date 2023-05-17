import { Navigation, Pagination } from "swiper";

export default function (el) {
    const data = {
        modules: [Navigation, Pagination],
        slideVisibleClass: 'slider__item--visible',
        watchSlidesProgress: true,
        pagination: {
            el: el.querySelector('[data-pagination]'),
            type: 'bullets',
            bulletClass: 'slider__pagination-bullet',
            bulletActiveClass: 'slider__pagination-bullet--active',
            clickable: true,
        }
    }

    try {
        if (el.querySelector('[data-nav]')) {
            data.navigation = {
                nextEl: el.querySelector('[data-button-next]'),
                prevEl: el.querySelector('[data-button-prev]'),
                disabledClass: 'slider__button--disabled',
            };
        }
    } catch (e) {
    }

    return data;
}
