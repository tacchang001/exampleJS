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
                "title": json[i].title
            });
        }
    }

    Program.prototype.run = function () {
        var filename = "program" + this.getNo() + ".json";
        var now = new Date();
        var this_ = this;
        $.getJSON(filename, function (data) {
            //Program.prototype.setData.call(this, [now, data]);
            this_.setData(now, data);

            var counter = new TimeCounter(this_.getEndTime());
            counter.start(onTimeout, 1000);

            function onTimeout() {

                if (counter.getRemainSeconds() <= 1) {
                    counter.stop();
                    if (this_.getProgramsCount() > 1) {
                        this_.deleteFirst();
                        counter.setTargetTime(this_.getEndTime());
                        counter.start(onTimeout, 1000);
                    }
                }

                console.log(counter.getRemainString());
                $(this_.areaName).text(counter.getRemainString() + " " + this_.getTitle());
            }
        });

    }

    Program.prototype.deleteFirst = function () {
        this.data.splice(0, 1);
    }

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
    }

    Program.prototype.getProgramsCount = function () {
        return this.data.length;
    }

    Program.prototype.getEndTime = function () {
        if (this.data.length <= 0) throw new Error("プログラムはありません");

        var t = new Date(this.data[0].time);
        t.setSeconds(this.data[0].time.getSeconds() + this.data[0].duration);
        return t;
    }

    Program.prototype.getTitle = function () {
        if (this.data.length <= 0) throw new Error("プログラムはありません");

        return this.data[0].title;
    }

    Program.prototype.printData = function () {
        console.log(this.data);
    }

    Program.prototype.getNo = function () {
        return this.no;
    }

    return Program;
})();