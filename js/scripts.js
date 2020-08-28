//Business Logic

//Pizza Logic
function Pizza(size, firstTopping, secondTopping, thirdTopping) {
  this.size = size,
  this.firstTopping = firstTopping,
  this.secondTopping = secondTopping,
  this.thirdTopping = thirdTopping
}

//Calculating Price Method
Pizza.prototype.priceOfPizza = function(){
  if (pizza.size ==='10"') {
      $(".pizzaOrder").append("Total for your order is $12")
  } else if (pizza.size === '14"') {
      $(".pizzaOrder").append("Total for your order is $16")
  } else {
    $(".pizzaOrder").append("Total for your order is $20")
  }
}



//Ordered Pizza Method
function orderedPizza(pizza) {
$(".pizzaOrder").append(pizza.size + pizza.firstTopping + pizza.secondTopping + pizza.thirdTopping)
}



const pizza = new Pizza();  
//User Interface Logic
$(document).ready(function() {
  $("form#selectPizza").submit(function(event){
  event.preventDefault();

    $(".pizzaOrder").show();
    const pizzaSize = $("#selectSize").val();
    $(".pizzaOrder").append(pizzaSize + "<br>")
    $("input:checkbox[name=toppings]:checked").each(function(){
      const pizzaToppings = $(this).val();
  });

  });

});