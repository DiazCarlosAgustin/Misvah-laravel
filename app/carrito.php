<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class carrito extends Model
{
    //relations
    public function user()
    {
        return $this->hasOne('App\User', 'foreign_key', 'local_key');
    }
    
    public function producto()
    {
        return $this->hasOne('App\Producto', 'foreign_key', 'local_key');
    }

    public function color()
    {
        return $this->hasOne('App\color', 'foreign_key', 'local_key');
    }
}
