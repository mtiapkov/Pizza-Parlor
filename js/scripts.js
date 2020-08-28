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
      $(".pizzaOrder").append("Total for your order is $12" + "<br>")
  } else if (this.size === '14"') {
      $(".pizzaOrder").append("Total for your order is $16" + "<br>")
  } else {
    $(".pizzaOrder").append("Total for your order is $20" + "<br>")
  }
}

//Ordered Pizza Method
function orderedPizza() {
$(".pizzaOrder").append(this.size + this.firstTopping + this.secondTopping + this.thirdTopping)
}


//User Interface Logic
$(document).ready(function() {
  $("form#selectPizza").submit(function(event){
  event.preventDefault();
    $(".pizzaOrder").show();
    const size = $("#selectSize").val();
    const firstTopping = $("#firstTopping").val();
    const secondTopping = $("#secondTopping").val();
    const thirdTopping = $("#thirdTopping").val();
    const customerOrder = new Pizza(size, firstTopping, secondTopping, thirdTopping);
    orderedPizza(customerOrder);
    customerOrder.priceOfPizza()
    console.log(customerOrder)
  });

  });
