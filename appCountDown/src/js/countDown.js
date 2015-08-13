/**
 *
 * @param num
 * @returns {*}
 */
function set2fig(num) {
    // 数値が1桁だったら2桁の文字列にして返す
    var ret;
    if (num < 10) {
        ret = "0" + num;
    }
    else {
        ret = num;
    }
    return ret;
}

/**
 *
 * @param num
 * @returns {*}
 */
function isNumOrZero(num) {
    // 数値でなかったら0にして返す
    if (isNaN(num)) {
        return 0;
    }
    return num;
}

/**
 *
 */
function showCountdown() {
    // 現在日時を数値(1970-01-01 00:00:00からのミリ秒)に変換
    var nowDate = new Date();
    var dnumNow = nowDate.getTime();

    // 指定日時を数値(1970-01-01 00:00:00からのミリ秒)に変換
    var inputYear = document.getElementById("userYear").value;
    var inputMonth = document.getElementById("userMonth").value - 1;
    var inputDate = document.getElementById("userDate").value;
    var inputHour = document.getElementById("userHour").value;
    var inputMin = document.getElementById("userMin").value;
    var inputSec = document.getElementById("userSec").value;
    var targetDate = new Date(isNumOrZero(inputYear), isNumOrZero(inputMonth), isNumOrZero(inputDate), isNumOrZero(inputHour), isNumOrZero(inputMin), isNumOrZero(inputSec));
    var dnumTarget = targetDate.getTime();

    // 表示を準備
    var dlYear = targetDate.getFullYear();
    var dlMonth = targetDate.getMonth() + 1;
    var dlDate = targetDate.getDate();
    var dlHour = targetDate.getHours();
    var dlMin = targetDate.getMinutes();
    var dlSec = targetDate.getSeconds();
    var msg1 = "期限の<span>" + dlYear + "/" + dlMonth + "/" + dlDate + " " + set2fig(dlHour) + ":" + set2fig(dlMin) + ":" + set2fig(dlSec);

    // 引き算して日数(ミリ秒)の差を計算
    var diff2Dates = dnumTarget - dnumNow;
    if (dnumTarget < dnumNow) {
        // 期限が過ぎた場合は -1 を掛けて正の値に変換
        diff2Dates *= -1;
    }

    // 差のミリ秒を、日数・時間・分・秒に分割
    var dDays = diff2Dates / ( 1000 * 60 * 60 * 24 );   // 日数
    diff2Dates = diff2Dates % ( 1000 * 60 * 60 * 24 );
    var dHour = diff2Dates / ( 1000 * 60 * 60 );   // 時間
    diff2Dates = diff2Dates % ( 1000 * 60 * 60 );
    var dMin = diff2Dates / ( 1000 * 60 );   // 分
    diff2Dates = diff2Dates % ( 1000 * 60 );
    var dSec = diff2Dates / 1000;   // 秒
    var msg2 = Math.floor(dDays) + "日" + Math.floor(dHour) + "時間" + Math.floor(dMin) + "分" + Math.floor(dSec) + "秒";
};