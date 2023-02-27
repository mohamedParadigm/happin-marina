$(function () {
  ("use strict");
  // Passive Listeners
  (function ($) {
    $.event.special.touchstart = {
      setup: function (_, ns, handle) {
        this.addEventListener("touchstart", handle, {
          passive: !ns.includes("noPreventDefault"),
        });
      },
    };
    $.event.special.touchmove = {
      setup: function (_, ns, handle) {
        this.addEventListener("touchmove", handle, {
          passive: !ns.includes("noPreventDefault"),
        });
      },
    };
  })(jQuery);

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
          if (!bookFormWrapper.hasClass("fixed")) {
            bookFormWrapper.fadeOut(300, function () {
              $(this)
                .addClass("fixed")
                .slideDown(300, function () {
                  $(this).css("display", "flex");
                });
            });
          }
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
