$(function () {
  ("use strict");

  // Variables
  const homeBannerSlider = $("#homeSliderBanner");
  const counterItems = $(".counter");
  const roomsSlider = $("#roomsSlider");

  // Trigger Home Banner Swiper
  if (homeBannerSlider.length !== 0) {
    homeBannerSlider.owlCarousel({
      items: 1,
      loop: true,
      lazyLoad: true,
      // lazyLoadEager: 1,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      autoplay: true,
      autoplayHoverPause: true,
      rtl: document.querySelector("html").dir === "rtl",
      dots: false,
      nav: true,
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
    roomsSlider.owlCarousel({
      items: 1,
      margin: 20,
      loop: true,
      lazyLoad: true,
      lazyLoadEager: 1,
      autoplay: true,
      autoplayHoverPause: true,
      rtl: document.querySelector("html").dir === "rtl",
      dots: false,
      nav: false,
      onLoadLazy: function (e) {
        const elements = e.element;
        elements.each(function () {
          $(this).addClass("owl-lazy-loaded");
        });
      },
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
    });
  }
});
