/**
 * Parse CSS and add vendor-prefixed CSS properties using the Can I Use database. Based on Autoprefixer.
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 *    https://github.com/nDmitry/grunt-autoprefixer
 */
module.exports = function (grunt) {
    grunt.config.set('autoprefixer', {
        options: {
            browsers: ['last 2 versions']
        },
        dev: {
            files: {
                '.tmp/assets/css/styles.css': '.tmp/assets/css/styles.css'
            }
        },
        build: {
            files: {
                'build/assets/css/styles.min.css': 'build/assets/css/styles.min.css'
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
};
