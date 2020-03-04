<?php

namespace App\Http\Controllers;

use App\imagenesColor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImagenColorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $img = imagenesColor::all();

        return response()->json($img, 200);
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
        $path = public_path().'/img/productos/'.$fileName;
        file_put_contents($path, $decode);
        
        $img = new imagenesColor();

    
        $img->id_producto = $request->id_producto;
        $img->imagen_color_producto = $fileName;
        $img->id_color = $request->id_color;
        if($img->save())
            return response()->json($img, 200);
        else
            return response()->json([
                'Error' => 'No se puedo guardar la imagen, intente nuevamente.'
            ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\imagenesColor  $imagenesColor
     * @return \Illuminate\Http\Response
     */
    public function show(imagenesColor $imagenesColor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\imagenesColor  $imagenesColor
     * @return \Illuminate\Http\Response
     */
    public function edit(imagenesColor $imagenesColor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\imagenesColor  $imagenesColor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, imagenesColor $imagenesColor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\imagenesColor  $imagenesColor
     * @return \Illuminate\Http\Response
     */
    public function destroy($imagenesColor)
    {
        $img = imagenesColor::find($imagenesColor);
        Storage::delete($img->imagen_color_producto);
        $img->delete();

        return response()->json($img, 200);
    }
}
