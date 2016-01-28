/**
 * Asset Pipeline
 * ---------------------------------------------------
 *
 * Insert the _relative_ paths to your style and script assets here which will be linked into your index.html
 * Example: ./src/assets/js/my-file.js => /assets/js/my-file.js
 * You can use globbing here - of course!
 */
module.exports = {
    cdnStyles: [
        // css libraries from Content Delivery Networks (cdn)
        // location: <head></head>
        // example: 'https://code.jquery.com/jquery-2.2.0.min.js'
    ],
    vendorStyles: [
        // vendor styles
        // note: they will not be merged into your production css
        // use bower(filepath) to prepend the path with assets/bower_components/
        // location: <head></head>
        // example: bower('bootstrap/dist/css/bootstrap.min.css')
    ],
    appStyles: [
        // your styles
        // note: they will be merged and compressed cssmin during build
        // location: <head></head>
        // example: 'assets/css/**/*.css'
    ],
    cdnJS: [
        // javascript libraries from Content Delivery Networks (cdn)
        // location: <head></head>
        // example: 'https://code.jquery.com/jquery-2.2.0.min.js'
    ],
    vendorJS: [
        // vendor javascript libraries
        // note: they will not be merged into your production javascript
        // use bower(filepath) to prepend the path with assets/bower_components/
        // location: <head></head>
        // example: bower('jquery/dist/jquery.min.js')
    ],
    appJS: [
        // your javascript
        // note: they will be merged and compressed with uglify during build
        // the main.js will be included at last to stitch your app together
        // location: bottom <body></body>
        'assets/js/**/!(main).js',
        'assets/js/**/main.js'
    ]
};

function bower(path) {
    return "assets/bower_components/" + path;
}