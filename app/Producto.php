<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    // relacion producto - categoria
    public function categoria()
    {
        // 1 producto - 1 categoria
        return $this->hasOne( Categoria::class, 'id', 'id_categoria');
    }

    // relacion producto - favorito
    public function favorito()
    {
        return $this->hasOne( Favorito::class, 'id_producto', 'id');
    }

    public function color()
    {
        return $this->hasMany(Color::class, 'id_producto', 'id');
    }
    public function carrito()
    {
        return $this->hasOne(Carrito::class, 'id_producto', 'id');
    }
    public function oferta()
    {
        return $this->hasOne(Oferta::class, 'producto_id', 'id');
    }
    public function imagenColor()
    {
        return $this->hasMany(imagenColor::class, 'id_producto', 'id');
    }

}
