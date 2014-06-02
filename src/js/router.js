/*global define*/
/*jslint nomen: true*/
// Filename: router.js
define([
    "jquery",
    "underscore",
    "backbone",
    "views/index/index"
], function ($, _, Backbone, HomeView) {

    //////////////////////////////////////////////////////////////////////
    "use strict";
    //////////////////////////////////////////////////////////////////////
    var AppRouter = Backbone.Router.extend({
            routes: {
                "": "index"
            }
        }),

        //////////////////////////////////////////////////////////////////////
        /*Not in love with how this works,
         *But I need an object to exist everytime the router is hit
         *that way I"m not constantly creating new views.
         *
         */ //////////////////////////////////////////////////////////////////
        obj = {},

        initialize = function () {
            var app_router = new AppRouter();

            ///////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////
            //  Default View:
            //  Catch everything that doesn"t match
            //  another route
            ///////////////////////////////////////////////////////////////////
            app_router.on("route:index", function (
                actions) {
                if (!obj.homeView) {
                    obj.homeView = new HomeView();
                }

                obj.homeView.render();

            });

            Backbone.history.start({
                pushState: false
            });
        };

    return {
        initialize: initialize
    };
});
