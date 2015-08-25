(function ($) {
    'use strict';

    var programs = [];
    programs[programs.length] = new Program(1, "#upper");
    programs[programs.length] = new Program(2, "#middle");
    programs[programs.length] = new Program(3, "#lower");

    $(function () {
        var now = new Date();
        update1();

        function update1(json) {
            programs[0].load(update2);
        }

        function update2(json) {
            programs[0].setData(now, json);
            programs[1].load(update3);
        }

        function update3(json) {
            programs[1].setData(now, json);
            programs[2].load(onLoadedJSON);
        }

        function onLoadedJSON(json) {
            programs[2].setData(now, json);
            afterJSONLoaded();

        }

        function afterJSONLoaded() {
            var id = setInterval(function () {
                var ended = true;
                var now = new Date();
                for (var i = 0; i < programs.length; i++) {
                    if (programs[i].getProgramsCount() > 0) {
                        ended = false;

                        // (残り1秒を切ったら)次のプログラムへ切り替える
                        if (programs[i].getRemainSeconds(now) <= 1) {
                            programs[i].deleteFirst();
                        }

                        $(programs[i].areaName).text(programs[i].getRemainString(now) + " " + programs[i].getTitle());

                        if (i === 0) {
                            // subが3に指定されている時は(隠していた)黄を出す
                            if (programs[0].isParallel()) {
                                $("#sub1").text(programs[i].getRemainString(now) + " " + programs[i].getTitle());
                                $("#sub1").css("z-index", 5/* 最上位 */);
                            } else {
                                $("#sub1").text("隠す");
                                $("#sub1").css("z-index", 1/* 最上位 */);
                            }
                        }
                    }
                }

                if (ended) clearInterval(id);
            }, 1000);
        }

        console.log('DOM ready');
    });

    console.log($('title').text() + ' initialized');

}(jQuery));
