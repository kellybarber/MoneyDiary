// setup shortcut links for add income/expense
$("#trigger-add-income").click(function() {
  $("#adder").show();
  $('#trigger-add-income').addClass('active');
  $('#trigger-add-expense').removeClass('active');
  $("#category-income").show();
  $("#category-expenses").hide();
  return false;
});
$("#trigger-add-expense").click(function() {
  $("#adder").show();
  $("#adder-transfer").hide();
  $('#trigger-add-income').removeClass('active');
  $('#trigger-add-expense').addClass('active');
  $("#category-income").hide();
  $("#category-expenses").show();
  return false;
});

$("#adder-close").click(function() {
  $("#adder").hide();
  $('#trigger-add-income').removeClass('active');
  $('#trigger-add-expense').removeClass('active');
  return false;
});