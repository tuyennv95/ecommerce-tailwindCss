console.log(555);

// Sidebar menu product
const slidebarProductItemParant = document.querySelectorAll(
  ".slidebar-product-item-parant"
);
const slidebarProductItem = document.querySelectorAll(".slidebar-product-item");

for (let i = 0; i < slidebarProductItemParant.length; i++) {
  slidebarProductItemParant[i].addEventListener("click", function () {
    const checkAc = this.nextElementSibling.classList.contains('active');
    console.log('🚀 ~ checkAc', checkAc);



    slidebarProductItem[i].classList.toggle('active')
    // this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active')
    
  });

}
