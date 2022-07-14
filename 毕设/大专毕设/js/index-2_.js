(function () {
  var down = $(".down"),
    on_ = $(".on_"),
    click_on = $(".on_>div"),
    wipe = 0;
  for (let i = 0; i < down.length; i++) {
    down[i].index = i;
    down[i].click = false;
    down[i].ul_height = on_[i].clientHeight;
    on_[i].style.height = "0";
    $(".down").click(function () {
      // 擦除样式
      on_[wipe].style.height = "0";
      if (this.click) {
        down[this.index].click = false;
      } else {
        on_[this.index].style.height = this.ul_height + "px";
        down[wipe].click = false;
        down[this.index].click = true;
        wipe = this.index;
      }
    });
  }
  // for (let i = 0; i < click_on.length; i++) {
  //   click_on[i].index = i;
  //   $(".on_>div").click(function () {
  //     $(".on_>div")[this.index].style.height = "0px";
  //     //
  //   });
  // }
  //   $(".down").click(function () {
  //     if (on == true) {
  //       $(".on_").css({ height: "120px" });
  //       on = false;
  //     } else {
  //       $(".on_").css({ height: "0" });
  //       on = true;
  //     }
  //   });
})();
