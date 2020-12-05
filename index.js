$(document).ready(function(){

$('.center').slick({
     centerMode: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
     dots: true,
     arrows: false,
     responsive: [
       {
         breakpoint: 768,
         settings: {
           arrows: false,
           centerMode: true,
           centerPadding: '40px',
           slidesToShow: 3
         }
       },
       {
         breakpoint: 480,
         settings: {
           arrows: false,
           centerMode: true,
           centerPadding: '40px',
           slidesToShow: 1
         }
       }
     ]
 });








var clothesGrid = document.getElementById('clothes-grid');
var accessoryGrid = document.getElementById('accessory-grid');


function generateProductCardClothing(productData) {

if (productData.isAccessory === false) {

var productCards = document.createElement('a');
productCards.className = "product-cards";
productCards.href = "./product.html?id=" + productData.id;

var productImage = document.createElement('img');
productImage.className = "product-img";
productImage.src = productData.preview;

var productDetails = document.createElement('div');
productDetails.className = "product-detail";

var productName = document.createElement('h4');
productName.innerHTML = productData.name;

var productBrand = document.createElement('h5');
productBrand.innerHTML = productData.brand;

var productPrice = document.createElement('p');
productPrice.innerHTML = 'Rs. ' + productData.price;

productCards.appendChild(productImage);
productCards.appendChild(productDetails);
productDetails.appendChild(productName);
productDetails.appendChild(productBrand);
productDetails.appendChild(productPrice);
clothesGrid.appendChild(productCards);

return productCards;

}

}

function generateProductCardAccessory(productData) {

if (productData.isAccessory === true) {

var productCards = document.createElement('a');
productCards.className = "product-cards";
productCards.href = "./product.html?id=" + productData.id;

var productImage = document.createElement('img');
productImage.className = "product-img";
productImage.src = productData.preview;

var productDetails = document.createElement('div');
productDetails.className = "product-detail";

var productName = document.createElement('h4');
productName.innerHTML = productData.name;

var productBrand = document.createElement('h5');
productBrand.innerHTML = productData.brand;

var productPrice = document.createElement('p');
productPrice.innerHTML = 'Rs. ' + productData.price;

productCards.appendChild(productImage);
productCards.appendChild(productDetails);
productDetails.appendChild(productName);
productDetails.appendChild(productBrand);
productDetails.appendChild(productPrice);
accessoryGrid.appendChild(productCards);

return productCards;

}

}


var responseArr = [];

function renderCardGridC() {
  for (var i = 0; i < responseArr.length; i++) {
     generateProductCardClothing(responseArr[i]);
  }
}

function renderCardGridA() {
  for (var i = 0; i < responseArr.length; i++) {
     generateProductCardAccessory(responseArr[i]);
  }
}

var http = new XMLHttpRequest();
http.open('GET',"https://5d76bf96515d1a0014085cf9.mockapi.io/product/", true);
http.onreadystatechange = function() {
  if (this.readyState === 4) {
    responseArr = JSON.parse(this.responseText);
    console.log(responseArr);
     renderCardGridC();
     renderCardGridA();
  }
}
http.send();


});
