function Pizza(size, cheese, topping) {
  this.size = size;
  this.cheese = cheese;
  this.topping = topping;
}

$(document).ready(function() {
  $("form#pizza-form").submit(function(event){
    event.preventDefault();
debugger;
    var inputSize = $("select#size").val();
    var inputCheese = $("select#cheese").val();
    var inputTopping = $("select#topping").val();


    var finalPizza = new Pizza(inputSize, inputCheese, inputTopping)


    $(".Pizza").last().click(function() {
      $(".size").select(finalPizza.title);
      $(".cheese").select(finalPizza.location);
      $(".topping").select(finalPizza.date);
    });

    alert(finalPizza);

    });
    $("select#size").val("");
    $("select#cheese").val("");
    $("select#topping").val("");


  });
