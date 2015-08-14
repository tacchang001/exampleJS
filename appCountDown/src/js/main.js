(function ($) {
    'use strict';

    var program1 = new Program(1, "#upper");
    var program2 = new Program(2, "#middle");
    var program3 = new Program(3, "#lower");

    $(function () {
        program1.countdown();
        program2.countdown();
        program3.countdown();

        console.log('DOM ready');
    });

    console.log($('title').text() + ' initialized');

}(jQuery));
