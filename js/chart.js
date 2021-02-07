//棒グラフ
var mydata = {
    labels: ["１月", "２月", "３月", "４月", "５月", "６月", "７月"],
    datasets: [
      {
        label: '数量',
        hoverBackgroundColor: "rgba(255,99,132,0.3)",
        data: [65, 59, 80, 81, 56, 55, 48],
      }
    ]
  };
  
  //「オプション設定」
  var options = {
    title: {    
      display: true,
      text: 'サンプルチャート'
    }
  };
  
  var canvas = document.getElementById('stage');
  var chart = new Chart(canvas, {
  
    type: 'bar',  //グラフの種類
    data: mydata,  //表示するデータ
    options: options  //オプション設定
  
  });





//   円グラフ
// function setCircle() {

// var ctx = document.getElementById("myPieChart");

//   var myPieChart = new Chart(ctx, {
//     type: 'pie',
//     data: {
//       labels: ["A型", "O型"],
//       datasets: [{
//           backgroundColor: [
//               "#BB5179",
//               "#FAFF67",
//           ],
//           data: [34, 23]
//       }]
//     },
//     options: {
//       title: {
//         display: true,
//         text: '血液型 割合'
//       }
//     }
//   });

// };