//=====================================
//会話時間取得
//=====================================

var PassSec;   // 秒数カウント用変数

// 繰り返し処理の中身
function showPassage() {
   PassSec++;   // カウントアップ
   document.getElementById("PassageArea").innerHTML = msg;   // 表示更新
}
 
// 繰り返し処理の開始
function startShowing() {
   PassSec = 0;   // カウンタのリセット
   PassageID = setInterval('showPassage()',1000);   // タイマーをセット(1000ms間隔)
}
 
// 繰り返し処理の中止
function stopShowing() {
   clearInterval( PassageID );// タイマーのクリア
   var num = PassSec;

   // var timeD = Math.floor(num / (24 * 60 * 60));
   var timeH = Math.floor(num % (24 * 60 * 60) / (60 * 60));
   var timeM = Math.floor(num % (24 * 60 * 60) % (60 * 60) / 60);
   var timeS = num % (24 * 60 * 60) % (60 * 60) % 60;
   var timeDMS = '<span class="eff">'+timeH +'</span>'+ '時間'+ '<span class="eff">'+ timeM +'</span>'+ '分'+ '<span class="eff">'+ timeS +'</span>'+'秒' ;

   //会話時間 出力
   $("#PassageArea").html(timeDMS);

}



//=====================================
//会話比率取得 & グラフ
//=====================================
function talkRatio() {
   
  
   let left = document.getElementsByClassName("talk-section left");
   let right = document.getElementsByClassName("talk-section right");
   //左の文字数取得
   let leftCount = 0;
   for (let i = 0; i < left.length; i++){
      leftCount += left[i].textContent.length;
   }

   //右の文字数取得
   let rightCount = 0;
   for (let i = 0; i < right.length; i++){
      rightCount += right[i].textContent.length;
   }

   let totalCount= leftCount+rightCount;//総数
   let leftRatio=Math.floor(leftCount / totalCount*100);
   let rightRatio=(100-leftRatio);

   //出力
   console.log(leftRatio);//出力
   console.log(rightRatio);//出力

   leftRatioTime='<span class="eff2">'+leftRatio+'</span>'+"%";
   rightRatioTime='<span class="eff2">'+rightRatio+'</span>'+"%";

   $("#leftRatio").html(leftRatioTime);
   $("#rightRatio").html(rightRatioTime);




   // 円グラフ
   var ctx = document.getElementById("myPieChart");

  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["自分", "相手"],
      datasets: [{
          backgroundColor: [
              "#036DB6",
              "#03b6b3",
          ],
          data: [leftRatio, rightRatio]
      }]
    },
    options: {
      title: {
        display: true,
        text: '会話比率'
      }
    }
  });
}

