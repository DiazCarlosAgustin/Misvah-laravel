<?php

namespace App\Http\Controllers;

use App\oferta;
use Illuminate\Http\Request;

class OfertaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ofertas = Oferta::with('producto')->paginate(6);

        return view('admin.ofertas')->with('ofertas',$ofertas);
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
        $off = oferta::where('producto_id','=',$request->producto_id)->get();

        if(count($off) >= 1){
           return response()->json([
               'err' => 'El producto ya posee una oferta activa',
               'oferta' => $off
           ]);
        }
        else{
            $oferta = new oferta;

            if ($request->porcentaje > 100 || $request->porcentaje <= 0) {
                return response()->json([
                    "err" => "El porcentaje ingresado no debe de ser mayor a 100 o menor a 0."
                ]);
            }
            else{
                $oferta->producto_id = $request->producto_id;
                $oferta->porcentaje = $request->porcentaje;
                $oferta->fecha_desde = $request->desde;
                $oferta->fecha_hasta = $request->hasta;

                if($oferta->save()){
                    return response()->json([
                        'oferta' => $oferta,
                        'success' => "Se genero la oferta correctamente."
                        ]);
                }
                else{
                    return response()->json([
                        "err" => "No se pudo generar la oferta, intente nuevamente."
                    ]);
                }
            }
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\oferta  $oferta
     * @return \Illuminate\Http\Response
     */
    public function show(oferta $oferta)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\oferta  $oferta
     * @return \Illuminate\Http\Response
     */
    public function edit(oferta $oferta)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\oferta  $oferta
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, oferta $oferta)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\oferta  $oferta
     * @return \Illuminate\Http\Response
     */
    public function destroy(oferta $oferta)
    {
        //
    }
}
