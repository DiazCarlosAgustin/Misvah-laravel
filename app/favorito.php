<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class favorito extends Model
{
    public function producto()
    {
        return $this->hasOne(Producto::class, 'id', 'id_producto');
    }
    public function user()
    {
        return $this->hasOne(user::class, 'id', 'id_user');
    }
}
