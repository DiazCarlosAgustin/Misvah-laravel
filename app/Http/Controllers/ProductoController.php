<?php

namespace App\Http\Controllers;

use App\Producto;
use Illuminate\Http\Request;
use App\Categoria;
use App\color;
use App\imagenColor;
use App\Oferta;
use App\Cupon;
use Auth;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $productos = Producto::with('categoria')->paginate(6);

        return $productos;
    }

    public function tienda($id)
    {
        //busca una categoria
        $productos = Producto::with(['favorito' => function($q){
                                $user = auth()->user();
                                if($user){
                                    $q->where('user_id','=',$user->id);
                                }
                                else{
                                    $q->where('user_id','=',0);
                                }
                            }])
                            ->where('categoria_id', '=' , $id)
                            ->with('Oferta')
                            ->with('imagenColor')
                            ->paginate(8);

        return $productos;
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }
    public function destacados()
    {
        $productos = Producto::with(['favorito' => function($q){
                        $user = auth()->user();
                        if($user){
                            $q->where('user_id','=',$user->id);
                        }
                        else{
                            $q->where('user_id','=',0);
                        }
                    }])
                    ->with('imagenColor')
                    ->with('Oferta')
                    ->take(5)
                    ->get();
        
        return $productos;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //crear producto
        $producto = new Producto;

        $producto->codigo = $request->cod;
        $producto->categoria_id = $request->categoria;
        $producto->nombre = $request->nombre;
        $producto->precio = $request->precio;
        $producto->descripcion = $request->descripcion;
        $producto->infomacion = $request->informacion;

        $producto->save();

        return response()->json($producto, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function show($producto)
    {
        //retorna la vista con el producto
        $prod = Producto::with('Categoria')
                ->with('color')
                ->with('imagenColor')
                ->with('Oferta')
                ->with('favorito')
                ->where('id','=',$producto)->get();
        
        return $prod;
    }

    public function ver($id)
    {
        $producto = Producto::with('Categoria')
                        ->with('color')
                        ->with('imagenColor')
                        ->with('Oferta')
                        ->with(['favorito' => function($q){
                            $user = auth()->user();
                            if($user){
                                $q->where('user_id','=',$user->id);
                            }
                            else{
                                $q->where('user_id','=',0);
                            }
                        }])
                        ->where('id','=',$id)
                        ->get();
        
        return $producto[0];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {

        
    }

    public function buscar(Request $request)
    {
        $busqueda = $request->input('buscar');

        $productos = Producto::with('Categoria')
                            ->where('nombre','LIKE','%'.$busqueda.'%')
                            ->orWhere('codigo','LIKE','%'.$busqueda.'%')
                            ->paginate(6);
        if (count($productos) > 0){
            return $productos;
        }
        else{
            $error = 'No se encontraron resultados para '.$busqueda. '.';

            return $error;
        }

    }

    public function editar($producto)
    {   
        $prod = Producto::with('Categoria:id,nombre')
                    ->with('color')
                    ->with('imagenColor')
                    ->where('id','=',$producto)
                    ->get();
            
        return $prod;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //actualizo el producto
        $cod = Producto::where('codigo', $request->codigo)
                        ->where('id','<>',$request->id)->get();
        if (count($cod) == 0){
            $prod = Producto::find($request->id);
            $prod->id  = $request->id;
            $prod->codigo  = $request->codigo;
            $prod->categoria_id  = $request->categoria;
            $prod->nombre  = $request->nombre;
            $prod->precio  = $request->precio;
            $prod->estado  = $request->estado;
            $prod->descripcion  = $request->descripcion;
            $prod->infomacion  = $request->infomacion;
            if  ( $prod->save() )
                return response()->json([
                    "success" => "Se actualizaron los datos del producto correctamente."
                ]);
            else
                return response()->json([
                    "error" => "No se pudo actualizar los datos correctamente."
                ]);
        }else{
            return response()->json([
                "error" => "El codigo ingresado ya existe."
            ]);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function destroy(Producto $producto)
    {
        //eliminar producto
        $pro = Producto::find($producto->id);
        $pro->estado = false;

        if($pro->save()){
            return response()->json([
                        "success" => "Se actualizo el estado del producto ". $pro->nombre
                    ]);
        }
        
    }
}
