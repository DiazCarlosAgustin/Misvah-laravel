<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateImagenColorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('imagenes_colors', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('id_color');
            $table->unsignedBigInteger('id_producto');
            $table->string('imagen_color_producto');
            $table->timestamps();
            
            $table->foreign('id_color')->references('id')->on('colors')->onDelete('cascade');
            $table->foreign('id_producto')->references('id')->on('productos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('imagen_colors');
    }
}
