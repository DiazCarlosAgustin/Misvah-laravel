@extends('layouts.app')

@section('title','Crear cuenta')

@section('Container')
    <div class="d-registrarse container mt-5">
        <div class="row r-registrarse text-center d-flex justify-content-center">
            <div class="col-12 col-sm-12 col-md-6">
                <div class="d-titulo-registrarse mt-5 pb-3">
                   Crear cuenta
                </div>
                <div class="form-registrarse">
                    <form action="">
                        <div class="d-campos py-1">
                            <h4 class="text-left">Nombre:</h4>
                            <input class="form-control" type="text" name="txtRegistrarseNombre" id="txtRegistrarseNombre" placeholder="Nombre">
                        </div>
                        <div class="d-campos py-1">
                            <h4 class="text-left">Apellido:</h4>
                            <input class="form-control" type="text" name="txtRegistrarseApellido" id="txtRegistrarseApellido" placeholder="Apellido">
                        </div>
                        <div class="d-campos py-1">
                            <h4 class="text-left">Email:</h4>
                            <input class="form-control" type="email" name="txtRegistrarseMail" id="txtRegistrarseMail" placeholder="Email">
                        </div>
                        <div class="d-campos py-1">
                            <h4 class="text-left">Confirmar email:</h4>
                            <input class="form-control" type="email" name="txtRegistrarseConfirmarMail" id="txtRegistrarseConfirmarMail" placeholder="Confirmar email">
                        </div>
                        <div class="d-campos py-1">
                            <h4 class="text-left">Contraseña:</h4>
                            <input class="form-control" type="password" name="txttRegistrarsePassword" id="txttRegistrarsePassword" placeholder="Contraseña">
                        </div>
                        <div class="d-form-enlaces float-left py-1">
                           <a href="#" >Ya tengo cuenta</a>
                        </div>
                        <div class="button-grup py-2 float-right">
                            <input type="reset" value="Cancelar" class="btn btn-lg btn-default mx-1">
                            <input type="submit" value="Acceptar" class="btn btn-lg btn-rosa mx-1">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection