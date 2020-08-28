//Business Logic
function Pizz(size, toppings) {
  this.size = size,
  this.toppings = toppings;
}

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