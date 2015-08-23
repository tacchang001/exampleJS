/* global jQuery */
/* eslint no-console:0 */
(function ($) {
    "use strict";

    $(function () {
        var data = [
            {name: 'asheep', place: 'america'},
            {name: 'bsheep', place: 'britain'}
        ];
        $('#tmpl_info').tmpl(data).appendTo('#main');
    });
})(jQuery);
