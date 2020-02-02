<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class imagenesColor extends Model
{
    public function color()
    {
        return $this->hasOne(color::class, 'id', 'id_color');
    }
    public function producto()
    {
        return $this->hasOne(Producto::class, 'id', 'id_producto');
    }
}
