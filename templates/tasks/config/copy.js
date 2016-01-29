/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 *        https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function (grunt) {

    grunt.config.set('copy', {
        assets: {
            files: [
                {
                    expand: true,
                    cwd: 'src',
                    src: '!(bower_components|img|js)/*.!(sass|scss)',
                    dest: '.tmp'
                },
                {
                    '.tmp/index.html': 'src/index.html'
                }
            ]

        },
        styles: {
            files: [{
                expand: true,
                cwd: 'src/assets',
                src: 'css/*.!(sass|scss)',
                dest: '.tmp/assets'
            }]
        },
        build: {
            files: [
                {expand: true, cwd: 'src', src: require('../pipeline').vendorJS, dest: 'build'},
                {expand: true, cwd: 'src', src: require('../pipeline').vendorStyles, dest: 'build'},
                {expand: true, cwd: 'src', src: ['**/*', '!**/bower_components/**', '!**/js/**', '!**/*.scss'], dest: 'build'},
                {'build/index.html': 'src/index.html'}
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};
