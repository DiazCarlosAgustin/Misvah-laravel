<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ordenCompra extends Model
{
    //relations 
    public function user()
    {
        return $this->hasOne('App\User', 'foreign_key', 'local_key');
    }

    public function detalleOrden()
    {
        return $this->hasMany('App\detalleOrden', 'foreign_key', 'local_key');
    }
}
