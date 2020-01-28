<?php

namespace App\Http\Controllers;

use App\Categoria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\store;
use App\Producto;
class CategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $categoria = Categoria::with('Producto:id_categoria,id,nombre')->get();

        return response()->json($categoria, 200);
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
        $exploded = explode(',', $request->imagen);
        $decode = base64_decode($exploded[1]);

        if (str_contains($exploded[0],'jpeg'))
            $extension = 'jpg';
        else
            $extension = 'png';

        $fileName = str_random().'.'.$extension;
        $path = public_path().'/img/'.$fileName;
        file_put_contents($path, $decode);

        //agregar una nueva categoria 
        $cat = new Categoria;
        
        $cat->nombre = $request->nombre;
        $cat->descripcion = $request->descripcion;
        $cat->imagen_categoria = $fileName;


        $cat->save();
        return response()->json($cat, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Categoria  $categoria
     * @return \Illuminate\Http\Response
     */
    public function show(Categoria $id)
    {
        //busca una categoria
        $cat = Categoria::find($id);
        return view('admin\editar_categoria')->with('categoria', $cat);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Categoria  $categoria
     * @return \Illuminate\Http\Response
     */
    public function edit($id,Categoria $categoria)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Categoria  $categoria
     * @return \Illuminate\Http\Response
     */
    public function update($id,Request $request)
    {
        $cat = Categoria::find($id);

        $exploded = explode(',', $request->imagen);
        $tamaño = count($exploded);
        if ($tamaño > 1) {
            $decode = base64_decode($exploded[1]);

            if (str_contains($exploded[0],'jpeg'))
                $extension = 'jpg';
            else
                $extension = 'png';

            $fileName = str_random().'.'.$extension;
            $path = public_path().'/img/'.$fileName;
            file_put_contents($path, $decode);
            Storage::delete($cat->imagen_categoria);
        }
        else{
            $fileName = $request->imagen;
        }

        //actualizar una categoria

        $cat->nombre = $request->nombre;
        $cat->descripcion = $request->descripcion;
        $cat->imagen_categoria = $fileName;
        $cat->save();
        $response = [
            "categoria" => $cat,
            "messagge" => "Se actualizo correctamete."
        ];
        return response()->json($response, 200);
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Categoria  $categoria
     * @return \Illuminate\Http\Response
     */
    public function destroy($categoria)
    {
        //elimina una categoria
        $cat = Categoria::find($categoria);
        Storage::delete($cat->imagen_categoria);
        $cat->delete();

        return response()->json($cat, 200);
    }
}
