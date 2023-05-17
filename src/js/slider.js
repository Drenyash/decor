import intro from "./Slider/config/intro";
import products from "./Slider/config/products";
import textures from "./Slider/config/textures";
import blog from "./Slider/config/blog";
import catalog from "./Slider/config/catalog";
import companys from "./Slider/config/companys";
import reviews from "./Slider/config/reviews";
import blogSlider from "./Slider/config/blogSlider";

export default function (el) {
    const name = el.getAttribute('data-slider');
    if (name === 'intro') return intro(el);
    if (name === 'products') return products(el);
    if (name === 'textures') return textures(el);
    if (name === 'blog') return blog(el);
    if (name === 'catalog') return catalog(el);
    if (name === 'companys') return companys(el);
    if (name === 'reviews') return reviews(el);
    if (name === 'blog-full') return blogSlider(el);

    console.error('Конфигурационный файл для слайдера не найден');
}
