@extends('layouts.admin')

@section('title','Agregar producto')
    
@section('container')
<div class="container">
        <div class="row d-flex justify-content-center mt-3">
                <div class="col-12 col-xs-12 col-md-6">
                    <div class="text-center">
                        <h2>Agregar nuevo productos</h2>
                    </div>
                </div>
            </div>
            <div class="row d-flex justify-content-center my-3">
                <div class="col-12 col-xs-12 col-md-6">
                    <form action="">    
                        <div class="group-form">
                            <label for="archivoProducto">Archivo .cvs</label>
                            <input type="file" name="archivoProducto" id="archivoProducto" class="form-control">
                        </div>
                        <div class="group-form text-right mt-2 mb-3">
                            <input type="submit" value="Aceptar" class="btn btn-lg btn-rosa">
                        </div>
                    </form>
                </div>
            </div>
</div>
@endsection
@section('script')
<script src="{{asset('js/app.js')}}" defer></script>
@endsection