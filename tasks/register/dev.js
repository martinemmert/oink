module.exports = function (grunt) {
    grunt.registerTask('dev', [
        'clean:dev',
        'sass:dev',
        'autoprefixer:dev',
        'copy:styles',
        'copy:assets',
        'devAssetsLinker',
        'concurrent:dev'
    ]);
};