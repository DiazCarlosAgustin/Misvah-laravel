<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class imagenesColor extends Model
{
    public function color()
    {
        return $this->hasOne('App\color', 'foreign_key', 'local_key');
    }
}
