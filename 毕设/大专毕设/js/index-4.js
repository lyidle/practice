$(".cooperation").click(function () {
  window.location.href = "./index-4_3.html";
});
$(".reg").click(function () {
  window.location.href = "./index-4_1.html";
});

$(".reg_2").on("click", function () {
  sessionStorage.setItem("sreg", "sreg_2");
});
