<?php

namespace App\Http\Controllers;

use App\Producto;
use Illuminate\Http\Request;
use App\Categoria;
use App\color;
use App\Oferta;
use App\Cupon;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $pro = Producto::with('Categoria:id,nombre')
            ->with('color')
            ->with('imagenesColor')
            ->orderBy('id','DESC')
            ->paginate(6);
       return [
           'pagination' => [
                'total'         => $pro->total(), 
                'current_page'  => $pro->currentPage(), 
                'per_page'      => $pro->perPage(), 
                'last_page'     => $pro->lastPage(), 
                'from'          => $pro->firstItem(), 
                'to'            => $pro->lastPage()
           ],
           'productos' => $pro
       ];
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
        $producto->id_categoria = $request->categoria;
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
                ->with('imagenesColor')
                ->with('Oferta')->get();
        $prod = $prod->find($producto);
        return view('/admin/VerProducto')->with('productos',$producto);
    }

    public function ver(Producto $producto)
    {
        $prod = Producto::with('Categoria')
                ->with('color')
                ->with('imagenesColor')
                ->with('Oferta')->get();
        $cupon = Cupon::paginate(6);
        $off = Oferta::paginate(6);

        return view('/admin/productos')->with('productos',$prod)
                                        ->with('cupon',$cupon)
                                        ->with('off',$off);
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

    public function editar($producto)
    {   
        $prod = Producto::with('Categoria:id,nombre')
                    ->with('color')
                    ->with('imagenesColor')->get();
        $prod = $prod->find($producto);

        $color = Color::with('stockColor')->get();
        // $color = json_encode($color);
        return view('/admin/editarProducto',['producto' => $prod, 'color' => $color]);
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
        if (!$cod){
            $prod = Producto::find($request->id);
            $prod->id  = $request->id;
            $prod->codigo  = $request->codigo;
            $prod->id_categoria  = $request->categoria;
            $prod->nombre  = $request->nombre;
            $prod->precio  = $request->precio;
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
        $pro->delete();

        return response()->json($pro, 200);
    }
}
