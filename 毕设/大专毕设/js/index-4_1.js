(function () {
  setInterval(function () {
    width_ = $(".content").width();
    $(".cont_1")[0].style.width = width_ * 2 + "px";
    $(".cont_1").css({ transition: "0s" });
  });
  //
  function group() {
    $(".group").click(function () {
      $(".cont_1").css({ transition: "1s" });
      $(".cont_1").css({ left: "-100%", height: "650px" });
      $(".bodr_bottom").css({ width: "140px", left: "160px" });
    });
  }
  function personal() {
    $(".personal").click(function () {
      $(".cont_1").css({ transition: "1s" });
      $(".cont_1").css({ left: "0px", height: "auto" });
      $(".bodr_bottom").css({ width: "100px", left: "40px" });
    });
  }
  setInterval(function () {
    let width = $(window).width();
    if (width < 1000) {
      $(".cont_1").css({ transition: "0s", height: "auto" });
    }
  });
  function personal_2() {
    $(".cont_1").css({ transition: "0s" });
    $(".cont_1").css({ left: "-100%", height: "650px" });
    $(".bodr_bottom").css({
      width: "140px",
      left: "160px",
      transition: "0s",
    });
  }
  window.onload = function () {
    var type = sessionStorage.getItem("sreg");
    if (type == "sreg_2") {
      var obj = "." + type;
      obj.onclick = personal_2();
      sessionStorage.setItem("sreg", "");
    }
  };
  group();
  personal();
})();

// //账号密码
$("#submit").on("click", function () {
  // 密码
  var password = $(".password").val(),
    // 确认密码
    password_2 = $(".password_2").val(),
    // 用户名
    user = $(".user").val(),
    // 手机
    phone = $(".phone").val(),
    // 判断是不是英文字母
    front = /^[A-Za-z]+/,
    // 判断是不是字母数字下划线
    suer_ = /^[0-9a-zA-Z_]{1,}$/,
    // 数字
    sz_phone = /^[0-9]{1,11}$/,
    // 密码
    ma = /^(?=.*\d+)(?=.*[A-Z]+)(?=.*[a-z]+)[\w]{1,}$/,
    // 姓名
    chinese = /^[\u4e00-\u9fa5]{0,}$/,
    name_ = $(".name_").val(),
    // 证件
    cer = $(".cer").val(),
    // 验证码
    validation = {
      code: $(".validation").val(),
    },
    validation_ = {
      code: "TROC",
    };
  // 验证码
  if (validation.code != validation_.code) {
    $(".vali").text("验证码不对!");
  } else {
    $(".vali").text("");
  }
  // 证件
  if (cer.length <= 0) {
    $(".cer_").text("不能为空!");
  } else {
    $(".cer_").text("");
  }
  // 姓名
  if (!chinese.test(name_)) {
    $(".name__").text("姓名为汉字!");
  } else {
    $(".name__").text("");
  }
  if (name_.length <= 0) {
    $(".name__").text("不能为空!");
  }
  // 手机
  if (!sz_phone.test(phone)) {
    $(".phone_").text("手机长度为0-11位,且为数字!");
  } else {
    $(".phone_").text("");
    if (phone.length >= 0 && phone.length < 11) {
      $(".phone_").text("手机长度为0-11位,且为数字!");
    } else {
      $(".phone_").text("");
    }
  }
  // 密码
  if (!ma.test(password)) {
    $(".password__1").text("必须同时包含数字、大写字母和小写字母!");
  } else {
    $(".password__1").text("");
    if (password.length < 8 || password.length > 20) {
      $(".password__1").text("用户名长度为8～20个字符!");
    } else {
      $(".password__1").text("");
    }
  }
  // 确认密码
  if (!ma.test(password_2)) {
    $(".password__2").text("必须同时包含数字、大写字母和小写字母!");
  } else {
    $(".password__2").text("");
    if (password_2.length < 8 || password_2.length > 20) {
      $(".password__2").text("用户名长度为8～20个字符!");
    } else {
      $(".password__2").text("");
    }
  }
  // 密码一致
  if (password != password_2) {
    $(".password__2").text("密码不一致，请再次确认密码!");
  }
  // 用户名
  if (!suer_.test(user)) {
    $(".user_").text(
      "用户名只能以字母a～z开头，且只能由字母、数字0～9和下划线组成!"
    );
  } else {
    if (!front.test(user)) {
      $(".user_").text("用户名长度为6～20个字符，以字母a～z开头!");
    } else {
      if (user.length < 6 || user.length > 20) {
        $(".user_").text("用户名长度为6～20个字符!");
      } else {
        $(".user_").text("");
      }
    }
  }
});
