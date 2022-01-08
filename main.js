//全ての要素が読まれたら、処理を開始するというJavaScript決まりの文
document.addEventListener('DOMContentLoaded', function () {

    //液晶のinput要素のvalueを取得させたいIDを定義 液晶の要素は1つしかないから IDを取得するというJavaScript決まりの文（何回も使うから定数で定義）
    const valTarget = document.getElementById('js-val-target');

    //初期値は0にしておく 電卓の初期値は0だから（何回も使うから定数で定義）
    valTarget.value = 0;

    //ボタンに付与されているvalueを取得させたいクラスを定義 複数あるから、この方法で取得 JavaScriptの決まりの文（何回も使うから定数で定義）
    const valGet = document.querySelectorAll('.js-val-get');

    //問題・ACボタンのIDを取得 IDを取得するというJavaScript決まりの文（何回も使うから定数で定義）
    const valClear = document.getElementById('js-clear');

    // =のID取得
    const valTotal = document.getElementById('js-total');

    //ボタンに付与されているvalueは複数あるため、ボタンの数ごと処理が必要 そのため、for文を使う
    for (let i = 0; i < valGet.length; i++) {
        // 各ボタンを押したら（clickイベント）
        valGet[i].addEventListener('click', function (e) {            
            //もし最初に0が押されたら
            let thisVal = "";
            console.log(thisVal);
            thisVal += this.value;

            console.log(thisVal);
            console.log(thisVal.slice(0, 1) === 0);
            // if (thisVal.slice(0, 1) = 0) {
            //     console.log('0ですですです');
            // }

            //js-operatorが押された時 flagを変更

            // 今(this)押したinput要素のvalueを、左のクラスに代入(+=)をする
            // valTarget.value += this.value;
            valTarget.value = thisVal;
        });
    }

    // 問題・ACボタンを押したら（clickイベント）→for文は使わない。理由は、ACボタンは複数ないから
    valClear.addEventListener('click', function (e) {
        //問題・ 液晶側のinput要素のvalueに0で直接上書きをする
        valTarget.value = 0;
    });

    // ＝押したら計算をさせる処理 *ここでやっと計算が行われる
    valTotal.addEventListener('click', function (e) {
        // valTarget.value が実際に計算される
        valTarget.value = eval(valTarget.value);
    });    
});