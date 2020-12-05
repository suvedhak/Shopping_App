var cardList = document.getElementById('card-list');

function generateCheckoutCards(cartItem) {

  var checkoutCard = document.createElement('div');
  checkoutCard.className = "checkout-card";

  var firstInnerDiv = document.createElement('div');

  var checkoutProductImg = document.createElement('img');
  checkoutProductImg.ClassName = "checkout-product-img";
  checkoutProductImg.src = cartItem.preview;

  var secondInnerDiv = document.createElement('div');

  var productName = document.createElement('h4');
  productName.innerHTML = cartItem.name;

  var productAmount = document.createElement('p');

  var productCount = document.createElement('p');
  productCount.innerHTML = 'x' + cartItem.count;

  var amountLabel = document.createElement('span');
  amountLabel.innerHTML = "Amount: Rs. ";

  var amountValue = document.createElement('span');
  amountValue.innerHTML = parseInt(cartItem.count) * parseInt(cartItem.price);

  checkoutCard.appendChild(firstInnerDiv);
  checkoutCard.appendChild(secondInnerDiv);
  firstInnerDiv.appendChild(checkoutProductImg);
  secondInnerDiv.appendChild(productName);
  secondInnerDiv.appendChild(productCount);
  secondInnerDiv.appendChild(productAmount);
  productAmount.appendChild(amountLabel);
  productAmount.appendChild(amountValue);

  cardList.appendChild(checkoutCard);

  return checkoutCard;
}

//
// var responseArr = [];
//
// function renderCardGrid() {
//   for (var i = 0; i < responseArr.length; i++) {
//      generateCheckoutCard(responseArr[i]);
//   }
// }
//
//
//
// var xhttp = new XMLHttpRequest();
// xhttp.open('GET',"https://test-hosting-8f9bf.web.app/checkout.html" + productId, true);
// xhttp.onreadystatechange = function() {
//   if (this.readyState === 4) {
//     responseArr = JSON.parse(this.responseText);
//     console.log(responseArr);
//     renderCardGrid();
//   }
// }
//
// xhttp.send();
