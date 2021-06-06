// owl carousel
var product = [
  {
    link: "./product/headphone.html",
    img: "./Image/1.jpg",
    tagSale: "-36%",
    tagCategory: "Tai nghe",
    name: "Tai Nghe Samsung",
    priceSale: "$100",
    price: "65.32",
  },
  {
    link: "",
    img: "./Image/2.jpg",
    tagSale: "-7%",
    tagCategory: "Đồng hồ",
    name: "Samsung Galaxy Watch",
    priceSale: "$100",
    price: "92.3",
  },
  {
    link: "",
    img: "./Image/3.jpg",
    tagSale: "-42%",
    tagCategory: "Điện thoại",
    name: "Oppo A5",
    priceSale: "$232.2",
    price: "141.2",
  },
  {
    link: "",
    img: "./Image/4.jpg",
    tagSale: "-15%",
    tagCategory: "Máy tính",
    name: "Máy tính HP",
    priceSale: "",
    price: "500.5",
  },
  {
    link: "",
    img: "./Image/5.jpg",
    tagSale: "-14%",
    tagCategory: "Máy tính",
    name: "Máy Tính ASUS",
    priceSale: "$630",
    price: "600.5",
  },
  {
    link: "",
    img: "./Image/6.jpg",
    tagSale: "-22%",
    tagCategory: "Máy tính",
    name: "Macbook Air 2020",
    priceSale: "$400.9",
    price: "300.9",
  },
  {
    link: "",
    img: "./Image/7.jpg",
    tagSale: "-18%",
    tagCategory: "-43%",
    name: "Điện thoại",
    priceSale: "$200.2",
    price: "180.2",
  },
  {
    link: "",
    img: "./Image/8.jpg",
    tagSale: "-36%",
    tagCategory: "Điện thoại",
    name: "Điện thoại Xiaomi",
    priceSale: "$190.4",
    price: "100.8",
  },
];
render = () => {
  var htmls = product.map((product, index) => {
    return `
    <div class="col-lg-3 col-6 product-item" data-aos="fade-right" data-aos-duration="1500">
        <div class="p-3">
            <a href="${product.link}" class="item-img">
                <img src="${product.img}" alt="" class="img">
                <span class="tag">${product.tagSale}</span>
                <button class="btn"><i class="fas fa-heart"></i></button>
                <span class="quick-view">Quick View</span>
            </a>
            <div class="item-caption">
                <div class="caption-title">
                    <span>${product.tagCategory}</span>
                    <h5 class="name-product">${product.name}</h5>
                    <div class="price">
                        <s>${product.priceSale}</s><span class="icon-dollar">$<b class="price-product">${product.price}</b></span>
                    </div>
                </div>
                <button class="btn caption-btn">
                    Thêm vào giỏ hàng
                </button>
            </div>
        </div>
    </div>
        `;
  });
  $("#product-items").append(htmls);
};
render(product);

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
