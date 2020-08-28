//Business Logic

//Pizza Logic
function Pizza(size, toppings) {
  this.size = size,
  this.toppings = [toppings]
}

//Adding Toppings Logic




//User Interface Logic
$(document).ready(function(event) {
  event.preventDefault();

  $(".pizzaOrder").show();
  const pizzaSize = $("#selectSize").val();
  $(".pizzaOrder").append(pizzaSize + "<br>")
  $("input:checkbox[name=toppings]:checked").each(function(){
    const pizzaToppings = $(this).val();
    $(".pizzaOrder").append(pizzaToppings + "<br>");
  })
})