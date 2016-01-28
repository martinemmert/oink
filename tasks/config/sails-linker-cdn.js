module.exports = function (grunt) {

    grunt.config.set('sails-linker-cdn', {
        cdnJS: {
            options: {
                startTag: '<!--JS:CDN:START-->',
                endTag: '<!--JS:CDN:END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">'
            },
            files: {
                '.tmp/index.html': require('../pipeline').cdnJS
            }
        },
        buildCdnJS: {
            options: {
                startTag: '<!--JS:CDN:START-->',
                endTag: '<!--JS:CDN:END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">'
            },
            files: {
                'build/index.html': require('../pipeline').cdnJS
            }
        },
        cdnStyles: {
            options: {
                startTag: '<!--CSS:CDN:START-->',
                endTag: '<!--CSS:CDN:END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">'
            },
            files: {
                '.tmp/index.html': require('../pipeline').cdnStyles
            }
        },
        buildCdnStyles: {
            options: {
                startTag: '<!--CSS:CDN:START-->',
                endTag: '<!--CSS:CDN:END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">'
            },
            files: {
                'build/index.html': require('../pipeline').cdnStyles
            }
        }
    });

    grunt.loadNpmTasks('grunt-sails-linker-cdn');
};