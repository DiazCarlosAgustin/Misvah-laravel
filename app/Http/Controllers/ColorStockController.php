<?php

namespace App\Http\Controllers;

use App\stockColor;
use Illuminate\Http\Request;

class ColorStockController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $stock = stockColor::all();

        return response()->json($stock, 200);
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
        $stock = stockColor::find($request->color_id);
        // dd(count($stock));
        if($stock == null){
            $stock = new stockColor;
        
            $stock->color_id = $request->color_id;
            $stock->stock = $request->stock;

            $stock->save();

            return response()->json($stock, 200);
        }
        else{
            return response()->json(["error" => "El color ya posee stock."]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\stockColor  $colorStock
     * @return \Illuminate\Http\Response
     */
    public function show(colorStock $colorStock)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\stockColor  $colorStock
     * @return \Illuminate\Http\Response
     */
    public function edit(colorStock $colorStock)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\stockColor  $colorStock
     * @return \Illuminate\Http\Response
     */
    public function update($colorStock,Request $request)
    {
        //actualizar stock
        $color = stockColor::find($colorStock);
        $color->stock = $request->stock;

        $color->save();

        return response()->json($color, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\stockColor  $colorStock
     * @return \Illuminate\Http\Response
     */
    public function destroy(colorStock $colorStock)
    {
        //
    }
}
