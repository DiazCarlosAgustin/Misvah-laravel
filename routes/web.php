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

Route::prefix('auth')->group(function (){
   Route::get('init','appController@init');

   Route::post('login','appController@login');
   Route::post('register','appController@register');
   Route::post('logout','appController@logout');
});

Route::get('/', function () {
    return view('index');
});

Route::get('/contacto',function(){
   return view('contacto');
});

Route::get('/acceder',function(){
   return view('auth.login');
});

Route::get('/registrarse',function(){
   return view('auth.register');
});

Route::get('/tienda',function(){
   return view('tienda');
});
Route::get('/carrito',function(){
   return view('carrito');
});
Route::get('/producto/{id}',function(){
   return view('producto');
});
Route::get('/favoritos',function(){
   return view('UserFavorito');
});

//rutas de administrador
// Route::group(['middleware' => 'admin'], function () {
   Route::get('/admin/index',function(){
      return view('admin\adminIndex');
   });
   Route::get('/admin/categorias',function(){
      return view('admin\categorias');
   });
   Route::get('/admin/editar_categoria/{id}','CategoriaController@show');
   Route::get('/admin/nueva_categoria',function(){
      return view('admin\nuevaCategoria');
   });
   Route::get('/admin/productos',function(){
      return view('admin\productos');
   });
   
   Route::get('/admin/editar_producto/{id}','ProductoController@editar');
   Route::get('/admin/ver_producto/{id}','ProductoController@ver');
   
   Route::get('/admin/nuevo_producto',function(){
      return view('admin\nuevoProducto');
   });
   Route::get('/admin/nuevo_color',function(){
      return view('admin\nuevoColor');
   });
   Route::get('/admin/pedidos',function(){
      return view('admin\pedidos');
   });
   Route::get('/admin/ventas',function(){
      return view('admin.ventas');
   });
   
   Route::get('/admin/elementos',function(){
      return view('admin.ElementsUI');
   });
   Route::get('/admin/ventas-local',function(){
      return view('admin.ventasLocal');
   });
// });


Route::resource('api/menu','MenuController');
Route::post('api/newMenu','MenuController@store');
Auth::routes();
