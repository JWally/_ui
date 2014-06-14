({
    "baseUrl": "../src",
    "include": "main",
    "name": "../bower_components/almond/almond",
    "out": "../src/main.min.js",
    "optimizeCss": "standard",
    "paths": {
        "jquery": "../bower_components/jquery/dist/jquery.min",
        "jquery.bootstrap": "../bower_components/bootstrap/dist/js/bootstrap.min",
        "underscore": "../bower_components/lodash/dist/lodash.compat.min",
        "backbone": "../bower_components/backbone/backbone",
        "hogan": "../node_modules/hogan.js/web/builds/2.0.0/hogan-2.0.0.min.amd",
        "templates": "template/all",
        "setup": "setup",
        "pubsub": "../bower_components/pubsub/pubsub"
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
})
