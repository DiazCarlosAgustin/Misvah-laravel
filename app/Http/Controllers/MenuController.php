<?php

namespace App\Http\Controllers;

use App\menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //devuelve los menues
        $menu = Menu::orderBy('created_at','Desc')->get();
        return $menu;
        
    }
    public function menuCliente(){
        $menu = Menu::where('estado','=',true)->take(1)->get();

        return $menu[0];
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) 
    {
        // validacion
        // $this->validate([
        //     'color' => 'required||max:7',
        //     'color_letra' => 'required||max:7'
        // ]);
        //Agregar un nuevo estilo para el menu
        $menu = new Menu();
        $menu->color = $request->color;
        $menu->color_letra = $request->letra;
        $menu->estado = false;
        

        if( $menu->save()){
            return $menu;   
        }
        else {
            return response()->json(["mensaje" => "No se pude agregar el nuevo estilo, intente nuevamente"]);
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function show(menu $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function edit(menu $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $menu = Menu::find($id);
        $menu->estado = $request->estado;

        $menu->save();

        return $menu;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function destroy(menu $id)
    {
        //
        $menu = Menu::find($id);
        $menu->delete();

        return  $menu;
    }
}
