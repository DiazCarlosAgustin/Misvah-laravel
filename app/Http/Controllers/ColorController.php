<?php

namespace App\Http\Controllers;

use App\color;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\imagenColor;

class ColorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $color = color::all();

        return response()->json($color, 200);
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
        $path = public_path().'/img/colores/'.$fileName;
        file_put_contents($path, $decode);
        
        $color = new color();

        $color->producto_id = $request->id_producto;
        $color->imagen_color = $fileName;
        $color->descripcion = $request->descripcion;

        if ($color->save()){
            $color = Color::where('id','=',$color->id)
                            ->with('stockColor')->get();

            return $color;
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\color  $color
     * @return \Illuminate\Http\Response
     */
    public function show($color)
    {
        //
        $color = color::where('id_producto',$color)
            ->with('stockColor')->get();
        return response()->json($color, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\color  $color
     * @return \Illuminate\Http\Response
     */
    public function edit(color $color)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\color  $color
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, color $color)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\color  $color
     * @return \Illuminate\Http\Response
     */
    public function destroy(color $color)
    {
        $color = Color::find($color->id);
        Storage::delete($color->imagen_color);
        $color->delete();

        return $color;
    }
}
