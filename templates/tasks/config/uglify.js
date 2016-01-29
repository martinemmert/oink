/**
 * Minify files with UglifyJS.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side javascript `assets`.
 *
 * For usage docs see:
 *        https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function (grunt) {

    grunt.config.set('uglify', {
        build: {
            src: require('../pipeline').appJS.map(function (path) {
                return 'src/' + path;
            }),
            dest: 'build/assets/js/main.min.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};
