function setFav(target){
  target.addClass("favstar_on");
}

function removeFav(target){
  target.removeClass("favstar_on");
}

function updateFav(){
  var cnt = $(".favstar_on").length;
  setCookie();
  document.getElementById('MyListCnt').innerHTML = '(' + cnt + ')';
}

function dispFav(){
  var favs = $(".favstar_on");
  for (var i = 0; i < favs.length; i++){
    var favId = favs[i].id.slice(5);
    disp("fav_" + favId);
  }
}

function setCookie(){
  var favs = $(".favstar_on");
  var arr = [];
  for (var i = 0; i < favs.length; i++){
    var favId = favs[i].id.slice(5);
    arr.push(favId);
  }
  document.cookie = evName + "=" + encodeURIComponent(arr.join(',')) + "; max-age=" + (60*60*24*365);
}

function loadCookie(){
  var ck = getCookie(evName);
  if (ck == null){
    return;
  }

  var arr = ck.split(',');
  for (var i = 0; i < arr.length; i++){
    setFav($('#star_' + arr[i]));
  }
}

function getCookie( name )
{
  var result = null;

  var cookieName = name + '=';
  var allcookies = document.cookie;

  var position = allcookies.indexOf( cookieName );
  if( position != -1 )
  {
    var startIndex = position + cookieName.length;

    var endIndex = allcookies.indexOf( ';', startIndex );
    if( endIndex == -1 )
    {
      endIndex = allcookies.length;
    }

    result = decodeURIComponent(allcookies.substring( startIndex, endIndex ) );
  }

  return result;
}

$(function(){
  loadCookie();
  updateFav();

  $(".favstar").on('click',function(event){
    if ($(this).hasClass("favstar_on")){
      removeFav($(this));
    }else{
      setFav($(this));
    }
    updateFav();
  });

  // タブクリック
  $(".mylistJump").on('click',function(){
    undispall();
    dispFav();
    return false;
  });
});

