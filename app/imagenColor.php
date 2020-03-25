<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class imagenColor extends Model
{
    //
    public function color()
    {
        return $this->hasOne(color::class, 'id', 'color_id');
    }
    public function producto()
    {
        return $this->hasOne(Producto::class, 'id', 'producto_id');
    }
}
