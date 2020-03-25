<?php

namespace App\Http\Controllers;

use App\imagenColor;
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
        $img = imagenColor::all();

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
        
        $img = new imagenColor();

    
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
     * @param  \App\imagenColor  $imagenColor
     * @return \Illuminate\Http\Response
     */
    public function show(imagenColor $imagenColor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\imagenColor  $imagenColor
     * @return \Illuminate\Http\Response
     */
    public function edit(imagenColor $imagenColor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\imagenColor  $imagenColor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, imagenColor $imagenColor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\imagenColor  $imagenColor
     * @return \Illuminate\Http\Response
     */
    public function destroy($imagenColor)
    {
        $img = imagenColor::find($imagenColor);
        Storage::delete($img->imagen_color_producto);
        $img->delete();

        return response()->json($img, 200);
    }
}
