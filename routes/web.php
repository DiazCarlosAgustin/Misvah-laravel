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
   $categorias = App::call('App\Http\Controllers\CategoriaController@index');
   $fondo = App::call('App\Http\Controllers\fondoController@fondo');
   $destacados = App::call('App\Http\Controllers\ProductoController@destacados');

   return view('index')
         ->with('categorias',$categorias)
         ->with('fondo',$fondo)
         ->with('destacados',$destacados);
});

Route::get('/contacto',function(){
   return view('contacto');
});

Route::get('/acceder',function(){
   return view('auth.login');
})->middleware('guest');

Route::get('/registrarse',function(){
   return view('auth.register');
})->middleware('guest');

Route::get('/categoria/{id}',function($id){

   // obtengo los productos de la categoria consultada
   $productos = App::call('App\Http\Controllers\ProductoController@tienda', ['id' => $id]);
   // retorna la vista junto a: productos y categorias
   return view('tienda')->with('productos',$productos[0])
                        ->with('categorias',$productos[1]);
});
Route::get('/carrito',function(){
   return view('carrito');
});
Route::get('/producto/{id}',function($id){
   // obtengo el producto consultado
   $producto = App::call('App\Http\Controllers\ProductoController@ver',['id' => $id]);
   // retorno la vista junto al producto y las relaciones 
   return view('producto')->with('producto',$producto);
});
Route::get('/favoritos',function(){
   return view('UserFavorito');
});

/*
|---------------------------------------------------|
|                                                   |
|              RUTAS DE ADMINISTRADOR               |
|                                                   |
|---------------------------------------------------|
*/
// Route::group(['middleware' => 'admin'], function () {
   Route::get('/admin/index',function(){
      return view('admin\adminIndex');
   });
   Route::get('/admin/categorias',function(){
      $categorias = App::call('App\Http\Controllers\CategoriaController@categoriaPaginate');

      return view('admin\categorias')->with('categorias',$categorias)
                                    ->with('back', false);
   });

   Route::get('/admin/categorias/buscar',function(){
      // Obtengo los resultados de la busqueda en categorias
      $categorias = App::call('App\Http\Controllers\CategoriaController@buscar');

      if (is_object($categorias)){
         // En caso de que $categorias sea un objeto retorna la vista con categorias

         // si back es TRUE se hablita la vuelta atras de URL
         return view('/admin/categorias')->with('categorias',$categorias)
                                       ->with('back',true);
      }
      else{

         // en caso de que $categorias no sea un objeto, se guardara en una var el error
         $error = $categorias;

         //  retorno la vista de categorias con el error al buscar
         // si back es TRUE se hablita la vuelta atras de URL
         return view('/admin/categorias')->with('error',$error)
                                       ->with('back',true);
      }

   });


   Route::get('/admin/editar_categoria/{id}',function($id){
      $categoria = App::call('App\Http\Controllers\CategoriaController@show',['id' => $id]);

      return view('admin.editar_categoria')->with('categoria',$categoria);
   });


   Route::get('/admin/nueva_categoria',function(){
      return view('admin\nuevaCategoria');
   });
   Route::get('/admin/productos',function(){
      $productos = App::call('App\Http\Controllers\ProductoController@index');
      return view('/admin/productos')->with('productos',$productos)
                                    ->with('back',false);
   });
   Route::get('/admin/productos/buscar',function(){
      // Obtengo los resultados de la busqueda en productos
      $productos = App::call('App\Http\Controllers\ProductoController@buscar');

      if (is_object($productos)){
         // En caso de que $productos sea un objeto retorna la vista con productos

         // si back es TRUE se hablita la vuelta atras de URL 
         return view('/admin/productos')->with('productos',$productos)
                                       ->with('back',true);
      }
      else{

         // en caso de que $producto no sea un objeto, se guardara en una var el error
         $error = $productos;

         //  retorno la vista de productos con el error al buscar
         // si back es TRUE se hablita la vuelta atras de URL
         return view('/admin/productos')->with('error',$error)
                                       ->with('back',true);
      }
   });

   Route::get('/admin/cupones',function(){
      // obtengo los cupones
      $cupones = App::call('App\Http\Controllers\CuponController@index');

      return view('admin.cupones')->with('cupones',$cupones);
   });

   // Pagina de ofertas
   Route::get('/admin/ofertas',function(){

      // obtengo todas las ofertas -con paginacion-
      $ofertas = App::call('App\Http\Controllers\OfertaController@index');

      // retorno la vista con las ofertas
      return view('admin/ofertas')->with('ofertas',$ofertas);
   });

   Route::get('/admin/ver_producto/{id}','ProductoController@ver');

   Route::get('/admin/editar_producto/{id}',function($id){
      // obtengo el producto y sus relaciones
      $producto = App::call('App\http\Controllers\ProductoController@editar',['id' => $id]);

      return view('admin.editarProducto')->with('producto',$producto);
   });

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

Route::get('/home', 'HomeController@index')->name('home');

