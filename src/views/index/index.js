define([
    "jquery",
    "underscore",
    "backbone",
    "templates"
], function ($, _, Backbone, templates) {
    "use strict";
    var HomeView = Backbone.View.extend({

        el: $("#page"),

        render: function () {
            var rslt = templates[
                "src/template/index/index"]();
            this.$el.html(rslt);
        }

    });
    return HomeView;
});
