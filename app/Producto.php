<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    // relacion producto - categoria
    public function categoria()
    {
        // 1 producto - 1 categoria
        return $this->hasOne( Categoria::class, 'id', 'categoria_id');
    }

    // relacion producto - favorito
    public function favorito()
    {
        return $this->hasOne( Favorito::class, 'producto_id', 'id');
    }

    public function color()
    {
        return $this->hasMany(Color::class,'producto_id', 'id')
                            ->with('stockColor')
                            ->with('imagenes');
    }
    public function carrito()
    {
        return $this->hasOne(Carrito::class, 'producto_id', 'id');
    }
    public function oferta()
    {
        return $this->hasOne(Oferta::class, 'producto_id', 'id')->where('estado','=',0);
    }
    public function imagenColor()
    {
        return $this->hasMany(imagenColor::class, 'producto_id', 'id')->with('color');
    }
}
