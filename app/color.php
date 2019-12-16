<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class color extends Model
{
    public function imagenesColor()
    {
        return $this->hasMany('App\imagenesColor', 'foreign_key', 'local_key');
    }
    public function producto()
    {
        return $this->hasOne('App\Producto', 'foreign_key', 'local_key');
    }

    public function carrito()
    {
        return $this->hasMany('App\carrito', 'foreign_key', 'local_key');
    }
}
