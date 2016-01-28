/**
 * Compress CSS files.
 *
 * ---------------------------------------------------------------
 *
 * Minifies css files and places them into .tmp/public/min directory.
 *
 * For usage docs see:
 *        https://github.com/gruntjs/grunt-contrib-cssmin
 */
module.exports = function (grunt) {

    grunt.config.set('htmlmin', {
        options: {
            removeComments: true,
            collapseWhitespace: true
        },
        build: {
            files: [{expand: true, cwd: 'build', src: '**/*.html', dest: 'build'}]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
};
