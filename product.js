var productSection = document.getElementById('product-section');
var productId = window.location.search.split("=")[1];


function generateproductWrapper(productData) {

  var productWrapper = document.createElement('div');
   productWrapper.className = "product-wrapper";

  var productImage = document.createElement('div');
   productImage.id = "product-image";

   var productPreview = document.createElement('img');
   productPreview.className = "product-preview";
   productPreview.id = "product-preview-id";
   productPreview.src = productData.preview;
   var productPreviewId = document.getElementById('product-preview-id');

   var productDetails = document.createElement('div');
    productDetails.id = "product-details";

    var productTitle = document.createElement('h1');
    productTitle.id = "product-title";
    productTitle.innerHTML = productData.name;

    var productBrand = document.createElement('h1');
    productBrand.id = "product-brand";
    productBrand.innerHTML = productData.brand;

    var sectionHeading1 = document.createElement('h4');
    sectionHeading1.className = "section-heading";
    sectionHeading1.innerHTML = "Price: Rs ";

    var productPrice = document.createElement('h4');
    productPrice.id = "product-price";
    productPrice.innerHTML = productData.price;

    var sectionHeading2 = document.createElement('h4');
    sectionHeading2.className = "section-heading";
    sectionHeading2.innerHTML = "Description";

    var description = document.createElement('h4');
    description.id = "description";
    description.innerHTML = productData.description;

    var sectionHeading3 = document.createElement('h4');
    sectionHeading3.className = "section-heading";
    sectionHeading3.innerHTML = "Product Preview";

    var productImages = document.createElement('div');
    productImages.id = "product-images";

    var imgThumbnail = [];
    var itemLists = [];

    for (var i = 0; i < productData.photos.length; i++) {
      imgThumbnail[i] = document.createElement('img');
      imgThumbnail[i].id = "img" + i;
      imgThumbnail[i].src = productData.photos[i];
      productImages.appendChild(imgThumbnail[i]);

      itemLists[i] = document.getElementById('img' + i);
      itemLists[i].onclick = function () {
        productPreviewId.src = productData.photos[i];
      }
    //   document.getElementById('img' + i).addEventListener("onclick", function () {
    //   document.getElementById('product-preview-id').src = productData.photos[i];
    // });


    }

    var addToCartBtn = document.createElement('button');
    addToCartBtn.id = "btn-add-to-cart";
    addToCartBtn.innerHTML = "Add to cart";

    productWrapper.appendChild(productImage);
    productImage.appendChild(productPreview);
    productWrapper.appendChild(productDetails);
    productDetails.appendChild(productTitle);
    productDetails.appendChild(productBrand);
    productDetails.appendChild(sectionHeading1);
    sectionHeading1.appendChild(productPrice);
    productDetails.appendChild(sectionHeading2);
    productDetails.appendChild(description);
    productDetails.appendChild(sectionHeading3);
    productDetails.appendChild(productImages);
    productDetails.appendChild(addToCartBtn);
    productSection.appendChild(productWrapper);

    return productWrapper;
}


var responseObj = [];

var xhttp = new XMLHttpRequest();
xhttp.open('GET',"https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + productId, true);
xhttp.onreadystatechange = function() {
  if (this.readyState === 4) {
    responseObj = JSON.parse(this.responseText);
    console.log(responseObj);
    generateproductWrapper(responseObj);
    // imageloop(responseObj);
  }
}

xhttp.send();

// function imageloop(productData) {
//   console.log("called");
// for (var x = 0; x < productData.photos.length; x++) {
//   document.getElementById('img' + x).addEventListener("onclick", function () {
//     document.getElementById('product-preview-id').src = productData.photos[x];
//   })
// }
// return;
//
// }
