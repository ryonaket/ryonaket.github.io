var tbl = {
sp25:['SP-25','purgatory','シャー','http://purgatory500.blog39.fc2.com/','cut01.jpg'],
sp27:['SP-27','バナナぱんつ','黒羽ユウ','','cut02.jpg'],
sp6:['SP-6','電脳ちょこれーと','ＡｗＡ','http://awa.lolipop.jp/','cut03.png'],
sp29:['SP-29','魔女の棺','宮内ミヤビ','http://miyabi-05.sakura.ne.jp/','cut04.jpg'],
sp10:['SP-10','ぱらふぃりあ！','adonis_hk','','cut05.png'],
sp9:['SP-9','むくむくむーん','もぎり','http://red.ribbon.to/~amogiri/mukumuku/','cut06.png'],
sp3:['SP-3','Qcumber','キュリー','http://www.pixiv.net/member.php?id=7432812','cut07.png'],
sp28:['SP-28','Яoom ИumbeR_55','number_55','http://roomnumber55.xxxblog.jp','cut08.jpg'],
sp26:['SP-26','はこにわぷろじぇくと','小橋はこ','http://haxiv.com','cut09.jpg'],
sp18:['SP-18','hhb & 青蓮','mos_yen＆あお','http://mosimoco.blog115.fc2.com/','cut10.png'],
sp13:['SP-13','ニカメドッチ','藤宮杏子','','cut11.png'],
sp30:['SP-30','ガチ★ドランカーズ','折鶴兄弟','http://gachidora.x.fc2.com/','cut12.png'],
sp23:['SP-23','地獄に住ム天使達','かむい','http://jigoten.web.fc2.com/index.html','cut13.png'],
sp5:['SP-5','撲','越智多たいじ','','cut14.png'],
sp12:['SP-12','まくまく','HAA','http://pixiv.me/haa2','cut15.png'],
sp2:['SP-2','牡牛座','７','http://www.pixiv.net/member.php?id=4238821','cut16.jpg'],
sp19:['SP-19','B級河川','OGW','http://bottompainter.blog69.fc2.com/','cut17.png'],
sp24:['SP-24','りんご同盟','美岳','http://mitakaryona.blog76.fc2.com/','cut18.png'],
sp17:['SP-17','まろん工房','魔龍','http://blog.livedoor.jp/akumaronn/','cut19.jpg'],
sp15:['SP-15,16','つるぺた研究所','つるぺた教授','http://turupeta.aaabbb.cc','cut20.jpg'],
sp16:['SP-15,16','つるぺた研究所','つるぺた教授','http://turupeta.aaabbb.cc','cut20.jpg'],
sp7:['SP-7','来現編纂部','渦ノ川泡哉','http://www.pixiv.net/member.php?id=13792','cut21.png'],
sp8:['SP-8','さいのこぎり','細鋸氏','','cut22.jpg'],
sp11:['SP-11','02','原崎','http://kihyahya.sakura.ne.jp/','cut23.png'],
sp1:['SP-1','いにしえのぬし','シルエットさくら','','cut24.jpg'],
sp4:['SP-4','すがれや商店','スガレオン','http://sugareya.dou-jin.com/','cut25.png'],
sp22:['SP-22','A.P.A.夢幻','あぶのおおかみ','http://pixiv.me/abnowolf','cut26.png'],
sp14:['SP-14','長命寺','てるくはのり　柏崎ちぇる信','http://cyoumeiji.blog49.fc2.com','cut27.png'],
sp21:['SP-21','氏賀屋','氏賀Ｙ太','http://uziga.sakura.ne.jp/','cut28.png'],
sp20:['SP-20','3rd imagination','高菜bps','http://3rdimagination.blog.fc2.com','cut29.png'],
};

{
  for(var key in tbl){
    var obj = tbl[key];
    jQuery("<img>").attr("src","./cut/" + obj[4]);
  }
};

$(".block").mouseover(function () {
  $(this).css("background-color","red");
  var idname = $(this).attr("id");
  var target = tbl[idname];
  $("#spno").text(target[0]);
  $("#circle").text(target[1]);
  $("#author").text(target[2]);
  $("#cut").attr("src","./cut/" + target[4]);
  if (target[3] == "-"){
    $("#website").css("visibility","hidden");
    $("#no-website").css("visibility","visible");
  }else{
    $("#website").css("visibility","visible");
    $("#no-website").css("visibility","hidden");
    $("#url").attr("href",target[3]);
    $("#url").text(target[3]);
  }
});

$(".block").mouseout(function () {
  $(this).css("background-color","white");
});

