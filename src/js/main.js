import slider from "./modules/slider";
import sliderTwo from "./modules/sliderTwo";
import playVideo from "./modules/playVideo";
import dropdownMenu from "./modules/dropdownMenu";

window.addEventListener('DOMContentLoaded', () => {
    slider('.promo__slide', '.promo__slider-wrapper', '.promo__slider-inner', '.promo__slider-prev', '.promo__slider-next');
    sliderTwo('.exclusive-card', '.exclusive__slider-wrapper', '.exclusive__slider-inner', '.exclusive__slider-next');
    playVideo('.promo__slider-button', '.overlay', '.close');

    dropdownMenu();
});


