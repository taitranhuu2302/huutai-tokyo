let product = [
  {
    addressLink: "./product/AirpodPro.html",
    image1: "./Image/store1 (2).jpg",
    image2: "./Image/store1 (1).jpg",
    tagCategory: "Tai Nghe",
    name: "Airpod Pro",
    tagSale: "36%",
    price: 500.32,
    salePrice: "$100",
  },
  {
    addressLink: "./product/AppleWatchSeries5.html",
    image1: "./Image/store2.jpg",
    image2: "./Image/2.jpg",
    name: "Apple Watch Series 5",
    tagSale: "25%",
    tagCategory: "Đồng Hồ",
    price: 80.2,
    salePrice: "$123.22",
  },
  {
    addressLink: "./product/OPPO.html",
    image1: "./Image/store3 (1).jpg",
    image2: "./Image/store4 (1).jpg",
    name: "Điện Thoại Oppo",
    tagCategory: "Điện Thoại",
    tagSale: "15%",
    price: 92.2,
    salePrice: "$150.2",
  },
  {
    addressLink: "./product/Vsmart.html",
    image1: "./Image/store4 (2).jpg",
    image2: "./Image/store4 (1).jpg",
    name: "Điện Thoại Vsmart",
    tagCategory: "Điện Thoại",
    tagSale: "62%",
    price: 100.5,
    salePrice: "$156.2",
  },
  {
    addressLink: "./product/Xiaomi.html",
    image1: "./Image/xiaomi-mi-9-1-600x600.jpg",
    image2: "./Image/store5 (2).jpg",
    name: "Điện Thoại Xiaomi",
    tagCategory: "Điện Thoại",
    tagSale: "25%",
    price: 200.5,
    salePrice: "$250.2",
  },
  {
    addressLink: "./product/Iphone6.html",
    image1: "./Image/7.jpg",
    image2: "./Image/store7.jpg",
    name: "Iphone 6",
    tagCategory: "Điện Thoại",
    tagSale: "34%",
    price: 250.2,
    salePrice: "$350",
  },
  {
    addressLink: "./product/MacbookAir.html",
    image1: "./Image/store8 (1).jpg",
    image2: "./Image/store8 (2).jpg",
    name: "Macbook Air 2020",
    tagCategory: "Laptop",
    tagSale: "28%",
    price: 900,
    salePrice: "$1200",
  },
  {
    addressLink: "./product/HP.html",
    image1: "./Image/0812_16-may-tinh-hp-core-i5-1.jpg",
    image2: "./Image/store9 (2).jpg",
    name: "Máy Tính HP",
    tagCategory: "Laptop",
    tagSale: "35%",
    price: 800,
    salePrice: "$1000",
  },
  {
    addressLink: "./product/ASUS.html",
    image1: "./Image/store10 (1).jpg",
    image2: "./Image/store10 (2).jpg",
    name: "Máy tính ASUS",
    tagCategory: "Laptop",
    tagSale: "32%",
    price: 950,
    salePrice: "$1500",
  },
  {
    addressLink: "./product/OPPOA5.html",
    image1: "./Image/3.jpg",
    image2: "./Image/store4 (2).jpg",
    name: "Oppo A5",
    tagCategory: "Điện Thoại",
    tagSale: "25%",
    price: 423.32,
    salePrice: "$500",
  },
  {
    addressLink: "./product/GalaxyWatch.html",
    image1: "./Image/samsung-galaxy-watch-3-lte-45mm-thum-600x600.jpg",
    image2:
      "./Image/samsung-galaxy-watch-active-2-lte-44-mm-day-da-ava-600x600.jpg",
    name: "Samsung Galaxy Watch",
    tagCategory: "Đồng Hồ",
    tagSale: "10%",
    price: 800.2,
    salePrice: "$1000.2",
  },
  {
    addressLink: "./product/TaiNgheBeats.html",
    image1: "./Image/tai-nghe-chup-tai-beats-studio3-mx422-mx432-600x600.jpg",
    image2: "./Image/2-600x600.jpg",
    name: "Tai Nghe Beats",
    tagCategory: "Tai Nghe",
    tagSale: "16%",
    price: 321.32,
    salePrice: "$400.5",
  },
];

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
render(product);
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
