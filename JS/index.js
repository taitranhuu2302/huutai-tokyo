// owl carousel
$(".portfolio-items").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
      nav: true,
    },
    1000: {
      items: 4,
      loop: false,
      nav: false,
      mouseDrag: false,
    },
  },
});
$(".portfolio-customer-items").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
      nav: true,
      stagePadding: 50,
    },
    600: {
      items: 2,
      nav: true,
    },
    1000: {
      items: 3,
      loop: false,
      nav: false,
      mouseDrag: false,
    },
  },
});
$(".experience-slides").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1.5,
      nav: true,
    },
    700: {
      items: 2,
      nav: true,
    },
    1000: {
      items: 3,
      nav: true,
    },
    1200: {
      items: 3,
      stagePadding: 100,
      nav: true,
    },
  },
});

function scrollIntroView() {
  var bannerProduct = document.getElementById("banner-product");
  var button = document.getElementById("down-scroll");
  button.addEventListener("click", () => {
    bannerProduct.scrollIntoView();
  });
}
scrollIntroView();
