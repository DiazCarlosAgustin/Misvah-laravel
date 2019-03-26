<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/contacto',function(){
   return view('contacto');
});

Route::get('/acceder',function(){
   return view('acceder');
});

Route::get('/registrarse',function(){
   return view('registrarse');
});

Route::get('/como_llegar',function(){
   return view('como-llegar');
});
