function undisp(name){
  var list=document.getElementsByName(name);
  for (i = 0; i < list.length; i++){
    list[i].style.display = "none";
  }
}
function undispall(){
  undisp("Eve_0");
  undisp("Eve_1");
  undisp("Eve_2");
  undisp("Eve_3");
  undisp("Eve_4");
  undisp("Eve_5");
  undisp("Eve_6");
  undisp("Eve_7");
  undisp("Eve_8");
  undisp("Eve_9");
  undisp("Eve_10");
  undisp("Eve_11");
  undisp("Eve_12");
}
function disp(name){
  var list=document.getElementsByName(name);
  for (i = 0; i < list.length; i++){
    list[i].style.display = '';
  }
}
function dispall(){
  disp("Eve_0");
  disp("Eve_1");
  disp("Eve_2");
  disp("Eve_3");
  disp("Eve_4");
  disp("Eve_5");
  disp("Eve_6");
  disp("Eve_7");
  disp("Eve_8");
  disp("Eve_9");
  disp("Eve_10");
  disp("Eve_11");
  disp("Eve_12");
}

function count(name){
  var list=document.getElementsByName(name);
  return list.length / 6;
}
function setCount(){
  var cnt0 = count('Eve_0');
  document.getElementById('cnt0').innerHTML = '(' + cnt0 + ')';
  var cnt1 = count('Eve_1');
  document.getElementById('cnt1').innerHTML = '(' + cnt1 + ')';
  var cnt2 = count('Eve_2');
  document.getElementById('cnt2').innerHTML = '(' + cnt2 + ')';
  var cnt3 = count('Eve_3');
  document.getElementById('cnt3').innerHTML = '(' + cnt3 + ')';
  var cnt4 = count('Eve_4');
  document.getElementById('cnt4').innerHTML = '(' + cnt4 + ')';
  var cnt5 = count('Eve_5');
  document.getElementById('cnt5').innerHTML = '(' + cnt5 + ')';
  var cnt6 = count('Eve_6');
  document.getElementById('cnt6').innerHTML = '(' + cnt6 + ')';
  var cnt7 = count('Eve_7');
  document.getElementById('cnt7').innerHTML = '(' + cnt7 + ')';
  var cnt8 = count('Eve_8');
  document.getElementById('cnt8').innerHTML = '(' + cnt8 + ')';
  var cnt9 = count('Eve_9');
  document.getElementById('cnt9').innerHTML = '(' + cnt9 + ')';
  var cnt10 = count('Eve_10');
  document.getElementById('cnt10').innerHTML = '(' + cnt10 + ')';
  var cnt11 = count('Eve_11');
  document.getElementById('cnt11').innerHTML = '(' + cnt11 + ')';
  var cnt12 = count('Eve_12');
  document.getElementById('cnt12').innerHTML = '(' + cnt12 + ')';

  var cntall = cnt0 + cnt1 + cnt2 + cnt3 + cnt4 + cnt5 + cnt6 + cnt7 + cnt8 + cnt9 + cnt10 + cnt11 + cnt12;
  document.getElementById('cntall').innerHTML = '(' + cntall + ')';

}

$(function(){
  // 読み込み時処理
  $(document).ready( function(){
    setCount();
    $("#page-top").hide();
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

