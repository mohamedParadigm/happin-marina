$(function () {
  ("use strict");

  // Variables
  const homeBannerSlider = $("#homeSliderBanner");
  const counterItems = $(".counter");
  const roomsSlider = $("#roomsSlider");
  const roomsPrevArrow = $("#roomsCustomArrows .rooms-btn-prev");
  const roomsNextArrow = $("#roomsCustomArrows .rooms-btn-next");
  const testimonialsSlider = $("#testimonialsSlider");
  const testimonialsPrevArrow = $(
    "#testimonialsCustomArrows .btn-testimonials-prev .btn"
  );
  const testimonialsNextArrow = $(
    "#testimonialsCustomArrows .btn-testimonials-next .btn"
  );

  const commonSliderProps = {
    items: 1,
    loop: true,
    smartSpeed: 1000,
    autoplay: true,
    autoplayHoverPause: true,
    rtl: document.querySelector("html").dir === "rtl",
    lazyLoad: true,
    onLoadLazy: function (e) {
      const elements = e.element;
      elements.each(function () {
        $(this).addClass("owl-lazy-loaded");
      });
    },
    navText: [
      `
        <i class='arrow_left flip-icon-rtl'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        </i>
      `,
      `
        <i class='arrow_right flip-icon-rtl'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </i>
      `,
    ],
  };

  // Trigger Home Banner Swiper
  if (homeBannerSlider.length !== 0) {
    homeBannerSlider.owlCarousel({
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      dots: false,
      nav: true,
      ...commonSliderProps,
    });
  }

  // Trigger Counter
  if (counterItems.length !== 0) {
    counterItems.each(function () {
      $(this).on("inview", function (event, isInView) {
        if (isInView) {
          $(this).countTo({
            from: 0,
            to: +$(this).text(),
            speed: 1000,
            refreshInterval: 50,
          });
        } else {
          $(this).off("inview");
        }
      });
    });
  }

  // Trigger Rooms Slider
  if (roomsSlider.length !== 0) {
    const owlRoomsSlider = roomsSlider.owlCarousel({
      margin: 20,
      dots: false,
      nav: false,
      responsive: {
        // breakpoint from => up
        576: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
      ...commonSliderProps,
      loop: false,
      autoplay: false,
    });

    $(".single_room_slider").owlCarousel({
      margin: 0,
      dots: false,
      nav: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      ...commonSliderProps,
      autoplay: false,
    });

    if (roomsPrevArrow.length !== 0 && roomsNextArrow.length !== 0) {
      roomsPrevArrow.on("click", function (e) {
        e.preventDefault();
        owlRoomsSlider.trigger("prev.owl.carousel", [1000]);
      });
      roomsNextArrow.on("click", function (e) {
        e.preventDefault();
        owlRoomsSlider.trigger("next.owl.carousel", [1000]);
      });
    }
  }

  // Trigger Testimonails Slider
  if (testimonialsSlider.length !== 0) {
    const owlTestimonialsSlider = testimonialsSlider.owlCarousel({
      margin: 0,
      dots: false,
      nav: false,
      responsive: {
        992: {
          items: 2,
        },
      },
      ...commonSliderProps,
    });

    if (
      testimonialsPrevArrow.length !== 0 &&
      testimonialsNextArrow.length !== 0
    ) {
      testimonialsPrevArrow.on("click", function (e) {
        e.preventDefault();
        owlTestimonialsSlider.trigger("prev.owl.carousel", [1000]);
      });
      testimonialsNextArrow.on("click", function (e) {
        e.preventDefault();
        owlTestimonialsSlider.trigger("next.owl.carousel", [1000]);
      });
    }
  }
});
