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
        $cupones = Cupon::all();

        return $cupones;
    }   
    public function paginateCupones()
    {
        $cupones = Cupon::paginate(10);

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
        dd($request->input("cupon"));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\cupon  $cupon
     * @return \Illuminate\Http\Response
     */
    public function edit( Request $request)
    {
        dd($request->cupon);
    }
    public function consultar(Request $request)
    {
        $cupon= cupon::where('codigo','=',$request->cupon)->where('estado','=',0)->get();
        if(count($cupon) > 0){
            $respuesta = 'OK';
            return response()->json(['cupon' =>$cupon[0],'respuesta' => $respuesta], 200);
        }
        else{
            $respuesta = 'FALSE';
            return response()->json(['respuesta' => $respuesta]);
        }
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
    public function destroy(Request $request)
    {

    }
}
