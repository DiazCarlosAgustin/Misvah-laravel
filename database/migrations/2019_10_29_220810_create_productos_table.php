<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('codigo')->unique();
            $table->unsignedBigInteger('categoria_id');
            $table->string('nombre');
            $table->float('precio',8,2)->nullable($value = false);
            $table->longText('descripcion')->nulleable();
            $table->longText('infomacion')->nullable()->default('text');
            $table->boolean('estado')->default(true);
            $table->timestamps();

            // foreign key - user
            $table->foreign('categoria_id')->references('id')->on('categorias');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('productos');
    }
}
