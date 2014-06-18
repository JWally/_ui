module.exports = function (grunt) {
    // Initialize this because it tells us where
    // our credentials file is stored...
    var pkg = grunt.file.readJSON("package.json");

    // If the file listed here exists, load it into the
    // `aws` variable
    if (grunt.file.exists(pkg.aws.credentials)) {
        aws = grunt.file.readJSON(pkg.aws.credentials);
    }

    grunt.initConfig({
        "pkg": pkg,
        "aws": aws,
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
            },
            "heros": {
                "templates": "etc/template/**/*.txt",
                "output": "etc/template/all.js",
                "binderName": "nodejs",
            }
        },
        "shell": {
            "prod": {
                "command": [
                    "node node_modules/grunt-contrib-requirejs/node_modules/requirejs/bin/r.js -o src/app.build.js",
                    "rm -rf prod",
                    "mkdir prod",
                    "gzip -9 -c src/index.html > prod/index.html",
                    "gzip -9 -c src/main.min.js > prod/main.min.js",
                    "gzip -9 -c src/main.min.css > prod/main.min.css"
                ].join("&&")
            },
            "dev": {
                "command": "node node_modules/grunt-contrib-requirejs/node_modules/requirejs/bin/r.js -o src/app.build.json optimize=none"
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
        },
        "s3": {
            "options": {
                "key": "<%= aws.key %>",
                "secret": "<%= aws.secret %>",
                "bucket": "NOPER",
                "access": "public-read",
                "headers": {
                    // Two Year cache policy (1000 * 60 * 60 * 24 * 730)
                    "Cache-Control": "max-age=630720000, public",
                    "Expires": new Date(Date.now() + 63072000000)
                        .toUTCString(),
                    "Content-Encoding": "gzip"
                }
            },
            "test": {
                "upload": [{
                    "src": "prod/**.*",
                    "dest": "/"
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-hogan');
    grunt.loadNpmTasks("grunt-jsbeautifier");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-shell");
    grunt.loadNpmTasks("grunt-s3");

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

    grunt.task.registerTask("clone", "Set Up for templating",
        function (template, name, path) {
            var templates = require("./etc/template/all"),
                newFile = (path + "/" + name + ".js");
            newFile = newFile.substr(__dirname.length + 1, newFile.length -
                __dirname.length - 1);

            grunt.file.write(newFile, templates[template]({
                name: name,
                file: newFile
            }))
        });

    grunt.task.registerTask("panic", "nothing", function () {
        console.log(pkg)
    })



}
