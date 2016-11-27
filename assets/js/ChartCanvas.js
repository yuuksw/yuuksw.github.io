 
 $(function() {
        // レーダーチャートで表示するデータを用意
        var radarChartData = {
          labels: ["デザイン", "IA", "UX", "マーケティング", "ディレクション", "javascript", "html,css"],
          datasets: [
            {
              fillColor: "rgba(0,140,232,.3)", // 線で囲まれた部分の色
              strokeColor: "#008ce8", // 線の色
              pointColor: "#fff",  // 点の色
              pointStrokeColor: "#rgb(0,140,232)", // 点を囲む線の色
              data: [4,4,4,3,4,2,3]
            }
          ]
        };

        // Canvas にレーダーチャートを描画
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        var chart = new Chart(context);
        var rader = chart.Radar(radarChartData, {
          scaleShowLabels: false,  // 値のラベルを表示するかどうか
          scaleOverride : true, // 目盛の最大値を設定
          scaleSteps : 5, //値のステップ数
          scaleStepWidth : 1, //値のステップする大きさ
          scaleStartValue : 0, //値の始まりの値
          scaleLineWidth : 2, //円ラインの幅
          scaleLineColor : "rgba(0, 0, 0, .05)", //円ラインの色

          pointLabelFontSize : 12, // 値の文字サイズ
          pointLabelFontColor : "#333", //値の文字色

          pointDot : true, //値の点の表示
          pointDotRadius : 0, //点の大きさ
          pointDotStrokeWidth : 2, //点を囲む線の大きさ

          datasetStrokeWidth : 2, //値の枠線の幅
        });
      });