let product;
$.ajax({
  url: "../db.json",
  success: (res) => {
    product = res.product;
    render();
    addProduct();
  },
});
function addProduct() {
  var btnProduct = document.getElementsByClassName("caption-btn");
  for (var i = 0; i < btnProduct.length; i++) {
    var button = btnProduct[i];
    button.addEventListener("click", addToCartClicked);
  }
}

render = () => {
  var index = 0;
  var htmls = product.map((product, index) => {
    index++;
    if (index < 9) {
      return `
      <div class="col-lg-3 col-6 product-item" data-aos="fade-right" data-aos-duration="1500">
          <div class="p-3">
              <a href="${product.addressLink}" class="item-img">
                  <img src="${product.image1}" alt="" class="img">
                  <span class="tag">${product.tagSale}</span>
                  <button class="btn"><i class="fas fa-heart"></i></button>
                  <span class="quick-view">Quick View</span>
              </a>
              <div class="item-caption">
                  <div class="caption-title">
                      <span>${product.tagCategory}</span>
                      <h5 class="name-product">${product.name}</h5>
                      <div class="price">
                          <s>${product.salePrice}</s><span class="icon-dollar">$<b class="price-product">${product.price}</b></span>
                      </div>
                  </div>
                  <button class="btn caption-btn">
                      Thêm vào giỏ hàng
                  </button>
              </div>
          </div>
      </div>
          `;
    }
  });
  $("#product-items").append(htmls);
};
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
