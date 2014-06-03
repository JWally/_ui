/*
require.config({
    "paths": {
        "jquery": "bower_components/jquery/dist/jquery.min",
        "jquery.bootstrap": "bower_components/bootstrap/dist/js/bootstrap.min",
        "underscore": "bower_components/lodash/dist/lodash.compat.min",
        "backbone": "bower_components/backbone/backbone",
        "hogan": "bower_components/hogan/web/builds/2.0.0/hogan-2.0.0.amd",
        "templates": "template/all",
        "setup": "setup",
        "pubsub": "bower_components/pubsub/pubsub"
    },
    "shim": {
        "backbone": {
            "deps": ["underscore", "jquery"],
            "exports": "Backbone"
        },
        "jquery.bootstrap": {
            "deps": ["jquery"]
        },
        "templates": {
            "deps": ["hogan"]
        }
    }
});
*/

require([
    // Load our app module and pass it to our definition function
    "app"
], function (App) {
    App.initialize();
});
