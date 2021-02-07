//=====================================
//感情分析  (感情の分類と点数からDOMの表示を変更する)
//=====================================
/**
 * @param {String} category 感情の分類 positive/negatibe/neutralの三分類
 * @param {Float32Array} point 点数(小数点)
 */

function createDiagResult(category, point, phraseArray) {
	//各点数と感情の分類に適したアドバイス
	//感情の分類[Positive/Negative/Neutral]をキーにする
	//点数による分類は20点ごとの5段階(各[0,20,40,60,80]以上かどうか)
	let advice = {
		Positive: [
			"相手との会話で多少盛り上がりがありました。ですが、まだまだ心の通ったやり取りができるはずです。もっと自分に素直に発言してみたり、相手に対する関心を積極的に表すと更に良くなるでしょう",
			"相手との会話で盛り上がりがしっかりとあり、気遣いの気持ちも伝わっています！次回も心の距離を近づけるようにその調子でいきましょう。この積み重ねです！",
			"あなた自身も相手との会話で手応えを感じられているはずです。相手との心の距離は親密で良好です。これからもその心遣いを忘れないようにしていきましょう！",
			"かなり会話が盛り上がっており、相手とかなり近い距離にあるのが見て取れます！素晴らしいですね◎",
			"会話の盛り上がりが素晴らしいです！心の距離はもはやとなり合わせといっても過言ではないでしょう！あなたはコミュニケーションマスターです！！！"
		],
		Neutral: [
			"会話にあまり盛り上がりが見えず、業務連絡のようになってしまっていますね...。相手への関心や気遣いの言葉をかけるように努力しましょう。",
			"会話に心がないように思えます。もっと相手が楽しくなったり、嬉しくなったりするような話題を積極的に持ち出してみましょう！",
			"会話への感情移入があまりなく、とても残念です。相手に合わせて話題を振ってみたり盛り上がるような話題を提供しましょう。",
			"もっと自分を開放していいように感じます。趣味などの話を恐れずに出して相手も気持ち良く話せるような会話環境を作るようにしましょう。",
			"会話の内容が機械的過ぎて、測定が不可能です...。"
		],
		Negative: [
			"会話において相手の感情を逆撫でる可能性があります。親切で優しい言葉遣いを意識したり、相手が好きな話題を１つ持ち出す習慣を身に付けましょう",
			"このままだと嫌われかねないです！もっと相手の事を気遣い尊重した発言を心がけましょう。",
			"もしかしたら相手に嫌われているかもしれません。好意的な反応を引き出すために褒め言葉や感謝の言葉を多めに含めることにより、改善を目指しましょう。相手が自分にとって大切な人であることを感じ取れるようにすることが重要です。",
			"むしろ嫌われに行ってるのではと疑ってしまうほど会話の内容からマイナスの感情が伺えました。改善が急務です。次回はポジティブな言葉だけを使うように意識してみてください",
			"率直に申し上げますと...もう手におえません。本気で相手との関係を築きたいなら、謙虚な姿勢で耳を傾け、感謝を示しながら自分の意見を伝える態度が必須です。"
		]
	};

	let pi = 4; //5段階目から始まる(配列の関係により5-1である4)
	for (let pointi = 1.0; pointi > 0.0; pointi -= 0.2) {
		//解析結果のpointが分類に当てはまれば、点数による分類添え字(pi)を決定
		//ダメなら段階を一つ下げる
		if (point > pointi) {
			break;
		}
		pi--;
	}

	// カテゴリー分けと点数から結果の画像と分類を決定
	// let imgNum = null;
	let parseCategory = "";
	switch (category) {
		case "Positive":
			parseCategory = "いい感じ！";
			// if (point >= 0.8) {
			// 	imgNum = 1;
			// } else if (point >= 0.6) {
			// 	imgNum = 2;
			// } else {
			// 	imgNum = 3;
			// }
			break;
		case "Neutral":
			parseCategory = "微妙かな";
			// imgNum = 4;
			break;
		case "Negative":
			parseCategory = "うーん...";
			// imgNum = 5;
			break;
	}



	//感情にまつわる配列を表示用にパース
	let parsePhraseArray = [];
	for (let pi = 0; pi < phraseArray.length; pi++) {
		parsePhraseArray.push(phraseArray[pi].form);
	}



	/*アドバイスをDOMに反映*/
	document.getElementById("result_category").innerText = parseCategory;
	document.getElementById("result_advice").innerText = advice[category][pi];
	document.getElementById("result_phrase").innerText = parsePhraseArray.join(" / ");
	// document.getElementById("result_img").src = "img/grade/" + imgNum + ".png";
	// document.getElementById("result_point").innerText =
	// 	parseCategory + "度：" + Math.round(point * 100) + "点";
	//デフォルト文を消し、結果文を表示
	document.getElementById("result_default").classList.add("exit-erase");
	document.getElementById("result_response").classList.remove("exit-erase");
}




//=====================================
//測定結果表示
//=====================================
	const diagnoseBt = document.getElementById("diagnose_bt");
	const diagAtention = document.getElementById("diag_caution");
	//ボタンにPOSTのイベントリスナーを付与
	diagnoseBt.addEventListener("click", function() {
		if (recText != "") {
			requestAPIKey();
			// location.href = 'result.html';
			// document.location.assign('result.html');
			diagAtention.classList.add("after-materialize");
		} else {
			diagAtention.classList.remove("after-materialize");
		}
	});

	document
		.getElementById("one_more_game_bt")
		.addEventListener("click", function() {
			location.reload();
			scrollTop(0, 0);
		});
















