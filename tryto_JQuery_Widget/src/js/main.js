/* global jQuery */
/* eslint no-console:0 */
(function ($) {
    "use strict";

    $(function () {
        var obj1, obj2, obj3;
        $("#myWidget1").myWidget();
        obj1 = $("#myWidget1").data("test-myWidget");
        obj1.setContent("hello obj1");
        obj2 = $("#myWidget2").myWidget({content: "fuga"}).data("test-myWidget");
        obj2.setContent("Hello obj2");
        obj3 = $("#myWidget3").myWidget({
            content: "fuga",
            onUpdate: function () {
                console.log("更新されました");
            }
        }).data("test-myWidget");
        obj3.setContent("こんにちは。obj3");
    });
})(jQuery);
