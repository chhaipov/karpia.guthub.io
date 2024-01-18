jQuery(
  (function ($) {
    "use strict";
    $(document).ready(function () {
      $('a[href^="#"]').on('click', function (event) {
          event.preventDefault();

          let hash = this.hash;

          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function () {
              window.location.hash = hash;
          });
      });
  });
    jQuery(".mean-menu").meanmenu({ meanScreenWidth: "1199" });
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 50) {
        $(".navbar-area").addClass("is-sticky");
        $(".fixed-top").addClass("non-fixed");
      } else {
        $(".navbar-area").removeClass("is-sticky");
        $(".fixed-top").removeClass("non-fixed");
      }
    });
    $("body").addClass("pre-loaded");
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 300) {
        $("#scrolltop").addClass("scrolltopactive");
      } else {
        $("#scrolltop").removeClass("scrolltopactive");
      }
    });
    $("#scrolltop").on("click", function () {
      $("html").animate({ scrollTop: 0 }, 2000);
      return false;
    });
    $(".header-carousel").owlCarousel({
      loop: true,
      items: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      autoplayHoverPause: true,
      smartSpeed: 1500,
      nav: false,
      dots: true,
    });
    $(".feature-card-items").owlCarousel({
      loop: true,
      items: 4,
      autoplay: true,
      autoplaySpeed: 3000,
      autoplayHoverPause: true,
      smartSpeed: 1500,
      nav: false,
      dots: false,
      responsive: {
        0: { items: 1 },
        476: { items: 2 },
        768: { items: 3 },
        1025: { items: 4 },
      },
    });
    $(".play").on("click", function () {
      owl.trigger("play.owl.autoplay", [1000]);
    });
    $(".stop").on("click", function () {
      owl.trigger("stop.owl.autoplay");
    });

    $(".partner-carousel").owlCarousel({
      loop: true,
      items: 5,
      autoplay: true,
      autoplaySpeed: 4000,
      autoplayHoverPause: true,
      smartSpeed: 3000,
      nav: false,
      dots: false,
      responsive: {
        0: { items: 1 },
        476: { items: 2 },
        768: { items: 3 },
        1025: { items: 5 },
      },
    });
    $(".testimonial-carousel").owlCarousel({
      loop: true,
      items: 1,
      smartSpeed: 1500,
      margin: 30,
      dots: false,
      nav: true,
      navText: [
        '<i class="flaticon-left-chevron"></i>',
        '<i class="flaticon-right-chevron"></i>',
      ],
    });
    var testOwl2 = $(".testimonial-carousel-2");
    testOwl2.owlCarousel({
      loop: true,
      items: 3,
      smartSpeed: 1500,
      margin: 30,
      dots: false,
      nav: false,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 } },
    });
    $(".testimonial-carousel-2-controller .carousel-prev-arrow").on(
      "click",
      function () {
        testOwl2.trigger("prev.owl.carousel", [300]);
      }
    );
    $(".testimonial-carousel-2-controller .carousel-next-arrow").on(
      "click",
      function () {
        testOwl2.trigger("next.owl.carousel");
      }
    );
    var windowTab = $(window).width();
    if (windowTab < 992) {
      $(".testimonial-carousel-2-controller").appendTo(
        ".testimonial-carousel-2"
      );
    }
    var relCarousel = $(".related-carousel");
    relCarousel.owlCarousel({
      loop: true,
      items: 3,
      smartSpeed: 1500,
      margin: 30,
      dots: false,
      nav: false,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 } },
    });
    $(".related-carousel-controller .carousel-prev-arrow").on(
      "click",
      function () {
        relCarousel.trigger("prev.owl.carousel", [300]);
      }
    );
    $(".related-carousel-controller .carousel-next-arrow").on(
      "click",
      function () {
        relCarousel.trigger("next.owl.carousel");
      }
    );
    var windowTab = $(window).width();
    if (windowTab < 992) {
      $(".related-carousel-controller").appendTo(".related-carousel");
    }
    $(".feature-list li").on("click", function () {
      var self_tab = $(this).attr("data-filter-tab");
      $(this).addClass("active").siblings().removeClass("active");
      $(".feature-tab-details-item[data-feature-tab-details= " + self_tab + "]")
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
    $(".service-filter-list li").on("click", function () {
      var self_tab = $(this).attr("data-service-list");
      $(this).addClass("active").siblings().removeClass("active");
      $(
        ".service-filter-details-item[data-service-filter-details= " +
          self_tab +
          "]"
      )
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
    $(".billing-title p").on("click", function () {
      $(".billing-address").addClass("none");
      $(".billing-address-input").addClass("active");
    });
    $("#video-popup").magnificPopup({
      disableOn: 0,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
    // $(".product-sort").niceSelect();
    var productSync1 = $(".product-slider-for");
    var productSync2 = $(".product-slider-nav");
    var flag = false;
    productSync1
      .owlCarousel({
        items: 1,
        smartSpeed: 1500,
        nav: false,
        dots: false,
        responsiveRefreshRate: 200,
      })
      .on("changed.owl.carousel", function (e) {
        if (!flag) {
          flag = true;
          productSync2
            .find(".owl-item")
            .removeClass("synced")
            .eq(e.item.index)
            .addClass("synced");
          if (
            productSync2.find(".owl-item").eq(e.item.index).hasClass("active")
          ) {
          } else {
            productSync2.trigger("to.owl.carousel", [e.item.index, true]);
          }
          flag = false;
        }
      });
    productSync2
      .on("initialized.owl.carousel", function () {
        productSync2.find(".owl-item").eq(0).addClass("synced");
      })
      .owlCarousel({
        margin: 30,
        nav: false,
        dots: false,
        responsiveRefreshRate: 100,
        responsive: { 0: { items: 2 }, 992: { items: 3 } },
      })
      .on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        productSync1.trigger("to.owl.carousel", number);
      });
    $(".product-tab-list li").on("click", function () {
      var tab_modal = $(this).attr("data-product-tab");
      $(this).addClass("active").siblings().removeClass("active");
      $(
        ".product-tab-information-item[data-product-details-tab=" +
          tab_modal +
          "]"
      )
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
    $(".qu-btn").on("click", function (e) {
      var btn = $(this),
        inp = btn.siblings(".qu-input").val();
      if (btn.hasClass("inc")) {
        var i = parseFloat(inp) + 1;
      } else {
        if (inp > 1)
          (i = parseFloat(inp) - 1) < 2 && $(".dec").addClass("deact");
        else i = 1;
      }
      btn.addClass("deact").siblings("input").val(i);
    });
    $(".gallery-grid").magnificPopup({
      delegate: "a",
      type: "image",
      tLoading: "Loading image #%curr%...",
      mainClass: "mfp-img-mobile",
      gallery: { enabled: true, navigateByImgClick: true, preload: [0, 1] },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      },
    });
    var $grid = $(".product-tab-gallery").isotope({
      itemSelector: ".element-item",
      layoutMode: "fitRows",
    });
    $(".project-selection-tab").on("click", "li", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });
    $(".project-selection-tab li").on("click", function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
    $(".search-option").on("click", function (e) {
      e.preventDefault();
      $(".search-overlay")
        .addClass("search-overlay-show")
        .removeClass("search-overlay-none");
      $(".search-overlay .form-control").focus();
    });
    $(".search-close").on("click", function () {
      $(".search-overlay")
        .removeClass("search-overlay-show")
        .addClass("search-overlay-none");
      $(".search-overlay .form-control").blur();
    });
    $(".side-topbar-option").on("click", function () {
      $(".side-modal-wrapper").addClass("side-modal-wrapper-show");
      $(".side-modal").addClass("side-modal-show");
    });
    $(".side-modal-close").on("click", function () {
      $(".side-modal-wrapper").removeClass("side-modal-wrapper-show");
      $(".side-modal").removeClass("side-modal-show");
    });
    
  })(jQuery)
);

