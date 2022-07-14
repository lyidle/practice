// jq插入相同元素
(function () {
  var img = $("img");
  img.on("contextmenu", function () {
    return false;
  });
  img.on("dragstart", function () {
    return false;
  });
  // 播放器
  $("title").after(
    "<link rel='icon' href='./images/网站logo.png' type='image/x-icon'>"
  );
  $(".max").after(
    "<div class='fixed'><div class='null_'></div> <div class='ply_'></div> </div>"
  );
  $(".ply_").append(
    "<audio class='ply'></audio><img src='./images/上.png' alt='' class='pre'>"
  );
  $(".ply_").append(
    "<img src='./images/24gf-playCircle.png' alt='' class='play'><img src='./images/下.png' alt='' class='next'><div class='return_'></div>"
  );
  // footer
  $(".max").append(
    "<footer class='footer_'><div><a  href='#''>关于守望</a> 丨 <a  href='#''>服务协议</a> 丨 <a  href='#''>隐私政篥</a> 丨 <a  href='#''>守望公益</a> 丨 <a  href='#''>举报中心</a> 丨 <a  href='#''>网站导航</a></div></footer>"
  );
  $(".footer_").append(
    "<a href='https://beian.miit.gov.cn/' target=_blank>渝ICP备2021014522号</a>"
  );
  // 顶部导航
  $(".max").prepend('<div class="top"></div>');
  // left
  $(".top").prepend(
    '<div class="top2"><span> Follow Us On: </span><span class="iconfont icon-QQ">&nbsp;</span><span class="iconfont icon-weixin">&nbsp;</span><span class="iconfont icon-weibo"></div>'
  );
  // right
  $(".top2").after(
    '<div class="top2"><span class="iconfont icon-youxiang">&nbsp;</span><span>Emall:sdgfdsgfdsgf.com&nbsp;</span><span class="iconfont icon-dianhuatianchong">&nbsp;</span><span>157873412345</span></div>'
  );
  // 导航栏
  $(".top").after(
    "<div class='top_flex'><a href='./index.html' class='logo'></a><ul class='new_1'></ul></div>"
  );
  //链接
  $(".new_1").append(
    "<li class='new_a'><a href='./index-1.html' target='_self'>救援项目</a><ul class='Secondary_ul'><li class='trg'></li><li><a href='./index-1_1.html' target='_self'>救援申请</a></li><li><a href='./index-1_2.html' target='_self'>子女助学</a></li><li><a href='./index-1_3.html' target='_self'>医疗补助</a></li></ul></li>"
  );
  $(".new_1").append(
    "<li class='new_a'><a href='./index-2.html' target='_self'>爱心捐赠</a><ul class='Secondary_ul'><li class='trg'></li><li><a href='./index-2_1.html' target='_self'>衣物捐赠</a></li><li><a href='./index-2_2.html' target='_self'>食品捐赠</a></li><li><a href='./index-2_3.html' target='_self'>书籍捐赠</a></li><li><a href='./index-2_4.html' target='_self'>资金捐赠</a></li></ul></li>"
  );
  $(".new_1").append(
    "<li class='new_a'><a href='./index-3.html' target='_self'>信息公开</a><ul class='Secondary_ul'><li class='trg'></li><li><a href='./index-3_1.html' target='_self'>财务公开</a></li><li><a href='./index-3_3.html' target='_self'>基金章程</a></li></ul></li>"
  );
  $(".new_1").append(
    "<li class='new_a'><a href='./index-4.html' target='_self'>志愿服务</a><ul class='Secondary_ul'><li class='trg'></li><li><a href='./index-4_1.html' target='_self'>成为志愿者</a></li><li><a href='./index-4_3.html' target='_self'>高校社团合作</a></li></ul></li>"
  );
  $(".new_1").append(
    "<li class='new_a'><a href='./index-5.html' target='_self'>关于我们</a><ul class='Secondary_ul'><li class='trg'></li></ul></li>"
  );
  // 搜索框
  $(".new_1").after(
    "<div class='search_'><div class='input-group'><input type='text' class='form-control input_search' placeholder='关爱留守儿童' aria-label='Recipient's username' aria-describedby='button-addon2'></div></div>"
  );
  $(".input_search").after(
    "<div class='input-group-append'><button class='btn btn-outline-secondary' type='button' id='button-addon2'>Button</button></div>"
  );
  // 手机导航栏
  $(".search_").after(
    "<img src='./images/more.png' alt='' class='more'><div class='sec_phone'><ul class='ul_item'></div></div>"
  );
  $(".ul_item").append(
    "<li class='li_item_'><a href='./index-1.html' target='_self'>救援项目</a><ul class='ul_item_'><li><a href='./index-1_1.html' target='_self'>救援申请</a></li><li><a href='./index-1_2.html' target='_self'>子女助学</a></li><li><a href='./index-1_3.html' target='_self'>医疗补助</a></li></ul></li>"
  );
  $(".ul_item").append(
    "<li class='li_item_'><a href='./index-2.html' target='_self'>爱心捐赠</a><ul class='ul_item_'><li><a href='./index-2_1.html' target='_self'>衣物捐赠</a></li><li><a href='./index-2_2.html' target='_self'>食品捐赠</a></li><li><a href='./index-2_3.html' target='_self'>书籍捐赠</a></li><li><a href='./index-2_4.html' target='_self'>资金捐赠</a></li></ul></li>"
  );
  $(".ul_item").append(
    "<li class='li_item_'><a href='./index-3.html' target='_self'>信息公开</a><ul class='ul_item_'><li><a href='./index-3_1.html' target='_self'>财务公开</a></li><li><a href='./index-3_3.html' target='_self'>基金章程</a></li></ul></li>"
  );
  $(".ul_item").append(
    "<li class='li_item_'><a href='./index-4.html' target='_self'>志愿服务</a><ul class='ul_item_'><li><a href='./index-4_1.html' target='_self'>成为志愿者</a></li><li><a href='./index-4_3.html' target='_self'>高校社团合作</a></li></ul></li>"
  );
  $(".ul_item").append(
    "<li class='li_item_'><a href='./index-5.html' target='_self'>关于我们</a><ul class='ul_item_'></ul></li>"
  );
})();
// 置顶
(function () {
  var banOffTop = $(".top_flex").offset().top; //获取到距离顶部的垂直距离
  var scTop = 0; //初始化垂直滚动的距离
  $(document).scroll(function () {
    scTop = $(this).scrollTop(); //获取到滚动条拉动的距离
    if (scTop >= banOffTop) {
      //核心部分:当滚动条拉动的距离大于等于导航栏距离顶部的距离时，添加指定的样式
      $(".top_flex").addClass("Place");
      $(".top_roll").css({ top: "60px" });
      // 手机
      $(".sec_phone").css({ top: "50px" });
    } else {
      $(".top_flex").removeClass("Place");
      $(".top_roll").css({ top: "84px" });
      // 手机
      $(".sec_phone").css({ top: "74px" });
    }
  });
})();
// 点击更多
(function () {
  // 展开收起
  // 更换图片
  var toggle = true;
  $(".more").click(function () {
    if (toggle == true) {
      $(".more").attr("src", "./images/更多.png");
      $(".sec_phone").css({ height: "89%" });
      toggle = false;
    } else {
      $(".more").attr("src", "./images/more.png");
      $(".sec_phone").css({ height: "0" });
      toggle = true;
    }
    $(window).resize(function () {
      if ($(window).width() > 1000) {
        $(".more").attr("src", "./images/more.png");
        $(".sec_phone").css({ height: "0" });
        toggle = true;
      }
    });
  });
})();
// 二级菜单
(function () {
  var li_item_ = $(".li_item_"),
    ul_item_ = $(".ul_item_"),
    li = $(".new_a"),
    ul = $(".Secondary_ul"),
    wipe = 0;
  for (let i = 0; i < li.length; i++) {
    li[i].index = i;
    li[i].click = false;
    li[i].ul_height = ul[i].clientHeight;
    ul[i].style.height = "0";
    $(".new_a").hover(function () {
      // 擦除样式
      ul[wipe].style.height = "0";
      if (this.click) {
        li[this.index].click = false;
      } else {
        ul[this.index].style.height = this.ul_height + "px";
        li[wipe].click = false;
        li[this.index].click = true;
        wipe = this.index;
      }
    });
  }
  for (let i = 0; i < li_item_.length; i++) {
    li_item_[i].index = i;
    li_item_[i].is_click = false;
    li_item_[i].ul_height = ul_item_[i].clientHeight;
    ul_item_[i].style.height = "0";
    li_item_[i].onclick = function () {
      // 擦除样式
      $(window).resize(function () {
        if ($(window).width() > 1000) {
          ul_item_[wipe].style.height = "0";
          li_item_[wipe].className = "";
          li_item_[wipe].is_click = false;
        }
      });
      ul_item_[wipe].style.height = "0";
      li_item_[wipe].className = "";
      if (this.is_click) {
        li_item_[this.index].is_click = false;
      } else {
        // 点击样式
        ul_item_[this.index].style.height = this.ul_height + "px";
        li_item_[this.index].className = "phone_sec_on";
        li_item_[wipe].is_click = false;
        li_item_[this.index].is_click = true;
        wipe = this.index;
      }
    };
  }
})();
// 返回顶部
(function () {
  var time;
  $(".return_").click(function () {
    clearTimeout(time);
    time = setTimeout(function () {
      if ($(window).scrollTop() < 10) {
        return;
      }
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    }, 700);
  });

  var timer = setInterval(function () {
    var screen_height = $(window).height(),
      screen_width = $(window).width();
    if (screen_height < 900 && screen_width < 500) {
      $(".fixed").css({
        right: "10px",
      });
      $(".return_").css({ width: "15px", right: "0" });
    }
    $(".max").click(function () {
      if (screen_height < 900 && screen_width < 500) {
        $(".fixed").css({ width: "15px", right: "10px", borderRadius: "20px" });
        $(".return_").css({ left: "0px" });
      } else {
        $(".fixed").css({ width: "10px", right: "5px", borderRadius: "20px" });
        $(".return_").css({ left: "0px" });
      }
    });
  });
  //   // 返沪顶部  太花里胡巧和累赘了
  // (function () {
  //   //首先将#btn隐藏
  //   $("#return").hide();
  //   //当滚动条的位置处于距顶部50像素以下时，跳转链接出现，否则消失
  //   $(function () {
  //     $(window).scroll(function () {
  //       if ($(window).scrollTop() > 50) {
  //         $("#return").fadeIn(0);
  //         $(".return").click(function () {
  //           $(".return").attr("src", "./images/fanhuidingbu2.jpg");
  //           $(".return").css({
  //             width: "5%",
  //             right: "1.5%",
  //             bottom: "120%",
  //             transition: "2.5s",
  //           });
  //         });
  //       } else {
  //         $("#return").fadeOut(0);
  //         $(".return").attr("src", "./images/fanhuidingbu.jpg");
  //         $(".return").css({
  //           width: "2%",
  //           right: "1.5%",
  //           bottom: "4%",
  //         });
  //       }
  //     });
  //     //当点击跳转链接后，回到页面顶部位置
  //     $("#return").click(function () {
  //       $("body,html").animate(
  //         {
  //           scrollTop: 0,
  //         },
  //         1000
  //       );
  //     });
  //   });
  // })();

  // 手机端不行
  // $(".fixed").dblclick(function () {
  //   clearTimeout(time);
  //   $(".fixed").css({
  //     width: "200px",
  //     right: "0",
  //     borderRadius: "10px 0 0 10px",
  //   });
  //   $(".return_").css({ left: "185px" });
  //   $(".null_").click(function () {
  //     $(".fixed").css({ width: "10px", right: "5px", borderRadius: "20px" });
  //     $(".return_").css({ left: "0px" });
  //   });
  // });
  var i = 0;
  $(".fixed").on("click", function () {
    i++;
    setTimeout(function () {
      i = 0;
    }, 500);
    clearInterval(timer);
    if (i > 1) {
      clearTimeout(time);
      $(".fixed").css({
        width: "200px",
        right: "0",
        borderRadius: "10px 0 0 10px",
      });
      $(".return_").css({ left: "185px" });

      var screen_height = $(window).height(),
        screen_width = $(window).width();
      console.log(screen_height, screen_width);
      if (screen_width > 800) {
        $(".null_").click(function () {
          $(".fixed").css({
            width: "10px",
            right: "5px",
            borderRadius: "20px",
          });
          $(".return_").css({ left: "0px" });
        });
      }
      i = 0;
    }
  });
})();
// 播放器
// (function () {
//   var tog = true,
//     player = $(".ply")[0];
//   $(".play").click(function () {
//     if (tog == true) {
//       $(".play").attr("src", "./images/暂停.png");
//       $(".ply").attr("src", "./video/超远距连接.mp3");
//       $(".play").css({ animation: "rota 5s infinite linear" });
//       player.play();
//       // 播放
//       // 旋转
//       tog = false;
//     } else {
//       $(".play").attr("src", "./images/24gf-playCircle.png");
//       player.pause();
//       $(".play").css({ animation: "" });
//       /*暂停*/
//       tog = true;
//     }
//   });
// })();
(function () {
  var audio = $(".ply")[0],
    songlist = [
      //歌曲
      {
        path: "./video/超远距连接.mp3",
      },
      {
        path: "./video/牵丝戏.mp3",
      },
      {
        path: "./video/折枝花满衣.mp3",
      },
    ];
  let song_play = false;

  function play_song() {
    song_play = true;
    audio.play();
    $(".play").attr("src", "./images/暂停.png");
    $(".play").css({ animation: "rota 5s infinite linear" });
  }

  function pause_song() {
    song_play = false;
    audio.pause();
    $(".play").attr("src", "./images/24gf-playCircle.png");
    $(".play").css({ animation: "" });
  }

  $(".play").click(function () {
    song_play ? pause_song() : play_song();
  });
  function load_sOng(songlist) {
    $(".ply").attr("src", songlist.path);
  }
  let i = 0;

  load_sOng(songlist[i]);

  function pre_song() {
    i--;
    if (i < 0) {
      i = songlist.length - 1;
    }
    load_sOng(songlist[i]);
    play_song();
  }
  $(".pre").click(pre_song);

  function next_song() {
    i++;
    if (i > songlist.length - 1) {
      i = 0;
    }
    load_sOng(songlist[i]);
    play_song();
  }
  $(".next").click(next_song);
})();

(function () {
  $(".select")
    .on("click", ".placeholder", function (e) {
      var parent = $(this).closest(".select");
      if (!parent.hasClass("is-open")) {
        parent.addClass("is-open");
        $(".select.is-open").not(parent).removeClass("is-open");
      } else {
        parent.removeClass("is-open");
      }
      e.stopPropagation();
    })
    .on("click", "ul>li", function () {
      var parent = $(this).closest(".select");
      parent.removeClass("is-open").find(".placeholder").text($(this).text());
    });

  $("body").on("click", function () {
    $(".select.is-open").removeClass("is-open");
  });
})();
(function () {
  setInterval(function () {
    var width = screen.width;
    if (width < 600) {
      $("body")[0].style.zoom = 0.9;
    }
    if (width > 600) {
      $("body")[0].style.zoom = 1;
    }
    if (width < 555) {
      $("body")[0].style.zoom = 0.8;
    }
    if (width < 480) {
      $("body")[0].style.zoom = 0.7;
    }
    if (width < 410) {
      $("body")[0].style.zoom = 0.6;
    }
    if (width < 360) {
      $("body")[0].style.zoom = 0.5;
    }
    if (width < 300) {
      $("body")[0].style.zoom = 0.4;
    }
    if (width < 240) {
      $("body")[0].style.zoom = 0.3;
    }
    if (width < 180) {
      $("body")[0].style.zoom = 0.2;
    }
    if (width < 110) {
      $("body")[0].style.zoom = 0.1;
    }
  });
})();
(function () {
  $(window)
    .scroll(function () {
      var screen_height = $(window).height(),
        screen_width = $(window).width();
      var targetPercentage = 70;
      var navBarHeight = 66;
      var targetID = "#navigation";
      var scrollTo = $(window).scrollTop(),
        docHeight = $(document).height(),
        windowHeight = $(window).height();
      if (screen_height < 900 && screen_width < 500) {
        scrollPercent =
          ((scrollTo / (docHeight - windowHeight)) * 100).toFixed() * 3;
      } else {
        scrollPercent = (
          (scrollTo / (docHeight - windowHeight)) *
          100
        ).toFixed();
      }
      $(".top_roll").css({ width: scrollPercent + "%" });
      if (scrollPercent > targetPercentage) {
        $(targetID).css({ top: "0" });
      }
      if (scrollPercent < targetPercentage) {
        $(targetID).css({ top: "-" + navBarHeight + "px" });
      }
    })
    .trigger("scroll");
  $(".max").before("<div class='top_roll'></div>");
})();
