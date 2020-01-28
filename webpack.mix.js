const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .styles('node_modules/bootstrap/dist/css/bootstrap.min.css','public/css/bootstrap.css')
   .styles('node_modules/mdbootstrap/css/mdb.min.css','public/css/mdb.css')
   .styles('node_modules/swiper/css/swiper.min.css','public/css/swiper.css')
   .js( 'node_modules/jquery/dist/jquery.js','public/jquery.js');

mix.combine([
   'node_modules/jquery/dist/jquery.js',
   'node_modules/mdbootstrap/js/mdb.min.js'
],'public/mdbootstrap.js');

mix.combine([
   'node_modules/jquery/dist/jquery.js',
   'node_modules/bootstrap/dist/js/bootstrap.min.js'
],'public/bootstrap.js');

mix.combine([
   'node_modules/jquery/dist/jquery.js',
   'node_modules/swiper/js/swiper.min.js'
],'public/js/swiper.js');