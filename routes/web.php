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

Route::get('/tienda',function(){
   return view('tienda');
});
Route::get('/carrito',function(){
   return view('carrito');
});
Route::get('/producto/{id}',function(){
   return view('producto');
});

//rutas de administrador

Route::get('/admin/index',function(){
   return view('admin\adminIndex');
});
Route::get('/admin/categorias',function(){
   return view('admin\categorias');
});
Route::get('/admin/nueva_categoria',function(){
   return view('admin\nuevaCategoria');
});
Route::get('/admin/productos',function(){
   return view('admin\productos');
});
Route::get('/admin/editar_producto/{id}',function(){
   return view('admin\editarProducto');
});
Route::get('/admin/ver_producto/{id}',function(){
   return view('admin\verProducto');
});
Route::get('/admin/nuevo_producto',function(){
   return view('admin\nuevoProducto');
});
Route::get('/admin/pedidos',function(){
   return view('admin\pedidos');
});
Route::get('/admin/ventas',function(){
   return view('admin.ventas');
});
