<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
class Producto extends Model
{
    // relacion producto - categoria
    public function categoria()
    {
        // 1 producto - 1 categoria
        return $this->hasOne('App\Categoria', 'id_categoria');
    }

    // relacion producto - favorito
    public function favorito()
    {
        return $this->hasOne('App\favorito', 'foreign_key', 'local_key');
    }

    public function color()
    {
        return $this->hasMany('App\color', 'foreign_key', 'local_key');
    }
    public function carrito()
    {
        return $this->hasMany('App\carrito', 'foreign_key', 'local_key');
    }
    public function oferta()
    {
        return $this->hasOne('App\oferta', 'foreign_key', 'local_key');
    }
}
