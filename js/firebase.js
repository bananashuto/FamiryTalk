
  // ファイヤーベースからコピー
  var firebaseConfig = {
    apiKey: "",
    authDomain: "family-talk-test2.firebaseapp.com",
    projectId: "family-talk-test2",
    databaseURL: "https://family-talk-test2-default-rtdb.firebaseio.com/",
    storageBucket: "family-talk-test2.appspot.com",
    messagingSenderId: "",
    appId: ""
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const ref = firebase.database().ref(); 


  //送信  ←←←【課題】変数名整理
  $("#recode").on("click",function(){
    alert("記録しました。");

    const uname = $("#PassageArea").text();//会話時間取得
    const hiritsu = $("#leftRatio").text();//会話比率取得
    const msg = {
      time : time(),
      uname : uname,
      hiritsu : hiritsu
    };
    ref.push(msg);
  });

  //受信  
  ref.on("child_added",function(data){
    const v =data.val();// 送信されたオブジェクトを取得
    const k =data.key;// ユニークキーを取得
    const h = "<div class='recodeBox'>"+"<p class='ptag'>"+v.time+"</p>"+'<p class="recodeptag">'+v.uname+'</p>'+'<p class="recodeptag">'+v.hiritsu+'</p>'+"</div>";
    $("#output").prepend(h);

  });


  //時間取得    
  function time() {
    var date = new Date();
    // let h = now.getHours();          //時
    // let m = now.getMinutes();        //分
    // let s = now.getSeconds();        //秒


    var mm = ("0" + date.getMonth()+1).slice(-2);
    var dd = ("0" + date.getDate()).slice(-2);
    var hh = ("0" + date.getHours()).slice(-2);
    var min = ("0" + date.getMinutes()).slice(-2);
    var sec = ("0" + date.getSeconds()).slice(-2);

    var time = mm + "月" + dd +"日";
    return time;
  }

