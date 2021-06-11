let product= [];
$.ajax({
  url: './db.json',
  success: (res) => {
    product = res.product;
    renderDefault();
  }
})
renderDefault = () => {
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
}

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
              <span class="tag">${product.tag}</span>
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
