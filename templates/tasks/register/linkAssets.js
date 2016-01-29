module.exports = function (grunt) {
    grunt.registerTask('devAssetsLinker', [
        'sails-linker-cdn:cdnJS',
        'sails-linker-cdn:cdnStyles',
        'sails-linker:vendorJS',
        'sails-linker:vendorStyles',
        'sails-linker:appJS',
        'sails-linker:appStyles'
    ]);

    grunt.registerTask('buildAssetsLinker', [
        'sails-linker-cdn:buildCdnJS',
        'sails-linker-cdn:buildCdnStyles',
        'sails-linker:buildVendorJS',
        'sails-linker:buildVendorStyles',
        'sails-linker:buildAppJS',
        'sails-linker:buildAppStyles'
    ]);
};