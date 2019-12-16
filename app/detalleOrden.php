<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class detalleOrden extends Model
{
    //relations
    public function ordenCompra()
    {
        return $this->hasOne('App\ordernCompra', 'foreign_key', 'local_key');
    }
}
