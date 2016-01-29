module.exports = function (grunt) {

    // put your additional load paths inside this array
    var loadPaths = [];

    grunt.config.set('sass', {
        options: {
            includePaths: loadPaths,
            lineNumbers: true,
            outputStyle: "expanded"
        },
        dev: {
            files: {
                '.tmp/assets/css/styles.css': 'src/assets/css/importer.scss'
            }
        },
        build: {
            files: {
                'build/assets/css/styles.min.css': 'src/assets/css/importer.scss'
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
};
