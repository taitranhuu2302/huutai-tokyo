var item = document.getElementById("list-item");
var items = item.getElementsByClassName("item");
var index = parseInt($(".quantity").val());
listCartNew = [];
$(() => {
  $(".up").click(() => {
    $(".quantity").val(index++);
  });
  $(".down").click(() => {
    $(".quantity").val(index--);
  });
});
deleteProduct = () => {
  var button = document.getElementsByClassName("btn-remove");
  for (let i = 0; i < button.length; i++) {
    var btn = button[i];
    btn.addEventListener("click", clickedRemove);
  }
};
clickedRemove = (event) => {
  var btn = event.target;
  var parent = btn.parentElement.parentElement;
  for (let i = 0; i < listCart.length; i++) {
    if (
      listCart[i].name ===
      parent.getElementsByClassName("name-product")[0].innerText
    ) {
      listCart.splice(i, 1);
      localStorage.setItem("listCart", JSON.stringify(listCart));
    }
  }
  for (let i = 0; i < listCartNew.length; i++) {
    if (
      listCartNew[i].name ===
      parent.getElementsByClassName("name-product")[0].innerText
    ) {
      listCartNew.splice(i, 1);
    }
  }
  parent.remove();
  uppdatePrice();
};
deleteProduct();

uppdatePrice = () => {
  var totalAll = 0;
  for (let i = 0; i < items.length; i++) {
    var item1 = items[i];
    var priceFirst = parseFloat(
      item1.getElementsByClassName("price-first")[0].innerText
    );
    var quantity = parseFloat(
      item1.getElementsByClassName("quantity")[0].value
    );
    var total = quantity * priceFirst;
    var totalAll = totalAll + total;
    item1.getElementsByClassName("price")[0].innerText = total.toFixed(2);
  }
  document.getElementById("total-price").innerText = totalAll.toFixed(2);
};
uppdatePrice();
quantity = () => {
  var quantityInput = document.getElementsByClassName("quantity");
  for (var i = 0; i < quantityInput.length; i++) {
    var input = quantityInput[i];
    input.addEventListener("change", (event) => {
      var quantity = event.target;
      if (isNaN(quantity.value) || quantity.value <= 0) {
        quantity.value = 1;
      }
      uppdatePrice();
    });
  }
};
quantity();

autoRender = () => {
  var htmls = listCart.map((listCart, index) => {
    return `
      <tr class="item align-middle">
          <td scope="row" class="d-none d-md-table-cell">${index + 1}</td>
          <td class="img ">
              <img src="${listCart.image}" class="img-src img-fluid" alt="">
              
          </td>
          <td class="text-center">
            <span class="ms-3 name-product">${listCart.name}</span>
          </td>
          <td  class="d-none d-md-table-cell">
              $<span class="price-first">${listCart.price}</span>
          </td>
          <td class="text-center">
              <input type="number" class="quantity shadow-none" value="1">
          </td>
          <td class="d-none d-md-table-cell">
              $<span class="price"></span>
          </td>
          <td  class="d-none d-md-table-cell">
              <button class="btn btn-remove border btn-danger">
                  Remove
              </button>
          </td>
      </tr>
    `;
  });
  $("#list-item").append(htmls);
  deleteProduct();
  quantity();
};
autoRender();

$(() => {
  var renderItem = listCartNew.map((listCartNew, index) => {
    return `
    <div class="d-flex justify-content-between">
        <div>
            <span class="name-item">${listCartNew.name}</span> x <span class="quantity-item">${listCartNew.quantity}</span>
        </div>
        <div class="text-dark fw-bold">
            $<span>${listCartNew.total}</span>
        </div>
    </div>
    `;
  });
  $("#total-item").append(renderItem);
});
// CHANGE TABS
var listBreadcrumb = document.getElementsByClassName("breadcrumb-item");
$(() => {
  $("#btn-pay").click(() => {
    if (items.length === 0) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Chưa có gì trong giỏ",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    for (let i = 0; i < items.length; i++) {
      let name1 = items[i].getElementsByClassName("name-product")[0].innerText;
      let quantity1 = items[i].getElementsByClassName("quantity")[0].value;
      let total1 = items[i].getElementsByClassName("price")[0].innerText;

      listCartNew.push({
        name: name1,
        quantity: quantity1,
        total: total1,
      });
    }
    var renderItem = listCartNew.map((listCartNew, index) => {
      return `
        <div class="d-flex justify-content-between">
            <div>
                <span class="name-item">${listCartNew.name}</span> x <span class="quantity-item">${listCartNew.quantity}</span>
            </div>
            <div class="text-dark fw-bold">
                $<span>${listCartNew.total}</span>
            </div>
        </div>
        `;
    });
    $("#total-item").append(renderItem);
    $(".shopping-cart").addClass("d-none");
    $(".checkout-detail").removeClass("d-none");
    $(".breadcrumb-item").removeClass("active");
    listBreadcrumb[1].classList.add("active");

    $(".total-all").text($("#total-price").text());
  });
  listBreadcrumb[0].addEventListener("click", () => {
    $(".row-item").addClass("d-none");
    $(".breadcrumb-item").removeClass("active");
    listBreadcrumb[0].classList.add("active");
    $(".shopping-cart").removeClass("d-none");
  });
  listBreadcrumb[1].addEventListener("click", () => {
    if (items.length === 0) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Chưa có gì trong giỏ",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    $(".row-item").addClass("d-none");
    $(".checkout-detail").removeClass("d-none");
    $(".breadcrumb-item").removeClass("active");
    listBreadcrumb[1].classList.add("active");
  });
  listBreadcrumb[2].addEventListener("click", () => {
    if (items.length === 0) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Chưa có gì trong giỏ",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    $(".row-item").addClass("d-none");
    $(".order-compelete").removeClass("d-none");
    $(".breadcrumb-item").removeClass("active");
    listBreadcrumb[2].classList.add("active");
  });
});
// ORDER FINISH
let information = localStorage.getItem("information")
  ? JSON.parse(localStorage.getItem("information"))
  : [];
$(() => {
  $(".btn-order").click(() => {
    var fullname =
      document.getElementById("last-name").value +
      " " +
      document.getElementById("first-name").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("select").value;
    var email = document.getElementById("email1").value;
    var phone = document.getElementById("phone").value;
    var note = document.getElementById("note").value;
    var payments = $(".form-check-input:checked").val()
      ? $(".form-check-input:checked").val()
      : "Trả tiền mặt khi nhận hàng";
    if (!fullname || !address || !city || !email || !phone) {
      console.log(fullname, address, city, email, phone);
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Bạn chưa ghi đầy đủ thông tin",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    $(".name-customer").text(fullname);
    $(".address-customer").text(address);
    $(".email-customer").text(email);
    $(".city-customer").text(city);
    $(".phone-customer").text(phone);
    $(".note-customer").text(note);
    $(".payments-customer").text(payments);
    $(".breadcrumb-item").removeClass("active");
    listBreadcrumb[2].classList.add("active");
    $(".row-item").addClass("d-none");
    $(".order-compelete").removeClass("d-none");
    var renderHTML = listCartNew.map((listCartNew, index) => {
      return `
      <tr>
          <th scope="row">${index + 1}</th>
          <td>${listCartNew.name}</td>
          <td>${listCartNew.quantity}</td>
          <td>$${listCartNew.total}</td>
      </tr>
      `;
    });
    $("#total-list-item").append(renderHTML);
  });
  $(".btn-finish").click(() => {
    localStorage.removeItem("listCart");
    localStorage.removeItem("listCartNew");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Mua hàng thành công",
      showConfirmButton: false,
      timer: 1000,
    });
    setTimeout(() => {
      window.open("./index.html", "_self");
    }, 1000);
  });
});
