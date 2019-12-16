<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class direccion extends Model
{
    //relations
    public function user()
    {
        return $this->hasOne('App\User', 'foreign_key', 'local_key');
    }
}
