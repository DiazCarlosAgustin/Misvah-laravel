<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class color extends Model
{
    public function imagenesColor()
    {
        return $this->hasMany(imagenesColor::class, 'id_color', 'id');
    }
    public function producto()
    {
        return $this->hasOne(Producto::class, 'id', 'id_producto');
    }
}
