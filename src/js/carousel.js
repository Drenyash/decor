import {Carousel, Fancybox} from '@fancyapps/ui';
import '@fancyapps/ui/dist/carousel/carousel.css';

import {Thumbs} from '@fancyapps/ui/dist/carousel/carousel.thumbs.esm';
import '@fancyapps/ui/dist/carousel/carousel.thumbs.css';

const carousel = document.getElementById('myCarousel');

const options = {
    compact: false,
    idle: false,
    dragToClose: false,
    contentClick: () =>
        window.matchMedia('(max-width: 578px), (max-height: 578px)').matches
            ? 'toggleMax'
            : 'toggleCover',

    animated: false,
    showClass: false,
    hideClass: false,
    arrows : false,

    Hash: false,
    Thumbs: false,

    Toolbar: {
        display: {
            left: [],
            middle: [],
            right: ['close'],
        },
    },

    Carousel: {
        transition: 'fadeFast',
        preload: 3,
    },

    Images: {
        zoom: false,
        Panzoom: {
            panMode: 'mousemove',
            mouseMoveFactor: 1.1,
        },
    },
};

if (carousel) {
    const productCarousel = new Carousel(
        carousel,
        {
            transition: 'fade',
            preload: 2, // Smoother navigation when using lazy loaded images

            groupAll: true,
            groupAttr: 'productPage',
            Dots: false,
            infinite: true,
            fill: true,
            arrows : false,
            breakpoints: {
                '(max-width: 1200px)': {
                    Dots: true,
                    Thumbs: false,
                },
            },

            Thumbs: {
                type: 'classic',
                Carousel: {
                    dragFree: false,
                    slidesPerPage: '3',
                    Navigation: true,
                    arrows : false,

                    axis: 'y',
                },
            },
        },
        {Thumbs}
    );
}

Fancybox.bind('[data-fancybox="gallery"]', {
    compact: false,
    idle: false,
    dragToClose: false,
    contentClick: () =>
        window.matchMedia('(max-width: 578px), (max-height: 578px)').matches
            ? 'toggleMax'
            : 'toggleCover',

    animated: false,
    showClass: false,
    hideClass: false,

    Hash: false,
    Thumbs: false,

    Toolbar: {
        display: {
            left: [],
            middle: [],
            right: ['close'],
        },
    },

    Carousel: {
        transition: 'fadeFast',
        preload: 3,
    },

    Images: {
        zoom: false,
        Panzoom: {
            panMode: 'mousemove',
            mouseMoveFactor: 1.1,
        },
    },
});
