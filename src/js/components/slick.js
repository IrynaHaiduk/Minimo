import 'Plugins/slickPlugin';

// slick init
export default function initSlick() {

  jQuery('.img-slider__list').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow-right"></button>',
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  });
}


