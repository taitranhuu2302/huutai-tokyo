let product = [
  {
    addressLink: "./AirpodPro.html",
    image1: "./Image/store1 (2).jpg",
    image2: "./Image/store1 (1).jpg",
    tagCategory: "Tai Nghe",
    name: "Airpod Pro",
    price: 500.32,
    salePrice: "$100",
  },
  {
    addressLink: "./AppleWatchSeries5.html",
    image1: "./Image/store2.jpg",
    image2: "./Image/2.jpg",
    name: "Apple Watch Series 5",
    tagCategory: "Đồng Hồ",
    price: 80.2,
    salePrice: "$123.22",
  },
  {
    addressLink: "./OPPO.html",
    image1: "./Image/store3 (1).jpg",
    image2: "./Image/store4 (1).jpg",
    name: "Điện Thoại Oppo",
    tagCategory: "Điện Thoại",
    price: 92.2,
    salePrice: "$150.2",
  },
  {
    addressLink: "./Vsmart.html",
    image1: "./Image/store4 (2).jpg",
    image2: "./Image/store4 (1).jpg",
    name: "Điện Thoại Vsmart",
    tagCategory: "Điện Thoại",
    price: 100.5,
    salePrice: "$156.2",
  },
  {
    addressLink: "./Xiaomi.html",
    image1: "./Image/xiaomi-mi-9-1-600x600.jpg",
    image2: "./Image/store5 (2).jpg",
    name: "Điện Thoại Xiaomi",
    tagCategory: "Điện Thoại",
    price: 200.5,
    salePrice: "$250.2",
  },
  {
    addressLink: "./Iphone6.html",
    image1: "./Image/7.jpg",
    image2: "./Image/store7.jpg",
    name: "Iphone 6",
    tagCategory: "Điện Thoại",
    price: 250.2,
    salePrice: "$350",
  },
  {
    addressLink: "./MacbookAir.html",
    image1: "./Image/store8 (1).jpg",
    image2: "./Image/store8 (2).jpg",
    name: "Macbook Air 2020",
    tagCategory: "Laptop",
    price: 900,
    salePrice: "$1200",
  },
  {
    addressLink: "./HP.html",
    image1: "./Image/0812_16-may-tinh-hp-core-i5-1.jpg",
    image2: "./Image/store9 (2).jpg",
    name: "Máy Tính HP",
    tagCategory: "Laptop",
    price: 800,
    salePrice: "$1000",
  },
  {
    addressLink: "./ASUS.html",
    image1: "./Image/store10 (1).jpg",
    image2: "./Image/store10 (2).jpg",
    name: "Máy tính ASUS",
    tagCategory: "Laptop",
    price: 950,
    salePrice: "$1500",
  },
  {
    addressLink: "./OPPOA5.html",
    image1: "./Image/3.jpg",
    image2: "./Image/store4 (2).jpg",
    name: "Oppo A5",
    tagCategory: "Điện Thoại",
    price: 423.32,
    salePrice: "$500",
  },
  {
    addressLink: "./GalaxyWatch.html",
    image1: "./Image/samsung-galaxy-watch-3-lte-45mm-thum-600x600.jpg",
    image2:
      "./Image/samsung-galaxy-watch-active-2-lte-44-mm-day-da-ava-600x600.jpg",
    name: "Samsung Galaxy Watch",
    tagCategory: "Đồng Hồ",
    price: 800.2,
    salePrice: "$1000.2",
  },
  {
    addressLink: "./TaiNgheBeats.html",
    image1: "./Image/tai-nghe-chup-tai-beats-studio3-mx422-mx432-600x600.jpg",
    image2: "./Image/2-600x600.jpg",
    name: "Tai Nghe Beats",
    tagCategory: "Tai Nghe",
    price: 321.32,
    salePrice: "$400.5",
  },
];

$(() => {
  if ($("#product-items").hasClass("smartphone")) {
    renderDetail("Điện Thoại");
  }
  if ($("#product-items").hasClass("headphone")) {
    renderDetail("Tai Nghe");
  }
  if ($("#product-items").hasClass("laptop")) {
    renderDetail("Laptop");
  }
  if ($("#product-items").hasClass("clock")) {
    renderDetail("Đồng Hồ");
  }
  $(".caption-btn").click(addToCartClicked);
});
renderDetail = (tag) => {
  var index = 0;
  var render = product.map((product) => {
    if (product.tagCategory === tag && index < 4) {
      index++;
      return `
      <div class="col-lg-3 col-md-6 col-sm-6 col-6 product-item" data-aos="fade-down" data-aos-duration="1000">
          <a href="${product.addressLink}" class="item-img">
              <div class="item-bg">
                  <img src="${product.image1}" alt="" class="img img-1">
                  <img src="${product.image2}" alt="" class="img img-2">
              </div>
              <span class="tag">-36%</span>
              <button class="btn"><i class="fas fa-heart"></i></button>
              <span class="quick-view">Quick View</span>
          </a>
          <div class="item-caption bg-white">
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
      `;
    }
  });
  $("#product-items").append(render);
};

$(".list-img").owlCarousel({
  items: 1,
  dots: false,
  nav: true,
  URLhashListener: true,
  startPosition: "URLHash",
});
$(".rate-icons .icon").click(function () {
  $(".rate-icons .icon").removeClass("active-icon");
  $(this).addClass("active-icon");
});
$(() => {
  var btnProduct = document.getElementsByClassName("btn-detail")[0];
  btnProduct.addEventListener("click", addToCartDetail);
});
$(() => {
  listComment = localStorage.getItem("listComment")
    ? JSON.parse(localStorage.getItem("listComment"))
    : [];
  $(".btn-comment").click(() => {
    var nameCustomer = $(".info-name").val();
    var comment = $("#comment").val();
    if (nameCustomer == "") {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Bạn chưa nhập tên",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    if (comment == "") {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Bạn chưa nhập lời nhận xét !",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    var icons = document.getElementsByClassName("rate-icons")[0];
    var star = icons.getElementsByClassName("icon");
    var cpStar;
    var check = false;
    for (var i = 0; i < star.length; i++) {
      if (star[i].classList.contains("active-icon")) {
        cpStar = star[i].innerHTML;
        check = true;
      }
    }
    if (check === false) {
      cpStar = "";
    }
    var renderHTML = `
      <div class="rate-comment-item mb-4 d-flex">
        <div class="avatar me-3">
          <i class="fas fa-user-circle"></i>
        </div>
        <div div class="rate-comment-item-content">
          <div id="rate-comment-name" class="fw-bold">${nameCustomer}</div>
          <div class="icon">${cpStar}</div>
          <div class="content">
              ${comment}
          </div>
        </div>
      </div>
    `;
    $(".rate-comment").append(renderHTML);
    checkComment();
    listComment.push({
      nameRender: nameCustomer,
      starRender: cpStar,
      commentRender: comment,
    });
    localStorage.setItem("listComment", JSON.stringify(listComment));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Cảm ơn lời nhận xét của bạn !",
      showConfirmButton: false,
      timer: 1500,
    });
  });
});
$(() => {
  var htmls = listComment.map((listComment, index) => {
    return `
    <div class="rate-comment-item mb-4 d-flex">
    <div class="avatar me-3">
      <i class="fas fa-user-circle"></i>
    </div>
    <div div class="rate-comment-item-content">
      <div id="rate-comment-name" class="fw-bold">${listComment.nameRender}</div>
      <div class="icon">${listComment.starRender}</div>
      <div class="content">
          ${listComment.commentRender}
      </div>
    </div>
  </div>
    `;
  });
  $(".rate-comment").append(htmls);
  checkComment();
});
checkComment = () => {
  var comment = $(".rate-comment-item").length;
  if (comment !== 0) {
    $(".comment-default").addClass("d-none");
  } else {
    $(".comment-default").removeClass("d-none");
  }
};
checkComment();
