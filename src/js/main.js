import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import VideoPlayer from "./modules/playVideo"

window.addEventListener("DOMContentLoaded", () => {
    const slider = new MainSlider({
        btns: ".next",
        container: ".page"
    });
    slider.render();

    const showUpSlider = new MiniSlider({
      container: ".showup__content-slider",
      next: ".showup__next",
      prev: ".showup__prev",
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
      container: ".modules__content-slider",
      next: ".modules__info-btns .slick-next",
      prev: ".modules__info-btns .slick-prev",
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
      container: ".feed__slider",
      next: ".feed__slider .slick-next",
      prev: ".feed__slider .slick-prev",
    });
    feedSlider.init();

    const player = new VideoPlayer(".showup .play", ".overlay");
    player.init();
});