@extends('layouts.admin')

@section('title', 'Nueva categoria')
    
@section('container')
    <div class="container d-nueva-categoria">
        <div class="row d-flex justify-content-center">
            <div class="col-12 text-center">
                <h2>Nueva categoria</h2>
            </div>
        </div>
        <div class="row d-flex justify-content-center mt-5">
            <div class="col-12 col-xs-12 col-md-8 text-center">
                <form action="">
                        <div class="form-group row">
                            <label for="txtNombreCategoria" class="col-sm-2 col-form-label">Nombre</label>
                            <div class="col-sm-10">
                                <input type="text"  class="form-control" id="txtNombreCategoria" placeholder="Nombre">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="txtNombreCategoria" class="col-sm-2 col-form-label">Imagen</label>
                            <div class="col-sm-10">
                                <input type="file"  class="form-control" id="txtFotoCategoria" >
                            </div>
                        </div>
                        <div class="form-group row float-right">
                            <a href="{{asset('/admin/categorias')}}" class="btn btn-info m-1">Ver todas</a>
                            <button type="submit" class="btn btn-rosa m-1">Aceptar</button>
                        </div>
                </form>
            </div>
        </div>
    </div>
@endsection

@section('script')
@endsection