<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class stockColor extends Model
{
    //
    public function color()
    {
        return $this->hasOne(color::class, 'id', 'color_id');
    }
}
