<?php

namespace App\Http\Controllers;

use App\carrito;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;

class CarritoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        if (Auth::check()) {
            $user = Auth::user()->id;

            $carrito = carrito::with('producto')
            ->with('color')
            ->where('user_id','=',$user)
            ->get();

            return $carrito;
        }
        else {
           redirect("/acceder");
        }
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
        //
        if (Auth::check()) {
            $carrito = new carrito;

            $carrito->user_id = $request->user_id;
            $carrito->producto_id = $request->producto_id;
            $carrito->color_id = $request->color_id;
            $carrito->cantidad = $request->cantidad;

            if($carrito->save()){
                $carrito = $carrito->with('color')->with('producto')->get();
                return $carrito;
            }
        }
        else{
            return redirect('/acceder');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\carrito  $carrito
     * @return \Illuminate\Http\Response
     */
    public function show($cart)
    {
        if (Auth::check()) {
            $user = Auth::user()->id;
            $carrito = carrito::with('producto')
                                ->with('color')
                                ->where('user_id','=',$user)
                                ->get();
            return $carrito;
        }
        else{
            return response("/acceder");
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\carrito  $carrito
     * @return \Illuminate\Http\Response
     */
    public function edit(carrito $carrito)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\carrito  $carrito
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $carrito = carrito::find($id);

        $carrito->cantidad = $request->cantidad;

        if ($carrito->save()) {
            $codigo = 200;
            return response()->json($codigo);
        }
        else{
            $codigo = 400;
            return response()->json($codigo);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\carrito  $carrito
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $carrito = carrito::find($id);
        if($carrito->delete()){
            return $carrito;
        }
    }
}
