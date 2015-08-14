/**
 *
 * @type {Function}
 */
var TimeCounter = (function () {

    function TimeCounter(targetTime) {
        this.id = -1;
        TimeCounter.prototype.setTargetTime.call(this, targetTime);
    }

    TimeCounter.prototype.start = function (callback, interval) {
        this.id = setInterval(callback, interval);
    };

    TimeCounter.prototype.stop = function () {
        clearInterval(this.id);
    };

    TimeCounter.prototype.setTargetTime = function (targetTime) {
        this.targetTime = targetTime;
        var now = new Date();
        console.log("現在: " + now);
        console.log("差分: " + (targetTime - now));
    };

    TimeCounter.prototype.getRemainString = function () {
        var remain = this.getRemainSeconds();
        var a_day = 24 * 60 * 60 * 1000;
        var d = Math.round(remain / a_day);
        var h = Math.round((remain % a_day) / (60 * 60 * 1000));
        var m = Math.round((remain % a_day) / (60 * 1000)) % 60;
        var s = Math.round((remain % a_day) / 1000) % 60 % 60;
        return toDoubleDigits(h) + ":" + toDoubleDigits(m) + ":" + toDoubleDigits(s);
    };

    TimeCounter.prototype.getRemainSeconds = function () {
        var now = new Date();
        return this.targetTime.getTime() - now.getTime();
    };

    TimeCounter.prototype.getTargetTime = function () {
        return this.targetTime;
    };

    function toDoubleDigits(num) {
        var ret;
        if (isNaN(num)) return "00";
        if (num < 0) {
            num *= -1;
        }
        if (num < 10) {
            ret = "0" + num;
        }
        else {
            ret = num;
        }
        return ret;
    }

    return TimeCounter;
})();
