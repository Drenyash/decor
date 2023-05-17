import { Navigation, Pagination } from "swiper";

export default function (el) {
    const data = {
        modules: [Navigation, Pagination],
        spaceBetween: 93,
        slidesPerView: "auto",
        slideVisibleClass: 'slider__item--visible',
        watchSlidesProgress: true,
        centeredSlides: true,
        breakpoints: {
            320: {
                spaceBetween: 10,
            },
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
