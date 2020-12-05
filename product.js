var productSection = document.getElementById('product-section');
var productId = window.location.search.split("=")[1];

var cartData;
var item_count=0;


var cartCount = document.getElementById("cart-count");
var locData = localStorage.getItem("cartData");
if(locData !== null && locData.length > 0){
    var cart_data = JSON.parse(locData);
    for(var i=0; i<cart_data.length; i++){
        item_count += cart_data[i].count;
    }
    cartCount.innerText = item_count;
}



function createProductImages(url, pos) {
  var image = document.createElement('img');
  image.src = url;
  if(pos === 0) {
    image.classList.add('active-image');
  }

  image.onclick = function() {
    var selectImg = document.querySelectorAll("#product-images > img");
    for (var i = 0; i < selectImg.length; i++) {
      selectImg[i].classList.remove('active-image');
    }
  image.classList.add("active-image");
  document.querySelector(".product-preview").src = url;

  }

  return image;
}


function generateproductWrapper(productData) {

  var productWrapper = document.createElement('div');
   productWrapper.className = "product-wrapper";

  var productImage = document.createElement('div');
   productImage.id = "product-image";

   var productPreview = document.createElement('img');
   productPreview.className = "product-preview";
   productPreview.src = productData.preview;

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
    sectionHeading1.innerHTML = "Price: ";

    var productPrice = document.createElement('h4');
    productPrice.id = "product-price";
    productPrice.innerHTML = "Rs. " + productData.price;

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

    // var imgThumbnail = [];
    // for (var i = 0; i < productData.photos.length; i++) {
    //   imgThumbnail[i] = document.createElement('img');
    //   imgThumbnail[i].src = productData.photos[i];
    //   productImages.appendChild(imgThumbnail[i]);
    // }
    console.log(productData.photos.length);
    for (var i = 0; i < productData.photos.length; i++) {
      productImages.append(createProductImages(productData.photos[i], i));
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


    document.getElementById('btn-add-to-cart').onclick = function() {
        var localData = localStorage.getItem("cartData");
        if(localData === null || localData === undefined || localData === " " || localData.length === 0){
            localData = [productData];
            localData[0].count = 1;
            localStorage.setItem("cartData", JSON.stringify(localData))
            item_count += 1;
            cartCount.innerText = item_count;
        }
        else{
            var local_data = JSON.parse(localData);
            idx = productData.id;
            if(local_data.some(local_data => local_data.id === productData.id)){
                var pos = local_data.map(function(x) {return x.id; }).indexOf(idx);
                local_data[pos].count = local_data[pos].count+1;
                local_data[pos].price = local_data[pos].price + local_data[pos].price;
                localStorage.setItem("cartData", JSON.stringify(local_data));
                item_count += 1;
                cartCount.innerText = item_count;
            }
            else{
                productData.count = 1;
                local_data.push(productData);
                localStorage.setItem("cartData", JSON.stringify(local_data));
                item_count += 1;
                cartCount.innerText = item_count;
            }
        }
    }

    return productWrapper;
}

var xhttp = new XMLHttpRequest();
xhttp.open('GET',"https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + productId, true);
xhttp.onreadystatechange = function() {
  if (this.readyState === 4) {
    responseObj = JSON.parse(this.responseText);
    console.log(responseObj);
    generateproductWrapper(responseObj);
  }
}

xhttp.send();
