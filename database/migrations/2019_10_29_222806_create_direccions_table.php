<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDireccionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('direccions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id');
            $table->string('calle', 100)->nullable()->default('text');
            $table->string('numero', 100)->nullable()->default('text');
            $table->string('departamento', 100)->nullable()->default('text');
            $table->string('piso', 100)->nullable()->default('text');
            $table->string('provincia', 100)->nullable()->default('text');
            $table->string('localidad', 100)->nullable()->default('text');
            $table->string('Codigo_postal', 100)->nullable()->default('text');
            $table->integer('telefono')->unsigned()->nullable();
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
        Schema::dropIfExists('direccions');
    }
}
