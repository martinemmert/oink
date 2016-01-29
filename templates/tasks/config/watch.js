/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function (grunt) {

    grunt.config.set('watch', {
        assets: {
            files: ['src/index.html', 'tasks/pipeline.js'],
            tasks: ['sass:dev', 'autoprefixer:dev', 'copy:styles', 'copy:assets', 'devAssetLinker']
        },
        styles: {
            files: ['src/assets/css/**/*.scss'],
            tasks: ['sass:dev', 'autoprefixer:dev', 'copy:styles']
        },
        livereload: {
            options: {livereload: true},
            files: ['.tmp/assets/css/**/*.css']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
