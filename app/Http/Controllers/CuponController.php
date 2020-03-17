<?php

namespace App\Http\Controllers;

use App\cupon;
use Illuminate\Http\Request;

class CuponController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cupones = Cupon::paginate(2);

        return $cupones;
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
        //crear cupon
        $guardo = false;
        do{
            $cupon = str_random(20);

            $newCupon = Cupon::where('codigo','=',$cupon)->get();

            if ($newCupon->isEmpty()) {
                $newCupon = new Cupon;

                $newCupon->codigo = $cupon;
                $newCupon->monto = $request->monto;
                if ($newCupon->save() ) {
                    $guardo = true;
                }
            }

        }while(!$guardo);
        return response()->json($newCupon, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\cupon  $cupon
     * @return \Illuminate\Http\Response
     */
    public function show(cupon $cupon)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\cupon  $cupon
     * @return \Illuminate\Http\Response
     */
    public function edit(cupon $cupon)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\cupon  $cupon
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, cupon $cupon)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\cupon  $cupon
     * @return \Illuminate\Http\Response
     */
    public function destroy(cupon $cupon)
    {
        //
    }
}
