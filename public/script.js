// Moda
const modaEl = document.querySelector("[modaConatier]");
const modaOverEl = document.querySelector("[moda-over]");
const buttonCloseBtn = document.querySelector("[buttonClose]");

function closeModa() {
  modaEl.classList.add("close");
}

modaOverEl.addEventListener("click", closeModa);
buttonCloseBtn.addEventListener("click", closeModa);

// Toataa
const products = [
  { path: "./public/images/products/1.jpg", name: "Giày hồng baby" },
  { path: "./public/images/products/2.jpg", name: "Ao nỉ xanh" },
  { path: "./public/images/products/3.jpg", name: "Ao thu đông" },
  { path: "./public/images/products/4.jpg", name: "Mũ rộng vàng thời trang" },
  { path: "./public/images/products/belt.jpg", name: "Thắt lưng thời trang" },
  { path: "./public/images/products/clothes-1.jpg", name: "Áo thu nữ" },
  { path: "./public/images/products/clothes-2.jpg", name: "Áo nữ cá tính" },
  { path: "./public/images/products/clothes-3.jpg", name: "Váy đen" },
  { path: "./public/images/products/clothes-4.jpg", name: "Váy đen xòe" },
  {
    path: "./public/images/products/jacket-1.jpg",
    name: "Áo khoác đông màu đất",
  },
  {
    path: "./public/images/products/jacket-2.jpg",
    name: "Áo khoác đông màu đen",
  },
  { path: "./public/images/products/jacket-3.jpg", name: "Áo sơ mi" },
  { path: "./public/images/products/jacket-4.jpg", name: "Áo sơ mi màu da bò" },
  { path: "./public/images/products/jacket-5.jpg", name: "Áo măng tô " },
  { path: "./public/images/products/jacket-6.jpg", name: "Áo măng tô Đại hàn" },
];
const phoneList = [098, 097, 096, 082, 085, 092, 083, 086, 099, 091];
function setToat() {
  const number = Math.floor(Math.random() * 15);
  const phoneNumber = Math.round(Math.random() * 10000);
  const randomFirstPhoneNumber = Math.floor(Math.random() * 10);
  const minutesRandom = Math.ceil(Math.random() * 58);
  const toatImgEl = document.querySelector("#toatImg");
  const nameProductEl = document.querySelector("#nameProduct");
  const phone = document.querySelector("#phone");
  const minutesElement = document.querySelector("#minutes");
  toatImgEl.src = products[number].path;
  nameProductEl.innerHTML = products[number].name;
  phone.innerHTML = `0${phoneList[randomFirstPhoneNumber]}${phoneNumber}xxx`;
  minutesElement.innerHTML = `${minutesRandom} Minutes ago`;
}
const notiToat = document.querySelector("#notiToat");
function hahaha() {
  setToat();
  notiToat.classList.add("aaaaaa");
  setTimeout(() => {
    notiToat.classList.remove("aaaaaa");
  }, 10000);
}
const myIntervalNoti = setInterval(hahaha, 15000);
const buttonCloseToat = document.querySelector("[buttonCloseToat]");
buttonCloseToat.addEventListener("click", () => {
  notiToat.style.display = "none";
  clearInterval(myIntervalNoti);
});

// Sidebar menu product
const slidebarProductItemParant = document.querySelectorAll(
  ".slidebar-product-item-parant"
);
const slidebarProductItem = document.querySelectorAll(".slidebar-product-item");

for (let i = 0; i < slidebarProductItemParant.length; i++) {
  slidebarProductItemParant[i].addEventListener("click", function () {
    const checkAc = this.nextElementSibling.classList.contains("active");
    for (let j = 0; j < slidebarProductItem.length; j++) {
      if (checkAc) break;
      if (slidebarProductItem[j].classList.contains("active")) {
        slidebarProductItemParant[j].classList.remove("active");
        slidebarProductItem[j].classList.remove("active");
      }
    }

    slidebarProductItem[i].classList.toggle("active");
    this.classList.toggle("active");
  });
}
