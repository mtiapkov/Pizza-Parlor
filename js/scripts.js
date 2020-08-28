//Business Logic

//Pizza Constructor Logic
function Pizza(size, firstTopping, secondTopping, thirdTopping) {
  this.size = size,
  this.firstTopping = firstTopping,
  this.secondTopping = secondTopping,
  this.thirdTopping = thirdTopping
}

//Calculating Price Method
Pizza.prototype.priceOfPizza = function(){
  if (this.size ==='10"') {
    $(".pizzaOrder").append("Thank you for eating at Tip's Pizza Place, your order total is $12." + "<br>")
  } else if (this.size === '14"') {
    $(".pizzaOrder").append("Thank you for eating at Tip's Pizza Place, your order total is $16." + "<br>")
  } else if (this.size === '18"') {
    $(".pizzaOrder").append("Thank you for eating at Tip's Pizza Place, your order total is $18." + "<br>")
  } else {
    $(".pizzaOrder").append("Please select your pie size")
  }
}

//Ordered Pizza Method
function orderedPizza(customerOrder) {
  for (let values of Object.values(customerOrder)) {
    $(".pizzaOrder").append(`${values}<br>`);
  }
}


//User Interface Logic
$(document).ready(function() {
  $("form#selectPizza").submit(function(event){
  event.preventDefault();
    $(".pizzaOrder").show();
    $("#selectPizza").hide();
    const size = $("#selectSize").val();
    const firstTopping = $("#oneTopping").val();
    const secondTopping = $("#twoTopping").val();
    const thirdTopping = $("#threeTopping").val();
    const customerOrder = new Pizza(size, firstTopping, secondTopping, thirdTopping);
    orderedPizza(customerOrder);
    customerOrder.priceOfPizza()
    console.log(customerOrder)
  });

  });
