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

    public function tienda($id, Request $request)
    {
        $min = $request->input("min");
        $max = $request->input("max");
        $orden = $request->input("orden");
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
                                    ->with('Oferta')
                                    ->with('imagenColor')
                                    ->Has('imagenColor')
                                    ->where('categoria_id','=',$id);
        if($min != null or $min > 0){
            if ($max > 0 or $max != null) {
                $productos = $productos->where('precio', '>=', $min);
                $productos = $productos->where('precio', '<=', $max);
            }elseif($max == null or $max == 0){
                dd("h");
                $productos = $productos->where('precio','>=',$min);
            }
        }
        elseif($min == null or $min == 0){
            if ($max > 0 or $max != null) {
                $productos = $productos->where('precio', '<=', $max);
            }
        }
        switch ($orden) {
            case 1:
                $productos = $productos->orderBy('precio','asc');
                break;
            case 2:
                $productos = $productos->orderBy('precio','desc');
                break;
            case 3:
                $productos = $productos->orderBy('created_at','desc');
                break;
            case 4:
                $productos = $productos->orderBy('nombre','asc');
                break;
            case 5:
                $productos = $productos->orderBy('nombre','desc');
                break;
            default:
                $productos = $productos->orderBy('created_at','desc');
                break;
        }
        $productos = $productos->paginate(9);
        $categorias = Categoria::all();

        $arr = [$productos,$categorias];
        return $arr;
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
