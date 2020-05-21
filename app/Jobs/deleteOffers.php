<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\oferta;
use datetime;

class deleteOffers implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        //
        $ofertas = oferta::where('estado','=', false)
                            ->get();

        $dt = new DateTime();
        foreach ($ofertas as $oferta) {
            if ($oferta->fecha_hasta <= $dt->format('Y-m-d')) {
                $oferta->estado = true;
                if($oferta->save()){
                    echo("se actualizo correctamente"); 
                }
            }
        }
    }
}
