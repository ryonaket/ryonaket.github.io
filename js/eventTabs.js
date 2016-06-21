function undisp(name){
  $("." + name).hide();
}
function undispall(){
  undisp("forb");
  undisp("forg");
  if (typeof(events) != "undefined"){
    for (var i = 0;i < events.length; i++){
      undisp(events[i]);
    }
  }
}
function disp(name){
  $("." + name).show();
}
function dispall(){
  disp("forb");
  disp("forg");
  if (typeof(events) != "undefined"){
    for (var i = 0;i < events.length; i++){
      disp(events[i]);
    }
  }
}

function setCount(){
  var cntb = $(".forb_cnt").length;
  document.getElementById('cntb').innerHTML = '(' + cntb + ')';
  var cntg = $(".forg_cnt").length;
  document.getElementById('cntg').innerHTML = '(' + cntg + ')';

  var cntall = cntb + cntg;
  document.getElementById('cntall').innerHTML = '(' + cntall + ')';

  if (typeof(events) != "undefined"){
    for (var i = 0;i < events.length; i++){
      var cnt = $("." + events[i] + "_cnt").length;
      document.getElementById(events[i]).innerHTML = '(' + cnt + ')';
    }
  }
}

$(function(){
  // 読み込み時処理
  $(document).ready( function(){
    setCount();
    $("#page-top").hide();
    $("#menu-panel").show();
  });
  // 上へボタン表示切り替え
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#page-top").fadeIn();
    }else{
      $("#page-top").fadeOut();
    }
  });
  // 上へ移動
  $("#page-top").on('click',function(event){
    event.preventDefault();
    $('body,html').animate({scrollTop:0}, 500);
    return false;
  });
  // タブクリック
  $(".jump").on('click',function(event){
    event.preventDefault();
    var href = $(this).attr('href');
    if (href == "dispall"){
      dispall();
    }else{
      undispall();
      disp(href);
    }
  });
});

