// 轮播
window.onload = function () {
  //   获取图片数量
  var len = $(".roll_img").length;
  // 图片初始位置索引
  var index = 0;
  //3秒轮播一次
  var timer = setInterval(play, 4000);
  // 自动轮播
  document.addEventListener("visibilitychange", function () {
    // 用户息屏、或者切到后台运行 （离开页面）
    if (document.visibilityState === "hidden") {
      clearInterval(timer);
    }
    // 用户打开或回到页面
    if (document.visibilityState === "visible") {
      timer = setInterval(play, 4000);
    }
  });
  function play() {
    index++;
    $(".images").animate(
      {
        // 轮播
        left: 100 * -index + "%",
      },
      2000,
      // 到最后一张和第一张一样的图替换为第一张图
      function () {
        if (index >= len - 1) {
          index = 0;
          $(".images").css({ left: "0", transition: "0s" });
        }
      }
    );
    $(".bottom_but")
      //   和索引一样同步
      .eq(index - 4)
      //给和索引一样同步按钮添加颜色
      .addClass("on")
      .siblings()
      // 移除滞留颜色
      .removeClass("on");
  }
  // 鼠标在元素上停止
  // mouseenter和mouseleave是鼠标穿过元素触发而hover是鼠标悬停触发mouseenter和mouseleave所以选择hover
  $(".roll").hover(
    function () {
      clearInterval(timer);
    },
    function () {
      timer = setInterval(play, 4000);
    }
  );

  // 左按钮
  $(".button-left").click(function () {
    // 在动画中不执行
    if ($(".images").is(":animated")) {
      return;
    }
    // 向右移动
    index--;

    if (index < 0) {
      // 索引切换为最后第二张图的索引
      index = len - 2;
      // 瞬移到最后一张图
      $(".images").animate(
        {
          // 轮播
          left: 100 * -(index + 1) + "%",
        },
        0
      );
    }
    // 继续轮播
    $(".images").animate(
      {
        left: 100 * -index + "%",
      },
      // 过渡
      2000
    );
    // 按钮
    $(".bottom_but")
      //   和索引一样同步
      .eq(index)
      //给和索引一样同步按钮添加颜色
      .addClass("on")
      .siblings()
      // 移除滞留颜色
      .removeClass("on");
  });

  // 右按钮
  $(".button-right").click(function () {
    // 在动画中不执行
    if ($(".images").is(":animated")) {
      return;
    }
    play();
  });
  // 底部按钮

  $(".bottom_but").click(function () {
    if ($(".images").is(":animated")) {
      return;
    }
    // 底部按钮
    index = $(this).index();
    $(".bottom_but")
      //   和索引一样同步
      .eq(index)
      //给和索引一样同步按钮添加颜色
      .addClass("on")
      .siblings()
      // 移除滞留颜色
      .removeClass("on");
    $(".images").animate(
      {
        // 轮播
        left: 100 * -index + "%",
      },
      // 过渡
      2000
    );
  });
};
