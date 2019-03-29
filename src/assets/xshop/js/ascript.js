$("#dangkythanhvien").attr("disabled", "disabled");

function checkreply() {
  var ten = document.getElementById("txtHoten").value;

  var email = document.getElementById("txtEmail").value;

  if (ten == "" || email == "") {
    alert("Vui lÃ²ng nháº­p Ä‘áº§y Ä‘á»§ há» tÃªn & Email");

    return false;
  }
}

function loadquan(id) {
  var dataString = "pid=" + id + "&action=loadquan";

  $.ajax({
    type: "POST",

    url: "action.php",

    data: dataString,

    success: function(response) {
      var getData = $.parseJSON(response);

      $("#cboquan").html(getData.cboquan);

      $("#sTinh").val(getData.sTinh);
    }
  });
}

function checkemail(id) {
  var dataString = "pid=" + id + "&action=checkemail";

  $.ajax({
    type: "POST",

    url: "action.php",

    data: dataString,

    success: function(response) {
      $("#statusemail").html(response);

      checksubmit();
    }
  });
}

function checkcode(id) {
  var dataString = "pid=" + id + "&action=checkcode";

  $.ajax({
    type: "POST",

    url: "action.php",

    data: dataString,

    success: function(response) {
      $("#statuscode").html(response);

      checksubmit();
    }
  });
}

function checksubmit() {
  var dataString = "action=checksubmit";

  $.ajax({
    type: "POST",

    url: "action.php",

    data: dataString,

    success: function(response) {
      if (response == "YES") {
        $("#dangkythanhvien").removeAttr("disabled");

        $("#dangkythanhvien").css({
          cursor: "pointer",

          background: "#008040",

          color: "#fff"
        });
      } else {
        $("#dangkythanhvien").attr("disabled", "disabled");

        $("#dangkythanhvien").css({
          cursor: "default",

          background: "#ccc",

          color: "#666"
        });
      }
    }
  });
}

function setNhieugia(str) {
  var array = str.split("-");

  //alert(array[1]);

  if (array[2] != 0)
    var phantram =
      '<span class="phantram"><img src="images/giamgia.png" alt="Giáº£m giÃ¡"/>' +
      array[2] +
      " %</span>";
  else var phantram = "";

  var giaban =
    '<span class="giaban">' +
    array[1] +
    '</span><span class="giacty">' +
    array[0] +
    "</span>" +
    phantram;

  $("#setPrice").html(giaban);

  $("#Giaban").val(array[3]);
}

function saveinput(dk, str) {
  var dataString = "dk=" + dk + "&str=" + str + "&action=saveinput";

  $.ajax({
    type: "POST",

    url: "action.php",

    data: dataString,

    success: function(response) {
      $("#dta").val(response);
    }
  });
}

function setphivanchuyen(id) {
  var dataString = "pid=" + id + "&action=phivanchuyen";

  $.ajax({
    type: "POST",

    url: "action.php",

    data: dataString,

    success: function(response) {
      var getData = $.parseJSON(response);

      $("#phivanchuyen").val(getData.phivanchuyen);

      $("span#tongthanhtien").html(getData.spantongthanhtien);

      $("input#tongthanhtien").val(getData.inputtongthanhtien);

      $("#sQuan").val(getData.sQuan);
    }
  });
}

function updownqty(str) {
  var qty = document.Order.quantity.value;

  if (str == "up") {
    qty++;
  }

  if (str == "down") {
    if (qty > 1) {
      qty--;
    }
  }

  $("#qty").val(qty);
}

function updownincart(str, id) {
  var qty = document.getElementById("qty" + id).value;

  if (str == "up") {
    qty++;
  }

  if (str == "down") {
    if (qty > 1) {
      qty--;
    }
  }

  var dataString = "pid=" + id + "&qty=" + qty + "&action=capnhatsoluong";

  $.ajax({
    type: "POST",

    url: "action.php",

    data: dataString,

    success: function(response) {
      var getData = $.parseJSON(response);

      $("#qty" + id).val(getData.soluong);

      $("#thanhtien" + id).html(getData.thanhtien);

      $("#total").html(getData.total);

      $("#tongtien").html(getData.tongtien);

      $("span#tongthanhtien").html(getData.spantongthanhtien);

      $("input#tongthanhtien").val(getData.inputtongthanhtien);
    }
  });
}

function checkdangky() {
  if (document.Dtaform.sTen.value.length < 3) {
    alert("Vui lÃ²ng nháº­p Ä‘áº§y Ä‘á»§ há» tÃªn!");

    document.Dtaform.sTen.focus();

    return false;
  }

  if (document.Dtaform.sPass.value.length < 6) {
    alert("Máº­t kháº©u pháº£i tá»« 6 kÃ½ tá»±");

    document.Dtaform.sPass.focus();

    return false;
  }

  if (document.Dtaform.sPass.value != document.Dtaform.sRepass.value) {
    alert("XÃ¡c nháº­n máº­t kháº©u khÃ´ng Ä‘Ãºng!");

    document.Dtaform.sRepass.focus();

    return false;
  }
}

function checkform() {
  reemail = /^\w+(\.\w+)*@\w+(\.\w+){1,3}$/;

  if (!reemail.test(document.Dtaform.sEmail.value)) {
    alert("Äá»‹a chá»‰ email khÃ´ng há»£p lá»‡");

    document.Dtaform.sEmail.focus();

    return false;
  }

  if (document.Dtaform.sTen.value.length < 3) {
    alert("Vui lÃ²ng nháº­p Ä‘áº§y Ä‘á»§ há» tÃªn!");

    document.Dtaform.sTen.focus();

    return false;
  }

  var rephone = /^\d{6,13}$/;

  if (document.Dtaform.sDienthoai.value == "") {
    alert("Báº¡n chÆ°a nháº­p sá»‘ Ä‘iá»‡n thoáº¡i liÃªn há»‡!");

    document.Dtaform.sDienthoai.focus();

    return false;
  }

  if (document.Dtaform.sDiachi.value.length < 3) {
    alert("Vui lÃ²ng nháº­p Ä‘á»‹a chá»‰!");

    document.Dtaform.sDiachi.focus();

    return false;
  }

  if (document.Dtaform.sTieude.value.length < 6) {
    alert("ChÆ°a nháº­p tiÃªu Ä‘á»");

    document.sTieude.sNoidung.focus();

    return false;
  }

  if (document.Dtaform.sNoidung.value.length < 6) {
    alert("Ná»™i dung quÃ¡ ngáº¯n");

    document.Dtaform.sNoidung.focus();

    return false;
  }
}

function remove_this_item(pid) {
  //window.location.reload(true);

  //alert(pid);

  var dataString = "pid=" + pid + "&action=remove_this_item";

  $.ajax({
    type: "POST",

    url: "action.php",

    data: dataString,

    success: function(response) {
      $("#response").html(response);
    }
  });

  return false;
}

function xoagiohang(pid) {
  //window.location.reload(true);

  //alert(so);

  var dataString = "pid=" + pid + "&action=xoagiohang";

  $.ajax({
    type: "POST",

    url: "action.php",

    data: dataString,

    success: function(response) {
      $("#response").html(response);
    }
  });

  return false;
}

function capnhatsoluong(pid) {
  //window.location.reload(true);

  var qty = $("#quantity" + pid).val();

  var dataString = "pid=" + pid + "&qty=" + qty + "&action=capnhatsoluong";

  $.ajax({
    type: "POST",

    url: "action.php",

    data: dataString,

    success: function(response) {
      $("#response").html(response);
    }
  });

  return false;
}

function checkbinhluan() {
  if (document.formBinhluan.sTen.value.length < 4) {
    alert("Vui lÃ²ng nháº­p Ä‘áº§y Ä‘á»§ há» tÃªn");

    document.formBinhluan.sTen.focus();

    return false;
  }

  reemail = /^\w+(\.\w+)*@\w+(\.\w+){1,3}$/;

  if (document.formBinhluan.sEmail.value.length < 4) {
    alert("Äá»‹a chá»‰ Email quÃ¡ ngáº¯n");

    document.formBinhluan.sEmail.focus();

    return false;
  } else {
    if (!reemail.test(document.formBinhluan.sEmail.value)) {
      alert("Äá»‹a chá»‰ email khÃ´ng há»£p lá»‡");

      document.formBinhluan.sEmail.focus();

      return false;
    }
  }
}

function setthuoctinh(str, num) {
  $("#rad" + str).attr("value", num);
}

$(document).ready(function() {
  var link = "action.php";

  $("form#product").submit(function() {
    var id = $(this)
      .find("input[name=product_id]")
      .val();

    var qty = $(this)
      .find("input[name=quantity]")
      .val();

    var kichthuoc = $(this)
      .find("input[name=radKichthuoc]")
      .val();

    var chatlieu = $(this)
      .find("input[name=radChatlieu]")
      .val();

    var mausac = $(this)
      .find("input[name=radMausac]")
      .val();

    var giaban = $(this)
      .find("input[name=giaban]")
      .val();

    var dataString =
      "pid=" +
      id +
      "&qty=" +
      qty +
      "&kichthuoc=" +
      kichthuoc +
      "&chatlieu=" +
      chatlieu +
      "&mausac=" +
      mausac +
      "&giaban=" +
      giaban +
      "&action=addcart";

    $.ajax({
      type: "POST",

      url: "action.php",

      data: dataString,

      success: function(response) {
        $(".themvaogio").html(response);
      }
    });

    return false;
  });
});

function getfirst(id) {
  var dataString = "id=" + id;

  $.ajax({
    type: "POST",

    url: "getfirst.php",

    data: dataString,

    success: function(response) {
      $("#getfirst").html(response);
    }
  });
}

function getpagecomment(pid, id) {
  var dataString = "id=" + id + "&pid=" + pid;

  $.ajax({
    type: "POST",

    url: "getpagecomment.php",

    data: dataString,

    success: function(response) {
      $("#reloadcomment").html(response);
    }
  });
}

// Thá»‘ng kÃª

var _Hasync = _Hasync || [];

_Hasync.push(["Histats.start", "1,3140173,4,605,110,55,00011001"]);

_Hasync.push(["Histats.fasi", "1"]);

_Hasync.push(["Histats.track_hits", ""]);

(function() {
  var hs = document.createElement("script");
  hs.type = "text/javascript";
  hs.async = true;

  hs.src = "template/js15_as.js";

  (
    document.getElementsByTagName("head")[0] ||
    document.getElementsByTagName("body")[0]
  ).appendChild(hs);
})();

$(document).ready(function() {
  $.getScript("template/addthis.js");

  //Facebook

  (function(d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];

    if (d.getElementById(id)) return;

    js = d.createElement(s);
    js.id = id;

    js.src =
      "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.4&appId=586606914713300";

    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");

  $("input#reply").click(function() {
    var id = this.value;

    $("div.reply" + id).slideToggle();
  });

  //Báº­t táº¯t comment Facebook

  $("input#cmf").click(function() {
    $("div.cmf").slideToggle();
  });

  //Load áº£nh Ä‘Æ°a vÃ o slide

  loadimage();

  //Scroller

  $(".spbanchay")
    .show()
    .bxSlider({
      slideWidth: 220,

      minSlides: 2,

      maxSlides: 4,

      preloadImages: "all"
    });

  $("#tinnoibat").bxSlider({
    auto: false,

    nextSelector: "#tinnoibat-next",

    prevSelector: "#tinnoibat-prev",

    nextText: '<img src="images/next01.png" alt="Next"/>',

    prevText: '<img src="images/prev01.png" alt="Prev"/>',

    minSlides: 1,

    maxSlides: 1,

    slideMargin: 0
  });

  $("#nhanxet").bxSlider({
    auto: true,

    nextSelector: "#nhanxet-next",

    prevSelector: "#nhanxet-prev",

    nextText: '<img src="images/next01.png" alt="Next"/>',

    prevText: '<img src="images/prev01.png" alt="Prev"/>',

    minSlides: 1,

    maxSlides: 1,

    slideMargin: 0
  });

  $("#logothuonghieu").bxSlider({
    auto: false,

    minSlides: 1,

    maxSlides: 6,

    slideWidth: 170,

    slideMargin: 36
  });

  createMarquee({});
});

function loadimage() {
  var dataString = "action=addslide";

  $.ajax({
    type: "POST",

    url: "action.php",

    data: dataString,

    success: function(response) {
      $("#slider").append(response);

      startSlideshow();
    }
  });
}

function startSlideshow() {
  $("#slider").bxSlider({
    auto: true,

    pagerCustom: "#bx-pager",

    mode: "fade",

    speed: 3000,

    pause: 6000
  });
}

/* Rating */

$(document).ready(function() {
  $("#rating_panel>img").click(function(e) {
    var imgindex = $(this).index() + 1;
    var ratingpanel = $(this).closest("div");
    var pollid = ratingpanel.attr("data-pollid");
    var israted = ratingpanel.attr("data-rated");
    if (israted == 1) {
      return false;
    } else {
      ratingpanel.attr("data-rated", 1);
    }

    $("#starloader").show();
    for (i = 0; i < imgindex; i++) {
      var imgobj = $("#rating_panel>img:eq( " + i + " )");
      var img = "images/full.png";
      imgobj.attr("src", img);
    }

    var dataString = "action=rating&rated=" + imgindex + "&pid=" + pollid;
    $.ajax({
      url: "action.php",
      type: "POST",
      data: dataString,
      success: function(response) {
        $("#kqrating").html(response);
      }
    });
  });
});

/* Responsive Menu flaunt.js */

(function($) {
  $(function() {
    $(".nav").append($('<div class="nav-mobile"></div>'));
    $(".nav-item")
      .has("ul")
      .prepend('<span class="nav-click"><i class="nav-arrow"></i></span>');
    $(".nav-mobile").click(function() {
      $(".nav-list").toggle();
    });
    $(".nav-list").on("click", ".nav-click", function() {
      $(this)
        .siblings(".nav-submenu")
        .toggle();
      $(this)
        .children(".nav-arrow")
        .toggleClass("nav-rotate");
    });
  });
})(jQuery);

/* Flash write */

function Flashwrite(url, w, h, id, bg, vars) {
  var flashStr =
    "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0' width='" +
    w +
    "' height='" +
    h +
    "' id='" +
    id +
    "' align='middle'>" +
    "<param name='allowScriptAccess' value='always' />" +
    "<param name='movie' value='" +
    url +
    "' />" +
    "<param name='FlashVars' value='" +
    vars +
    "' />" +
    "<param name='wmode' value='transparent' />" +
    "<param name='menu' value='false' />" +
    "<param name='quality' value='high' />" +
    "<embed src='" +
    url +
    "' FlashVars='" +
    vars +
    "' wmode='transparent' menu='false' quality='high' width='" +
    w +
    "' height='" +
    h +
    "' allowScriptAccess='always' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' />" +
    "</object>";
  document.write(flashStr);
}

/* Up down */

$(function() {
  var $elem = $("#content");
  $("#nav_up").fadeIn("slow");
  $("#nav_down").fadeIn("slow");
  $(window).bind("scrollstart", function() {
    $("#nav_up,#nav_down")
      .stop()
      .animate({ opacity: "0.2" });
  });
  $(window).bind("scrollstop", function() {
    $("#nav_up,#nav_down")
      .stop()
      .animate({ opacity: "1" });
  });
  $("#nav_down").click(function(e) {
    $("html, body").animate({ scrollTop: $elem.height() }, 800);
  });
  $("#nav_up").click(function(e) {
    $("html, body").animate({ scrollTop: "0px" }, 800);
  });
});
