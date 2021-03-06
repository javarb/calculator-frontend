baseUrl ="http://localhost:8080/api/";

$("#fib_button").click(function(){
  fibUrl  = baseUrl + "fibonacci/" + $("#fib_number").val();
  $.get(fibUrl, function(data, status){
      if (data == "") {
        $("#fib_result").text("0");
      } else {
        $("#fib_result").html(`${data}`);       
      }
  })
});

$("#fact_button").click(function(){
  factUrl = baseUrl + "factorial/" +$("#fact_number").val();
  $.get(factUrl, function(data, status){
    if (data == "") {
      $("#fact_result").text("0");
    } else {
      $("#fact_result").html(`${data}`);
    }
  })
});

$("#arit_button").click(function(){
  aritUrl = baseUrl + "arithmetic?operation=" + $("#arit_operation").val() + "&n1=" + $("#arit_num1").val() + "&n2=" + $("#arit_num2").val();  
  $.get(aritUrl, function(data, status){
      $("#arit_result").html(`${data}`);
  })
});
