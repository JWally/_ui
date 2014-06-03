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
            // Build our custom hogan maker
            "awesome": {
                "templates": "etc/grunt-hogan/view/awesome.hogan",
                "output": "etc/grunt-hogan/binder/awesome.js",
                "binderName": "bootstrap"
            },
            // Compile all html templates into `brother.js`,
            // naming it like this `parent folder/file name`
            "modTarget": {
                "templates": "src/template/**/*.html",
                "output": "src/template/all.js",
                "binderName": "amd",
                "nameFunc": function (fileName) {
                    return fileName.replace(/^.*_html\//gi, "").replace(
                        ".html", "");
                }
            }
        },
        // Options for building out the requirejs into
        // a single file
        "requirejs": {
            "compile": {
                "options": {
                    "baseUrl": "src",
                    //                    "mainConfigFile": "src/app.build.js",
                    "name": "main",
                    "out": "main.min.js"
                }
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-requirejs");
    grunt.loadNpmTasks('grunt-hogan');
    grunt.loadNpmTasks("grunt-jsbeautifier");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-requirejs");
    grunt.registerTask("default", ["jsbeautifier:default",
        "jshint",
        "hogan:modTarget",
        "requirejs"
    ]);
}
