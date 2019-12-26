<?php

namespace App\Http\Controllers;

use App\Categoria;
use Illuminate\Http\Request;

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
        $categoria = Categoria::all();

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
        //agregar una nueva categoria 
        $cat = new Categoria;
        
        $cat->nombre = $request->nombre;
        $cat->descripcion = $request->descripcion;
        $cat->imagen = $request->imagen;
        
        $cat->save();
        
        return $cat;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Categoria  $categoria
     * @return \Illuminate\Http\Response
     */
    public function show(Categoria $request)
    {
        //busca una categoria
        $cat = Categoria::find($categoria);

        return response()->json($cat, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Categoria  $categoria
     * @return \Illuminate\Http\Response
     */
    public function edit(Categoria $categoria)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Categoria  $categoria
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Categoria $categoria)
    {
        //actualizar una categoria
        $cat = Categoria::find($categoria);

        $cat->nombre = $request->nombre;
        $cat->descripcion = $request->descripcion;
        $cat->imagen = $request->imagen;
        $cat->save();

        return response()->json($cat, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Categoria  $categoria
     * @return \Illuminate\Http\Response
     */
    public function destroy(Categoria $categoria)
    {
        //elimina una categoria
        $cat = Categoria::find($categoria);
        $cat->delete();

        return response()->json($cat, 200);
    }
}
