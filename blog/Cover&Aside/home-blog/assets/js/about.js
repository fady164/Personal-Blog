/*
  Layout
 */

  const swiper = new Swiper('#brands .swiper', {
    slidesPerView: 2,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 5,
      }
    }
  });
  