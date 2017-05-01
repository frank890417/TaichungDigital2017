const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');
require('laravel-blade-jade');
require('laravel-elixir-jade');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

elixir((mix) => {
    mix.sass('*.sass')
       .webpack([
          'app.js'
        ],'public/js/app.js')
       .jade({
        baseDir: './resources',
        blade: true,
        dest: '/views/',
        pretty: true,
        search: '**/*.jade',
        src: '/blade/'
    });
});
