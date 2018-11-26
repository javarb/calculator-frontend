baseUrl ="http://localhost:8080/api/";

// revisar fibonacci hay problemas
$("#fib_button").click(function(){
  fibUrl  = baseUrl + "fibonacci/" + $("#fib_number").val();;
  console.log(fibUrl);
  $.get(fibUrl, function(data, status){
      $("#fib_result").val(`${data}`);
  })
});

$("#fact_button").click(function(){
  factUrl = baseUrl + "factorial/" +$("#fact_number").val();
  console.log(factUrl);
  $.get(factUrl, function(data, status){
      $("#fact_result").val(`${data}`);
  })
});

$("#arit_button").click(function(){
  console.log();

  aritUrl = baseUrl + "arithmetic?operation=" + $("#arit_operation").val() + "&n1=" + $("#arit_num1").val() + "&n2=" + $("#arit_num2").val();
  console.log(aritUrl);
  $.get(aritUrl, function(data, status){
      $("#arit_result").val(`${data}`);
  })
});
