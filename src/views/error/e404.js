/*File: src/views/error/e404.js*/
/*global define*/

define([
    "jquery",
    "underscore",
    "backbone",
    "templates"
], function ($, _, Backbone, templates) {

    "use strict";
    var e404 = Backbone.View.extend({

        el: $("#page"),

        render: function () {
            var rslt = templates["src/template/error/404"]({});
            this.$el.html(rslt);
        }

    });
    return e404;
});
