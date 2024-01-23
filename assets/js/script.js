jQuery(
    (function ($) {
        "use strict";
        $(document).ready(function () {
            $('a[href^="#"]').on("click", function (event) {
                event.preventDefault();

                let hash = this.hash;

                $("html, body").animate(
                    {
                        scrollTop: $(hash).offset().top,
                    },
                    800,
                    function () {
                        window.location.hash = hash;
                    }
                );
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
                400: { items: 1 },
                768: { items: 2 },
                992: { items: 2 },
                1024: { items: 3 },
                1200: { items: 3 },
                1400: { items: 4 },
                2048: { items: 4 },
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

        $("#video-popup").magnificPopup({
            disableOn: 0,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
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
