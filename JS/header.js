window.onscroll = () => {
  mySticky();
};
AOS.init();
var cart = document.getElementById("cart-dropdown");
var headerNav = document.getElementById("menu-mb");
var listItemsCart = document.getElementById("items");
var items = document.getElementById("product-items");
let productSearch;
$.ajax({
  url: "./db.json",
  success: (res) => {
    productSearch = res.product;
    search();
  },
});

// sticky header
mySticky = () => {
  const headerTop = document.getElementById("header-top");
  var sticky = headerTop.offsetTop || headerTop.offsetHeight;
  var headerSticky = document.getElementById("header-sticky");
  var headerMid = document.getElementById("wrapper-header-mid");
  var logo = document.getElementById("logo");
  if (window.pageYOffset >= sticky) {
    headerSticky.style.top = "0px";
    logo.style.width = "105px";
    logo.style.transition = "width .8s";
    headerMid.style.height = "70px";
  } else {
    headerSticky.style.top = "";
    logo.style.width = "151px";
    logo.style.transition = "width .8s";
    headerMid.style.height = "101px";
  }
};
// open close
const oc = {
  navClose: () => {
    var btnClose = document.getElementById("menu-close");
    btnClose.addEventListener("click", () => {
      headerNav.style.width = "0";
    });
  },
  navOpen: () => {
    var btnOpen = document.getElementById("btn-toggle-menu");
    btnOpen.addEventListener("click", () => {
      headerNav.style.width = "250px";
    });
  },

  cartRun: function () {
    this.navClose();
    this.navOpen();
  },
};
// oc.cartRun();

//add to shopping cart
// Udapte Price
uppdatePrice = function () {
  var item = document.getElementById("items");
  var items = document.querySelectorAll("#items .item");
  var totalPrice = document.querySelector(
    "#cart-dropdown .total-price .pay .pay-price"
  );
  var total = 0;
  items.forEach((e) => {
    var quantity = e.getElementsByClassName("quantity")[0].value;
    var price = e.getElementsByClassName("price")[0].innerHTML;
    var priceN = parseFloat(price);
    total += priceN * quantity;
  });
  totalPrice.innerText = "$" + total.toFixed(2);
};
uppdatePrice();
quantity = () => {
  $("#items .quantity").niceNumber();
  $(".nice-number button").click(() => {
    uppdatePrice();
  });
};
quantity();

// Delete Product
delProduct = function () {
  var btnClose = document.getElementsByClassName("close");
  for (let i = 0; i < btnClose.length; i++) {
    var button = btnClose[i];
    button.addEventListener("click", delClicked);
  }
};
delClicked = function () {
  var parent =
    this.parentElement.parentElement.parentElement.parentElement.parentElement
      .parentElement;
  console.log(parent.getElementsByClassName("title")[0].innerText);
  for (var i = 0; i < listCart.length; i++) {
    if (
      listCart[i].name === parent.getElementsByClassName("title")[0].innerText
    ) {
      listCart.splice(i, 1);
      localStorage.setItem("listCart", JSON.stringify(listCart));
    }
  }
  parent.remove();
  uppdatePrice();
  amountCart();
};
delProduct();

// Add to Cart Event btn
function addProduct() {
  var btnProduct = document.getElementsByClassName("caption-btn");
  for (var i = 0; i < btnProduct.length; i++) {
    var button = btnProduct[i];
    button.addEventListener("click", addToCartClicked);
  }
}
addProduct();
// Return value
function addToCartClicked(event) {
  var btn = event.target;
  var itemProduct = btn.parentElement.parentElement;
  var nameProduct =
    itemProduct.getElementsByClassName("name-product")[0].innerText;
  var priceProduct =
    itemProduct.getElementsByClassName("price-product")[0].innerText;
  var imgSrc = itemProduct.getElementsByClassName("img")[0].src;
  addItemToCart(nameProduct, priceProduct, imgSrc);
  quantity();
}
//Add detail product
addToCartDetail = (event) => {
  var button = event.target;
  var nameProduct =
    button.parentElement.parentElement.getElementsByClassName("name-product")[0]
      .innerText;
  var priceProduct =
    button.parentElement.parentElement.getElementsByClassName(
      "price-product"
    )[0].innerText;
  var imgSrc =
    button.parentElement.parentElement.parentElement.getElementsByClassName(
      "img"
    )[0].src;
  addItemToCart(nameProduct, priceProduct, imgSrc);
};
let listCart = localStorage.getItem("listCart")
  ? JSON.parse(localStorage.getItem("listCart"))
  : [];
// Add to Cart
function addItemToCart(name, price, imgSrc) {
  var items = document.getElementById("items");
  for (var i = 0; i < listCart.length; i++) {
    if (listCart[i].name == name) {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Sản phẩm đã tồn tại trong giỏ",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
  }
  var itemContent = `
  <li class="nav-item item row m-0 align-items-center">
    <div class="col-4 p-0">
        <a href="" class="d-block p-2">
            <img src="${imgSrc}" alt="" class="img-product img-fluid">
        </a>
    </div>
    <div class="col-8 caption">
        <div class="row">
            <div class="mb-4 col-12">
                <div class="row">
                    <div class="col title ">
                        ${name}
                    </div>
                    <div class="col text-end">
                        <button type="button" class=" close fs-5 btn btn-danger">REMOVE</button>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="row px-3">
                    <div class="col">$<span class="price">${price}</span>
                    </div>
                    <div class="col">
                        <div class="row">
                            <input type="number" class="quantity col" min="1" value="1">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </li>
  `;
  $("#items").append(itemContent);
  listCart.push({
    name: name,
    image: imgSrc,
    price: price,
  });
  localStorage.setItem("listCart", JSON.stringify(listCart));
  amountCart();
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Bạn đã thêm vào giỏ",
    showConfirmButton: false,
    timer: 1000,
  });
  delProduct();
  uppdatePrice();
}

$(() => {
  var htmls = listCart.map((listCart, index) => {
    return `
    <li class="nav-item item row m-0 align-items-center">
      <div class="col-4 p-0">
          <a href="" class="d-block p-2">
              <img src="${listCart.image}" alt="" class="img-product img-fluid">
          </a>
      </div>
      <div class="col-8 caption">
          <div class="row">
              <div class="mb-4 col-12">
                  <div class="row">
                      <div class="col title ">
                          ${listCart.name}
                      </div>
                      <div class="col text-end">
                          <button type="button" class=" close fs-5 btn btn-danger">REMOVE</button>
                      </div>
                  </div>
              </div>
              <div class="col-12">
                  <div class="row px-3">
                      <div class="col">$<span class="price">${listCart.price}</span>
                      </div>
                      <div class="col">
                          <div class="row">
                              <input type="number" class="quantity col" min="1" value="1">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </li>
    `;
  });
  $("#items").append(htmls);
  amountCart();
  delProduct();
  quantity();
  uppdatePrice();
});
amountCart = () => {
  var child = listItemsCart.getElementsByClassName("item");
  var tagCart = document.getElementsByClassName("tag-cart")[0];
  var amountChild = child.length;
  if (amountChild == 0) {
    tagCart.classList.add("d-none");
  } else {
    tagCart.classList.remove("d-none");
  }
  document.getElementById("tag-cart-amount").innerText = amountChild;
};
amountCart();

// check erorr
$(() => {
  // lấy dữ liệu từ localStorage ra
  let users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  $("#btn-regis").click(() => {
    var regis = document.getElementsByClassName("regis")[0];
    var mess = regis.getElementsByClassName("mess-erorr");
    var username = $("#username").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var cofiPassword = $("#Comfirm-password").val();
    var checkUser = false;
    var checkEmail = false;
    var checkPassword = false;
    var checkCofi = false;
    if (!username) {
      mess[0].innerHTML = "Tài khoản không được để trống";
    } else {
      mess[0].innerHTML = "";
      checkUser = true;
    }
    if (!email) {
      mess[1].innerHTML = "Email không được để trống";
    } else if (!email.includes("@gmail.com")) {
      mess[1].innerHTML = "Email chưa chính xác";
    } else {
      mess[1].innerHTML = "";
      checkEmail = true;
    }
    if (!password) {
      mess[2].innerHTML = "Mật khẩu không được để trống";
    } else if (password.length <= 6) {
      mess[2].innerHTML = "Mật khẩu phải nhiều hơn 6 ký tự";
    } else {
      mess[2].innerHTML = "";
      checkPassword = true;
    }
    if (!cofiPassword) {
      mess[3].innerHTML = "Chưa nhập lại mật khẩu";
    } else if (password !== cofiPassword || password.length <= 6) {
      mess[3].innerHTML = "Nhập lại mật khẩu không chính xác";
    } else {
      mess[3].innerHTML = "";
      checkCofi = true;
    }
    if (checkUser && checkEmail && checkPassword && checkCofi) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Đăng ký thành công!",
        showConfirmButton: false,
        timer: 1500,
      });
      // add vào localStorgae
      users.push({
        username: username,
        password: password,
      });
      localStorage.setItem("users", JSON.stringify(users));
    }
  });
  change = $(".changeLR").click(() => {
    var btnChange = $(".changeLR").text();
    if (btnChange === "Register") {
      $(".login").addClass("d-none");
      $(".regis").removeClass("d-none");
      $(".changeLR").text("Login");
    } else {
      $(".login").removeClass("d-none");
      $(".regis").addClass("d-none");
      $(".changeLR").text("Register");
    }
  });
  $("#btn-login").click(() => {
    var account = document.getElementById("username-login").value;
    var password = document.getElementById("password-login").value;
    var inputLogin = document.querySelector(".input.login");
    var mess = inputLogin.getElementsByClassName("mess-erorr")[0];
    for (var i = 0; i < users.length; i++) {
      if (account === users[i].username && password === users[i].password) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Đăng nhập thành công!",
          showConfirmButton: false,
          timer: 1000,
        });
        $(".header-mid-cart .login").removeClass("d-lg-block");
        $(".logged").removeClass("d-none");
        mess.innerText = "";
        return;
      }
    }
    mess.innerText = "Sai tài khoản hoặc mật khẩu";
  });
});

$(window).on("load", () => {
  $("#loader").delay(100).fadeOut("slow");
});

search = () => {
  var htmlsSearch = productSearch.map((product, index) => {
    return `
        <a href="${product.addressLink}" class="list-group-item tab-search-item d-none d-flex align-items-center justify-content-between list-group-item-action">
            <div>
                <img src="${product.image1}" class="img-fluid" alt="">
                <span class="item-search-name">${product.name}</span>
            </div>
            <div>
                <b>$${product.price}</b>
            </div>
        </a>
        `;
  });
  $(".tab-search").append(htmlsSearch);
  $("#my-search").keyup(() => {
    var key = document.getElementById("my-search").value.toUpperCase();
    var item = document.getElementsByClassName("tab-search-item");
    for (let i = 0; i < item.length; i++) {
      var item1 =
        item[i].getElementsByClassName("item-search-name")[0].innerText;
      if (item1.toUpperCase().indexOf(key) > -1) {
        item[i].classList.remove("d-none");
      } else {
        item[i].classList.add("d-none");
      }
    }
    if (!key || key == " ") {
      $(".tab-search-item").addClass("d-none");
    }
  });
};

$(() => {
  var listItem = document.getElementsByClassName("list-item");
  var a = document.getElementsByClassName("portfolio-item");
  for (const item1 of a) {
    item1.addEventListener("click", () => {
      var item2 = item1.getElementsByClassName("name-portfolio")[0].innerText;
      var itemUp = item2.toUpperCase();
      localStorage.setItem("switch", itemUp);
    });
  }
  for (const item of listItem) {
    item.addEventListener("click", (event) => {
      var thiss = event.target.innerText;
      var itemUp = thiss.toUpperCase();
      return localStorage.setItem("switch", itemUp);
    });
  }
  $("#search-mid").click(() => {
    var searchValue = $("#my-search").val();
    var valueUp = searchValue.toUpperCase();
    localStorage.setItem("switch", valueUp);
    window.open("./store.html");
  });
});
