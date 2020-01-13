<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    public function producto()
    {
<<<<<<< HEAD
        return $this->hasMany(Producto::Class, 'id_categoria','id');
=======
        return $this->hasMany('App\producto', 'id');
>>>>>>> 4175af3ae9761c3a3fae5acd323fcb3d07b1e7f9
    }
}
