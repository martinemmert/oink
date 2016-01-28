module.exports = function (grunt) {

    var serveStatic = require('serve-static'),
        lrSnippet   = require('connect-livereload')();

    grunt.config.set('connect', {
        dev: {
            options: {
                port: 9000,
                hostname: "*",
                open: true,
                keepalive: true,
                middleware: function (connect, options) {
                    return [
                        lrSnippet,
                        serveStatic('.tmp'),
                        serveStatic('src')
                    ];
                }
            }
        },
        build: {
            options: {
                port: 9000,
                hostname: "*",
                open: true,
                keepalive: true,
                middleware: function (connect, options) {
                    return [
                        serveStatic('build')
                    ];
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};
