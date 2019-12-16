<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    public function productos()
    {
        return $this->hasMany('App\productos', 'foreign_key', 'local_key');
    }
}
