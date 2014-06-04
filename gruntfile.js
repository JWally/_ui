var hogan = require("hogan.js");


module.exports = function (grunt) {
    grunt.initConfig({
        "pkg": "package.json",
        "jshint": {
            "files": [
                "src/**/*.js",
                "!src/bower_components/**",
                "!src/template/all.js",
                "!src/app.build.js",
                "!src/main.min.js"
            ],
            "options": {
                "quotmark": "double",
                "camelcase": false,
                "curly": true,
                "eqeqeq": true,
                "indent": 4,
                "newcap": true,
                "noempty": true,
                "nonew": true,
                "trailing": true,
                "maxlen": 80,
                "white": true
            }
        },
        "jsbeautifier": {
            "default": {
                src: [
                    "gruntfile.js",
                    "src/js/**/*.js",
                    "src/**/*.html",
                    "!src/js/template/all.js"
                ]
            },
            "options": {
                "html": {
                    "brace_style": "collapse",
                    "indent_char": " ",
                    "indent_scripts": "keep",
                    "indent_size": 4,
                    "max_preserve_newlines": 10,
                    "preserve_newlines": true,
                    "unformatted": ["a", "sub", "sup", "b", "i",
                        "u"
                    ],
                    "wrap_line_length": 0
                },
                "js": {
                    "brace_style": "collapse",
                    "break_chained_methods": false,
                    "e4x": false,
                    "eval_code": false,
                    "indent_char": " ",
                    "indent_level": 0,
                    "indent_size": 4,
                    "indent_with_tabs": false,
                    "jslint_happy": true,
                    "keep_array_indentation": false,
                    "keep_function_indentation": false,
                    "max_preserve_newlines": 10,
                    "preserve_newlines": true,
                    "space_before_conditional": true,
                    "space_in_paren": false,
                    "unescape_strings": false,
                    "wrap_line_length": 70
                }
            }
        },
        "hogan": {
            // Compile all html templates into `all.js`,
            // naming it like this `parent folder/file name`
            "web": {
                "templates": "src/template/**/*.html",
                "output": "src/template/all.js",
                "binderName": "amd",
                "nameFunc": function (fileName) {
                    return fileName.replace(/^.*_html\//gi, "").replace(
                        ".html", "");
                }
            }
        },
        "shell": {
            "prod": {
                "command": "node node_modules/grunt-contrib-requirejs/node_modules/requirejs/bin/r.js -o src/app.build.js",
                "command": "rm -rf prod",
                "command": "mkdir prod",
                "command": "gzip -9 -c src/index.html > prod/index.html",
                "command": "gzip -9 -c src/main.min.js > prod/main.min.js",
                "command": "gzip -9 -c src/main.min.css > prod/main.min.css"
            },
            "dev": {
                "command": "node node_modules/grunt-contrib-requirejs/node_modules/requirejs/bin/r.js -o src/app.build.js optimize=none"
            }
        },
        "sass": {
            "prod": {
                "options": {
                    "outputStyle": "compressed",
                },
                "files": {
                    "src/main.min.css": "src/sass/main.scss"
                }
            },
            "dev": {
                "files": {
                    "src/main.min.css": "src/sass/main.scss"
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-hogan');
    grunt.loadNpmTasks("grunt-jsbeautifier");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-shell");

    grunt.registerTask("prod", [
        "jsbeautifier:default",
        "jshint",
        "hogan:web",
        "sass:prod",
        "shell:prod"
    ]);

    grunt.registerTask("dev", [
        "jsbeautifier:default",
        "jshint",
        "hogan:web",
        "sass:dev",
        "shell:dev"
    ]);

    grunt.task.registerTask("foo", "Set Up for templating",
        function (arg1, arg2) {

        });



}
