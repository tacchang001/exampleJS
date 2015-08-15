(function ($) {
    'use strict';

    $(function () {
        var count = 1;
        var id = setInterval(onTimeout.bind(this, count, "on"), 1000);

        function onTimeout(arg1, arg2) {
            console.log(arg2 + " timeout: " + arg1);
            if (incrementCount() > 5) clearInterval(id);
        }

        function incrementCount() {
            console.log(count);
            return ++count;
        }

        console.log('DOM ready');
    });

    console.log($('title').text() + ' initialized');

}(jQuery));
