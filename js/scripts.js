//Business Logic

//Pizza Logic
function Pizza(size, toppings) {
  this.size = size,
  this.toppings = [toppings]
}

//Adding Toppings Method
Pizza.prototype.addingToppings = function (toppings) {
  this.toppings.push(toppings);
}

//Ordered Pizza Method
function orderedPizza(pizza) {
$(".pizzaOrder").append(pizzaSize + "<br>")
$(".pizzaOrder").append(pizzaToppings + "<br>")
q}



const pizza = new Pizza();  
//User Interface Logic
$(document).ready(function(event) {
  $("form#selectPizza").submmit(function(event){
  event.preventDefault();

    $(".pizzaOrder").show();
    const pizzaSize = $("#selectSize").val();
    $(".pizzaOrder").append(pizzaSize + "<br>")
    $("input:checkbox[name=toppings]:checked").each(function(){
      const pizzaToppings = $(this).val();
  });

  });

});