let product = [];
$(".js-range-slider").ionRangeSlider({
  min: 0,
  max: 1000,
  from: 550,
});

$.ajax({
  url: "./db.json",
  success: (res) => {
    product = res.product;
    renderDefault();
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

renderDefault = () => {
  let switchs = localStorage.getItem("switch");
  switch (switchs) {
    case "ĐIỆN THOẠI":
      renderCategory("ĐIỆN THOẠI");
      localStorage.removeItem("switch");
      break;
    case "MÁY TÍNH":
      renderCategory("LAPTOP");
      localStorage.removeItem("switch");
      break;
    case "TAI NGHE":
      renderCategory("TAI NGHE");
      localStorage.removeItem("switch");
      break;
    case "ĐỒNG HỒ":
      renderCategory("ĐỒNG HỒ");
      localStorage.removeItem("switch");
      break;
    default:
      render(product);

      break;
  }
};
renderCategory = (tag) => {
  var htmls = product.map((product) => {
    if (product.tagCategory.toUpperCase() === tag) {
      return `
      <div class="col-lg-4 col-md-6 col-sm-6 col-6 product-item" data-aos="fade-right" data-aos-duration="2500">
          <div class="p-3">
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
                          <s>${product.salePrice}</s><span class="icon-dollar">$<b
                                  class="price-product">${product.price}</b></span>
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

render = (list) => {
  var htmls = list.map((list) => {
    return `
        <div class="col-lg-4 col-md-6 col-sm-6 col-6 product-item" data-aos="fade-right" data-aos-duration="2500">
            <div class="p-3">
                <a href="${list.addressLink}" class="item-img">
                    <div class="item-bg">
                        <img src="${list.image1}" alt="" class="img img-1">
                        <img src="${list.image2}" alt="" class="img img-2">
                    </div>
                    <span class="tag">${list.tag}</span>
                    <button class="btn"><i class="fas fa-heart"></i></button>
                    <span class="quick-view">Quick View</span>
                </a>
                <div class="item-caption bg-white">
                    <div class="caption-title">
                        <span>${list.tagCategory}</span>
                        <h5 class="name-product">${list.name}</h5>
                        <div class="price">
                            <s>${list.salePrice}</s><span class="icon-dollar">$<b
                                    class="price-product">${list.price}</b></span>
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
sortPriceDecrease = () => {
  var listSort = [...product];
  listSort.sort((a, b) => {
    return b.price - a.price;
  });
  render(listSort);
};
sortPriceAscending = () => {
  var listSort = [...product];
  listSort.sort((a, b) => {
    return a.price - b.price;
  });
  render(listSort);
};

document.getElementById("my-select").addEventListener("change", (event) => {
  var value = event.target.value;
  if (value == "select-1") {
    document.getElementById("product-items").innerHTML = "";
    render(product);
  }
  if (value == "select-5") {
    document.getElementById("product-items").innerHTML = "";
    sortPriceDecrease();
  }
  if (value == "select-6") {
    document.getElementById("product-items").innerHTML = "";
    sortPriceAscending();
  }
  addProduct();
});

onChange = () => {
  var input = document.getElementsByClassName("value");
  for (var i = 0; i < input.length; i++) {
    var inputChange = input[i];
    inputChange.addEventListener("change", (event) => {
      var inputCheck = event.target;
      if (isNaN(inputCheck.value) || inputCheck.value <= 0) {
        inputCheck.value = 0;
      } else if (inputCheck.value > 1000) {
        inputCheck.value = 1000;
      }
    });
  }
};
onChange();
$(".btn-filter").click(() => {
  var valMin = 0;
  var valMax = parseInt($(".irs-single").text());
  document.getElementById("product-items").innerHTML = "";
  var htmls = product.map((product) => {
    if (product.price > valMin && product.price < valMax) {
      return `
      <div class="col-lg-4 col-md-6 col-sm-6 col-6 product-item" data-aos="fade-right" data-aos-duration="2500">
          <div class="p-3">
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
                      <span>Tai nghe</span>
                      <h5 class="name-product">${product.name}</h5>
                      <div class="price">
                          <s>${product.salePrice}</s><span class="icon-dollar">$<b
                                  class="price-product">${product.price}</b></span>
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
  addProduct();
});
