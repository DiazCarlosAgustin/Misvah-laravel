<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class oferta extends Model
{
    //relations
    public function producto()
    {
        return $this->hasOne(Producto::class, 'id', 'producto_id');
    }
}
