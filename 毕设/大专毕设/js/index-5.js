$(".remove").click(function () {
  var remove = $(".input_color").val().length;
  var remove_2 = $(".remove_").val().length;
  var remove_3 = $(".remove__").val().length;
  if (remove > 0 || remove_2 > 0 || remove_3 > 0) {
    $(".input_color").val("");
    alert("已重置!");
  }
});
