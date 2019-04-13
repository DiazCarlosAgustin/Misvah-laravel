@extends('layouts.app')

@section('title', 'Contacto')

{{--section del container que contendra el contacto--}}
@section('Container')
    <div class="d-contacto container mt-5 ">
        <div class="row r-contacto text-center  d-flex justify-content-center">
            <div class="col-12 col-sm-12 col-lg-8">
                <div class="d-titulo-contacto mt-5 pb-3">
                    Contacto
                </div>
                <div class="form-contacto">
                    <form action="">
                        <div class="d-campos py-1">
                            <h4 class="text-left">Nombre:</h4>
                            <input class="form-control" type="text" name="txtContactoNombre" id="txtContactoNombre" placeholder="Nombre">
                        </div>
                        <div class="d-campos py-1">
                            <h4 class="text-left">Telefono:</h4>
                            <input class="form-control" type="tel" name="txtContactoTel" id="txtContactoTel" placeholder="Telefono">
                        </div>
                        <div class="d-campos py-1">
                            <h4 class="text-left">Asunto:</h4>
                            <input class="form-control" type="text" name="txtContactoAsunto" id="txtContactoAsunto" placeholder="Asunto">
                        </div>
                        <div class="d-campos py-1">
                            <h4 class="text-left">Mensaje:</h4>
                            <textarea class="form-control" name="txtContactoMensaje" id="txtContactoMensaje" cols="30" rows="8" placeholder="Mensaje"></textarea>
                        </div>
                        <div class="d-campos py-1   float-right">
                            <input class="btn btn-lg btn-rosa" type="submit" value="Enviar">    
                        </div>  
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection