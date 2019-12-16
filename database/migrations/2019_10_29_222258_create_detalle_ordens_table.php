<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDetalleOrdensTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detalle_ordens', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('order_id');
            $table->unsignedBigInteger('producto_id');
            $table->integer('cantidad')->nullable($value = false);
            $table->double('precio')->nullable($value = false);
            $table->double('subtotal', 15, 8)->nullable($value = false);
            
            $table->timestamps();

            // relations
            $table->foreign('order_id')->references('id')->on('orden_compras')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('detalle_ordens');
    }
}
