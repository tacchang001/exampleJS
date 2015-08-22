/* global jQuery */
/* eslint no-console:0 */
(function ($) {
    "use strict";

    $.widget("test.myWidget", {
        options: {
            content: "hoge",
            onUpdate: function (e) {
                console.log(e.type);
            }
        },

        _create: function () {
            console.log("_create");
            this.id = "00001";
        },

        _init: function () {
            console.log("_init");
            this._update();
        },

        _update: function () {
            var opts = this.options;
            var elm = this.element;
            elm.html(opts.content);
            this._trigger("onUpdate");
        },

        setContent: function (str) {
            this.options.content = str;
            this._update();
        }
    });
})(jQuery);