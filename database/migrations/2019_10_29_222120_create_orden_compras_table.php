<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdenComprasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orden_compras', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id');
            $table->string('email', 100)->nullable($value = false);
            $table->bigInteger('telefono')->nullable($value = false);
            $table->string('direccion', 180)->nullable($value = false);
            $table->string('piso')->nullable();
            $table->bigInteger('codigo_postal')->nullable($value = false);
            $table->double('total', 15, 8);

            $table->timestamps();

            // relations
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orden_compras');
    }
}
