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
