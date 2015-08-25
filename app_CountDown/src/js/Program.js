var Program = (function () {

    function Program(no, areaName) {
        this.no = no;
        this.areaName = areaName;
        this.data = [];
    }

    Program.prototype.setData = function (baseTime, json) {
        for (var i = 0; i < json.length; i++) {
            this.data[i] = new Object({
                "time": Program.getOffsetTime(baseTime, json[i].time),
                "duration": json[i].duration,
                "title": json[i].title,
                "sub": json[i].sub
            });
            console.log(JSON.stringify(this.data[i]));
        }
        console.log("loaded JSON for " + this.areaName);
    };

    Program.prototype.load = function (callback) {
        var filename = "program" + this.getNo() + ".json";
        $.getJSON(filename, callback);

    };

    Program.prototype.getRemainString = function (now) {
        var remain = this.getRemainSeconds(now);
        var a_day = 24 * 60 * 60 * 1000;
        var d = Math.round(remain / a_day);
        var h = Math.round((remain % a_day) / (60 * 60 * 1000));
        var m = Math.round((remain % a_day) / (60 * 1000)) % 60;
        var s = Math.round((remain % a_day) / 1000) % 60 % 60;
        return toDoubleDigits(h) + ":" + toDoubleDigits(m) + ":" + toDoubleDigits(s);
    };

    Program.prototype.getRemainSeconds = function (now) {
        return this.getEndTime().getTime() - now.getTime();
    };

    Program.prototype.deleteFirst = function () {
        this.data.splice(0, 1);
    };

    Program.getOffsetTime = function (now, timeStr) {
        var times = timeStr.split(":");
        if (times.length != 3) {
            throw new Error("時刻フォーマット違反です");
        }

        var offset = new Date(now);
        offset.setHours(offset.getHours() + parseInt(times[0], 10));
        offset.setMinutes(offset.getMinutes() + parseInt(times[1], 10));
        offset.setSeconds(offset.getSeconds() + parseInt(times[2], 10));
        return offset;
    };

    Program.prototype.getProgramsCount = function () {
        return this.data.length;
    };

    Program.prototype.getEndTime = function () {
        if (this.data.length <= 0) throw new Error("プログラムはありません");

        var t = new Date(this.data[0].time);
        t.setSeconds(this.data[0].time.getSeconds() + this.data[0].duration);
        return t;
    };

    Program.prototype.getTitle = function () {
        if (this.data.length <= 0) throw new Error("プログラムはありません");

        return this.data[0].title;
    };

    Program.prototype.isParallel = function () {
        if (this.data.length <= 0) throw new Error("プログラムはありません");

        return (this.data[0].sub === 3);
    };

    Program.prototype.printData = function () {
        console.log(this.data);
    };

    Program.prototype.getNo = function () {
        return this.no;
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

    return Program;
})();