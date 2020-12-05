var item_count=0;
var totItemCount = document.getElementById('item-count');
var totAmount = document.getElementById('total-amount');
var placeOrderButton = document.getElementById('btn-place-order');


var cardList = document.getElementById('card-list');

function generateCheckoutCards(cartItem) {

  // <div class="checkout-card">
  //   <div>
  //     <img class="checkout-product-img" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/6bfe80cd-2f55-42bc-aa7f-e0d6c9e2ac531525936414747-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-1.jpg">
  //   </div>
  //   <div>
  //     <h4>Women Blue Solid Shirt Dress</h4>
  //     <p>x1</p>
  //     <p> <span>Amount: Rs </span>
  //         <span>5200</span>
  //     </p>
  //   </div>
  // </div>

  var checkoutCard = document.createElement('div');
  checkoutCard.className = "checkout-card";

  var firstInnerDiv = document.createElement('div');

  var checkoutProductImg = document.createElement('img');
  checkoutProductImg.className = "checkout-product-img";
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



var cartCount = document.getElementById("cart-count");
var locData = localStorage.getItem("cartData");
if(locData !== null && locData.length > 0){
    var cart_data = JSON.parse(locData);
    var sumAmt = 0;
    for(var i=0; i<cart_data.length; i++){
        item_count += cart_data[i].count;
        sumAmt += cart_data[i].price * cart_data[i].count;
    }
    cartCount.innerText = item_count;
    totItemCount.innerHTML = cart_data.length;
    totAmount.innerHTML = "Rs. " + sumAmt;

    for(var j=0; j<cart_data.length; j++){
        generateCheckoutCards(cart_data[j]);
    }
}

placeOrderButton.onclick = function(){
    var locD = localStorage.getItem("cartData");
    if(locData !== null && locData.length > 0){
        var orderSuccess = new XMLHttpRequest();
        orderSuccess.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/order", true);
        orderSuccess.onreadystatechange = function(){
            if(this.readyState === 4){
                localStorage.clear();
                window.location.replace("./order.html");
            }
        }
        orderSuccess.send();
    }
    else{
        alert("No items in your cart. Please add ateast one item to place the order");
    }
}
