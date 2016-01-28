module.exports = function (grunt) {

    grunt.config.set('concurrent', {
        dev: {
            options: {
                logConcurrentOutput: true
            },
            tasks: ['watch:assets', 'watch:styles', 'watch:livereload', 'connect:dev']
        }
    });

    grunt.loadNpmTasks('grunt-concurrent');
};
