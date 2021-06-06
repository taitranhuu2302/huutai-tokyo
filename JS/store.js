var product = [
  {
    addressLink: "./product/headphone.html",
    image1: "./Image/store1 (2).jpg",
    image2: "./Image/store1 (1).jpg",
    name: "Airpod Pro",
    price: 65.32,
    salePrice: "$100",
  },
  {
    addressLink: "",
    image1: "./Image/store2.jpg",
    image2: "./Image/2.jpg",
    name: "Apple Watch Series 5",
    price: 80.2,
    salePrice: "$123.22",
  },
  {
    addressLink: "",
    image1: "./Image/store3 (1).jpg",
    image2: "./Image/store4 (1).jpg",
    name: "Điện Thoại Oppo",
    price: 92.2,
    salePrice: "$150.2",
  },
  {
    addressLink: "",
    image1: "./Image/store4 (2).jpg",
    image2: "./Image/store4 (1).jpg",
    name: "Điện Thoại Vsmart",
    price: 100.5,
    salePrice: "$156.2",
  },
  {
    addressLink: "",
    image1: "./Image/store5 (1).jpg",
    image2: "./Image/store5 (2).jpg",
    name: "Điện Thoại Xiaomi",
    price: 200.5,
    salePrice: "$250.2",
  },
  {
    addressLink: "",
    image1: "./Image/7.jpg",
    image2: "./Image/store7.jpg",
    name: "Iphone 6",
    price: 250.2,
    salePrice: "$350",
  },
  {
    addressLink: "",
    image1: "./Image/store8 (1).jpg",
    image2: "./Image/store8 (2).jpg",
    name: "Macbook Air 2020",
    price: 120.2,
    salePrice: "$250",
  },
  {
    addressLink: "",
    image1: "./Image/store9 (1).jpg",
    image2: "./Image/store9 (2).jpg",
    name: "Máy Tính HP",
    price: 232.53,
    salePrice: "$323",
  },
  {
    addressLink: "",
    image1: "./Image/store10 (1).jpg",
    image2: "./Image/store10 (2).jpg",
    name: "Máy tính ASUS",
    price: 320.32,
    salePrice: "$400",
  },
  {
    addressLink: "",
    image1: "./Image/3.jpg",
    image2: "./Image/store4 (2).jpg",
    name: "Oppo A5",
    price: 423.32,
    salePrice: "$500",
  },
  {
    addressLink: "",
    image1: "./Image/2.jpg",
    image2: "./Image/store11.jpg",
    name: "Samsung Galaxy Watch",
    price: 120.32,
    salePrice: "$200.2",
  },
  {
    addressLink: "",
    image1: "./Image/store12 (1).jpg",
    image2: "./Image/store12 (2).jpg",
    name: "Tai Nghe Beats",
    price: 321.32,
    salePrice: "$400.5",
  },
];
const listDefault = product.slice();
render = (list) => {
  var htmls = list.map((list, index) => {
    return `
        <div class="col-lg-4 col-md-6 col-sm-6 col-6 product-item" data-aos="fade-right" data-aos-duration="2500">
            <div class="p-3">
                <a href="${list.addressLink}" class="item-img">
                    <div class="item-bg">
                        <img src="${list.image1}" alt="" class="img img-1">
                        <img src="${list.image2}" alt="" class="img img-2">
                    </div>
                    <span class="tag">-36%</span>
                    <button class="btn"><i class="fas fa-heart"></i></button>
                    <span class="quick-view">Quick View</span>
                </a>
                <div class="item-caption bg-white">
                    <div class="caption-title">
                        <span>Tai nghe</span>
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
render(product);
sortPriceDecrease = () => {
  var sort = product.sort((a, b) => {
    return b.price - a.price;
  });
  render(sort);
};
sortPriceAscending = () => {
  var sort = product.sort((a, b) => {
    return a.price - b.price;
  });
  render(sort);
};

document.getElementById("my-select").addEventListener("change", (event) => {
  var value = event.target.value;
  if (value == "select-1") {
    document.getElementById("product-items").innerHTML = "";
    render(listDefault);
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
  var valMin = $(".value-min").val();
  var valMax = $(".value-max").val();
  document.getElementById("product-items").innerHTML = "";
  var htmls = product.map((product, index) => {
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
