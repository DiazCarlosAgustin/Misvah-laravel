<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class oferta extends Model
{
    //relations
    public function producto()
    {
        return $this->hasOne('App\producto', 'foreign_key', 'local_key');
    }
}
