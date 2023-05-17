import { Navigation, Pagination } from "swiper";

export default function (el) {
    const data = {
        modules: [Navigation, Pagination],
        spaceBetween: 30,
        slideVisibleClass: 'slider__item--visible',
        watchSlidesProgress: true,
        breakpoints: {
            1300: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            572: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            320: {
                slidesPerView: "auto",
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
