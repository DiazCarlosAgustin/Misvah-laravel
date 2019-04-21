{{--traigo el template--}}
@extends('layouts.app')

@section('title','Acceder')

@section('Container')
    <div class="d-acceder container mt-5">
        <div class="row r-acceder text-center d-flex justify-content-center">
            <div class="col-12 col-sm-12 col-md-6">
                <div class="d-titulo-acceder mt-5 pb-3">
                    Acceder
                </div>
                <div class="form-acceder">
                    <form action="">
                        <div class="d-campos py-1">
                            <h4 class="text-left">Email:</h4>
                            <input class="form-control" type="email" name="txtAccederMail" id="txtAccederMail" placeholder="Email">
                        </div>
                        <div class="d-campos py-1">
                            <h4 class="text-left">Contraseña:</h4>
                            <input class="form-control" type="password" name="txtAccederPassword" id="txtAccederPassword" placeholder="Contraseña">
                        </div>
                        <div class="d-form-enlaces float-left py-1">
                           <a href="#" >Olvide mi contraseña</a>
                        </div>
                        <div class="button-grup py-2 float-right">
                            <button class="btn btn-lg "><a href="{{url('/registrarse')}}">Crear cuenta</a></button> 
                            <input type="submit" value="Acceptar" class="btn btn-lg btn-rosa mx-1">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
    
