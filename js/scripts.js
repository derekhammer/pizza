function Pizza(size, cheese, topping) {
  this.size = size;
  this.cheese = cheese;
  this.topping = topping;
}

var price = 0;

$(document).ready(function() {
  $("form#pizza-form").submit(function(event){
    event.preventDefault();

    var inputSize = $('input[name="sizes"]:checked').val();
    var inputCheese = $('input[name="cheese"]:checked').val();
    var inputTopping = $('input[name="topping"]:checked').val();



    var finalPizza = new Pizza(inputSize, inputCheese, inputTopping);



if (finalPizza.size === "small") {
    price = price + 5;
} else if (finalPizza.size === "medium") {
    price = price + 8;
} else if (finalPizza.size === "large") {
    price = price + 10;
} else if (finalPizza.size === "JUMBO") {
    price = price + 15;
} else {
  alert("no size selected");
  return;
}
//////////////
if (finalPizza.cheese === "cheddar") {
    price = price + 2;
} else if (finalPizza.cheese === "gouda") {
    price = price + 2;
} else if (finalPizza.cheese === "feta") {
    price = price + 3;
} else if (finalPizza.cheese === "mozzarella") {
    price = price + 2;
} else {
  alert("no cheese selected");
  return;
}
////////////////
if (finalPizza.topping === "pepperoni") {
    price = price + 1;
} else if (finalPizza.topping === "mushrooms") {
    price = price + 2;
} else if (finalPizza.topping === "onions") {
    price = price + 2;
} else if (finalPizza.topping === "sausage") {
    price = price + 3;
} else if (finalPizza.topping === "bacon") {
      price = price + 3;
} else {
  alert("no toppings selected");
  return;
}

    // $(".finalPizza").last().click(function() {
    //   $(".size").select(finalPizza.size);
    //   $(".cheese").select(finalPizza.cheese);
    //   $(".topping").select(finalPizza.topping);
    // });

    document.getElementById("test").innerHTML = "A " + finalPizza.size + " pizza with " + finalPizza.cheese + " cheese and " + finalPizza.topping + " on it!";
    document.getElementById("test2").innerHTML = "Total: $" + price + ".99";
price = 0;
    });


  });
