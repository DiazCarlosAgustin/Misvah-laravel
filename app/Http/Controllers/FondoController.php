<?php

namespace App\Http\Controllers;

use App\Fondo;
use Illuminate\Http\Request;

class FondoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $fondo = Fondo::all();

        return $fondo;
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
        $path = public_path().'/img/fondos/'.$fileName;
        file_put_contents($path, $decode);

        //agregar una nueva categoria 
        $fondo = new Fondo;
        
        $fondo->imagen = $fileName;
        $fondo->estado = false;


        $fondo->save();
        return response()->json($fondo, 200);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Fondo  $fondo
     * @return \Illuminate\Http\Response
     */
    public function show(Fondo $fondo)
    {
        //
    }
    public function fondo()
    {
        $fondo = Fondo::where('estado','=','1')->orderBy('created_at', 'DESC')->first();
        
        return $fondo;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Fondo  $fondo
     * @return \Illuminate\Http\Response
     */
    public function edit(Fondo $fondo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Fondo  $fondo
     * @return \Illuminate\Http\Response
     */
    public function update($fondo)
    {
        $fondo = fondo::find($fondo);

        if ($fondo->estado == 0) {
            $fondo->estado = 1;
        }
        else{
            $fondo->estado = 0;
        }
        $fondo->save();

        return $fondo;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Fondo  $fondo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Fondo $fondo)
    {
        //
    }
}
