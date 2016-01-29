module.exports = function (grunt) {

    grunt.config.set('sails-linker', {
        vendorJS: {
            options: {
                startTag: '<!--JS:VENDOR:START-->',
                endTag: '<!--JS:VENDOR:END-->',
                fileTmpl: '<script src="%s" type="text/javascript"></script>',
                appRoot: './src',
                relative: true
            },
            files: {
                '.tmp/index.html': require('../pipeline').vendorJS.map(function (path) {
                    return './src/' + path;
                })
            }
        },
        appJS: {
            options: {
                startTag: '<!--JS:APP:START-->',
                endTag: '<!--JS:APP:END-->',
                fileTmpl: '<script src="%s" type="text/javascript"></script>',
                appRoot: './src',
                relative: true
            },
            files: {
                '.tmp/index.html': require('../pipeline').appJS.map(function (path) {
                    return './src/' + path;
                })
            }
        },
        buildVendorJS: {
            options: {
                startTag: '<!--JS:VENDOR:START-->',
                endTag: '<!--JS:VENDOR:END-->',
                fileTmpl: '<script src="%s" type="text/javascript"></script>',
                appRoot: 'build',
                relative: true
            },
            files: {
                'build/index.html': require('../pipeline').vendorJS.map(function (path) {
                    return 'build/' + path;
                })
            }
        },
        buildAppJS: {
            options: {
                startTag: '<!--JS:APP:START-->',
                endTag: '<!--JS:APP:END-->',
                // if you are using requirejs, edit this tag
                fileTmpl: '<script src="%s" type="text/javascript"></script>',
                appRoot: 'build',
                relative: true
            },
            files: {
                'build/index.html': 'build/assets/js/main.min.js'
            }
        },
        vendorStyles: {
            options: {
                startTag: '<!--CSS:VENDOR:START-->',
                endTag: '<!--CSS:VENDOR:END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: 'src',
                relative: true
            },
            files: {
                '.tmp/index.html': require('../pipeline').vendorStyles.map(function (path) {
                    return 'src/' + path;
                })
            }
        },
        appStyles: {
            options: {
                startTag: '<!--CSS:APP:START-->',
                endTag: '<!--CSS:APP:END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: '.tmp',
                relative: true
            },
            files: {
                '.tmp/index.html': require('../pipeline').appStyles.map(function (path) {
                    return '.tmp/' + path;
                })
            }
        },
        buildVendorStyles: {
            options: {
                startTag: '<!--CSS:VENDOR:START-->',
                endTag: '<!--CSS:VENDOR:END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: 'build',
                relative: true
            },
            files: {
                'build/index.html': require('../pipeline').vendorStyles.map(function (path) {
                    return 'build/' + path;
                })
            }
        },
        buildAppStyles: {
            options: {
                startTag: '<!--CSS:APP:START-->',
                endTag: '<!--CSS:APP:END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: 'build',
                relative: true
            },
            files: {
                'build/index.html': [require('../pipeline').appStyles.map(function (path) {
                    return 'build/' + path
                }), 'build/assets/css/styles.min.css']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sails-linker');
};