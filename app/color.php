<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class color extends Model
{
    public function imagenColor()
    {
        return $this->hasOne(imagenColor::class, 'color_id', 'id');
    }
    public function producto()
    {
        return $this->hasOne(Producto::class, 'id', 'producto_id');
    }
    public function stockColor()
    {
        return $this->hasOne(stockColor::class, 'color_id', 'id');
    }
}
