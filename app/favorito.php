<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class favorito extends Model
{
    public function producto()
    {
        return $this->hasOne(Producto::class, 'id', 'producto_id');
    }
}
