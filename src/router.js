/*global define*/
/*jslint nomen: true*/
// Filename: router.js
define([
    "jquery",
    "underscore",
    "backbone",
    "views/index/index",
    "views/error/e404"
], function ($, _, Backbone, HomeView, E404) {

    //////////////////////////////////////////////////////////////////////
    "use strict";
    //////////////////////////////////////////////////////////////////////
    var AppRouter = Backbone.Router.extend({
            routes: {
                "": "index",
                "*actions": "404"
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
            //  Index View:
            //  This is our primary landing page
            //  offered @ root!
            ///////////////////////////////////////////////////////////////////
            app_router.on("route:index", function (
                actions) {
                if (!obj.homeView) {
                    obj.homeView = new HomeView();
                }

                obj.homeView.render();

            });

            ///////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////
            //  Index View:
            //  This is our primary landing page
            //  offered @ root!
            ///////////////////////////////////////////////////////////////////
            app_router.on("route:404", function (
                actions) {
                if (!obj.e404) {
                    obj.e404 = new E404();
                }

                obj.e404.render();

            });
            
            Backbone.history.start({
                pushState: false
            });
        };

    return {
        initialize: initialize
    };
});
