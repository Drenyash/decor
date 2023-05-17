import {Carousel, Fancybox, Panzoom} from "@fancyapps/ui";

Fancybox.bind("[data-fancybox]", {
    showClass: false,
    groupAll: false,
    groupAttr: 'product',
    Thumbs: false,
    dragToClose: false,
});

const carouselIndex = document.querySelector(".carousel__index");
const carouselCount = document.querySelector(".carousel__count");

const carouselWrapper = document.querySelector("[data-carousel]");


if (carouselWrapper) {
    const myCarousel = new Carousel(carouselWrapper, {
        transition: 'classic',
        Dots: false,
        infinite: true,
        on: {
            initSlide: (_carousel, slide) => {
                slide.panzoom = new Panzoom(slide.el.querySelector('.f-panzoom'), {
                    panOnlyZoomed: true,
                    width: "auto",
                    height: "auto",
                });
            },
            refresh: (carousel) => {
                // Update counter
                if (carouselCount) {
                    carouselCount.innerHTML = carousel.pages.length;
                }
            },
            change: (carousel, to, from) => {
                // Update counter
                if (carouselIndex) {
                    carouselIndex.innerHTML = carousel.page + 1;
                }

                // Reset the Panzoom instance to its original scale and position
                carousel.slides[from]?.panzoom?.reset(0.15);
            },
        },
    });
}
