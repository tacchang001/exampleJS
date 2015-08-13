/**
 *
 */
(function ($, $g) {
    'use strict';

    $(function () {
        setInterval(function () {
            var now = new Date();
            var s = now.getSeconds();
            if (s % 3 === 0) {
                moveArea("#upper", "#middle", "#lower");
            }
            else if (s % 3 === 1) {
                moveArea("#middle", "#lower", "#upper");
            }
            else {
                moveArea("#lower", "#upper", "#middle");
            }
        }, 1000);

        console.log('DOM ready');
    });

    function moveArea(upper, middle, lower) {
        $(upper).css({top: 0});
        $(middle).css({top: 100});
        $(lower).css({top: 200});
    }

    console.log($('title').text() + ' initialized');

}(jQuery, window));
