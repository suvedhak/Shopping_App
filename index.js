var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("carosel-pic");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// Carosel JS Ends



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
productPrice.innerHTML = productData.price;

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
productPrice.innerHTML = productData.price;

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
