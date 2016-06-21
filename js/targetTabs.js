function undisp(name){
  $("." + name).hide();
}
function undispall(){
  undisp("forb");
  undisp("forg");
}
function disp(name){
  $("." + name).show();
}
function dispall(){
  disp("forb");
  disp("forg");
}

function setCount(){
  var cnt0 = $(".forb_cnt").length;
  document.getElementById('cnt0').innerHTML = '(' + cnt0 + ')';
  var cnt1 = $(".forg_cnt").length;
  document.getElementById('cnt1').innerHTML = '(' + cnt1 + ')';

  var cntall = cnt0 + cnt1;
  document.getElementById('cntall').innerHTML = '(' + cntall + ')';

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

