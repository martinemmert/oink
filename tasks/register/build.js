module.exports = function (grunt) {
    grunt.registerTask('build', [
        'clean:build',
        'sass:build',
        'autoprefixer:build',
        'cssmin:build',
        'uglify:build',
        'copy:build',
        'buildAssetsLinker',
        //'htmlmin'
    ]);

    grunt.registerTask('serve-build', ['build', 'connect:build']);
};