<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class color extends Model
{
    public function imagenesColor()
    {
        return $this->hasMany(imagenesColor::class, 'color_id', 'id');
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
