<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// Categoria
Route::resource('/categoria', 'CategoriaController');
// producto
Route::resource('/producto', 'ProductoController');
// color
Route::resource('/color', 'colorController');
// color
Route::resource('/stock', 'colorStockController');
// imagen
Route::resource('/imagen', 'imagenColorController');
// cupon
Route::resource('/cupon', 'CuponController');
// cupon
Route::resource('/oferta', 'OfertaController');

Route::resource('/favoritos', 'FavoritoController');

Route::resource('/carrito', 'carritoController');

Route::resource('/fondo', 'fondoController');


Route::resource('/menu', 'MenuController');

Route::get('/menuCliente', 'MenuController@menuCliente');

