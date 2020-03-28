<?php

namespace App\Http\Controllers;

use App\favorito;
use Illuminate\Http\Request;

class FavoritoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $favoritos = favorito::with('user')->get();
        return $favoritos;
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
        $favorito = new favorito;

        $favorito->user_id = $request->user;
        $favorito->producto_id = $request->producto;

        if($favorito->save()){
            $msg = "se guardo correctamente";
            return response()->json([
                "msg" => $msg,
                "favorito" => $favorito
            ]);
        }
        else{
            $msg = "No se pudo guardar, intente mas tarde";
            return response()->json($msg);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\favorito  $favorito
     * @return \Illuminate\Http\Response
     */
    public function show(favorito $favorito)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\favorito  $favorito
     * @return \Illuminate\Http\Response
     */
    public function edit(favorito $favorito)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\favorito  $favorito
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, favorito $favorito)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\favorito  $favorito
     * @return \Illuminate\Http\Response
     */
    public function destroy($fav)
    {
        $favorito = favorito::findOrFail($fav);
       
        $favorito->delete();

        return $favorito;
    }
}
