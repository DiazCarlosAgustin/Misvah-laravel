<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class carrito extends Model
{
    //relations
    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
    
    public function producto()
    {
        return $this->belongsTo(Producto::class);
    }

    public function color()
    {
        return $this->hasOne(color::class, 'id', 'color_id')->with('imagenes');
    }
}
