$(function () {
  ("use strict");
  const lazyImages = $(".lazy");
  const backToTopBtn = $("#backToTop");
  const bookFormWrapper = $("#bookFormOffcanvas");

  // Trigger Lazy Load
  if (lazyImages.length !== 0) {
    new LazyLoad();
  }

  // Trigger Scroll To Top
  backToTopBtn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      300
    );
  });

  // Window Scroll
  $(window).on("scroll", function () {
    //===== 19. Sticky header
    let scroll = $(window).scrollTop();
    // if (scroll < 150) {
    //   $(".sticky-header").removeClass("sticky-active");
    // } else {
    //   $(".sticky-header").addClass("sticky-active");
    // }

    if (bookFormWrapper.length !== 0) {
      if ($(window).width() >= 992) {
        if (scroll > $(window).height() + bookFormWrapper.innerHeight()) {
          !bookFormWrapper.hasClass("fixed") &&
            bookFormWrapper.addClass("fixed");
        } else {
          bookFormWrapper.hasClass("fixed") &&
            bookFormWrapper.removeClass("fixed");
        }
      } else {
        bookFormWrapper.hasClass("fixed") &&
          bookFormWrapper.removeClass("fixed");
      }
    }
    //===== 20. Scroll Event on back to top
    backToTopBtn.length !== 0 && controlScrollToTopBtn(backToTopBtn, scroll);
  });
});

function controlScrollToTopBtn(el, scroll) {
  if (scroll > $(window).height()) {
    !el.hasClass("active-btn") && el.addClass("active-btn");
  } else {
    el.hasClass("active-btn") && el.removeClass("active-btn");
  }
}
