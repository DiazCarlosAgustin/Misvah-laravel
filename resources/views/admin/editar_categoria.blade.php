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
            <div class="col-12 col-xs-12 col-md-6">
                <form action="">
                        <div class="form-group ">
                            <label for="txtNombreCategoria" class="col-sm-2 col-form-label">Nombre:</label>
                            <div class="">
                                <input type="text"  class="form-control" id="txtNombreCategoria" placeholder="Nombre">
                            </div>
                        </div>
                        <div class="form-group row d-flex">
                            <label for="txtNombreCategoria" class="col-sm-2 col-form-label">Imagen:</label>
                            <div class="col-sm-10 ">
                                <input type="file" value="https://via.placeholder.com/150x150.png" class="form-control" name="fileImagenCategoria" id="fileImagenCategoria" >
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="txtDescripcionCategoria" class="col-sm-2 col-form-label">Descripcion:</label>
                            <div class="">
                                <textarea name="txtDescripcionCategoria" id="txtDescripcionCategoria" cols="30" rows="10" class="form-control"></textarea>
                            </div>
                        </div>
                        <div class="form-group float-right">
                            <a href="{{asset('/admin/categorias')}}" class="btn btn-danger m-1">Volver</a>
                            <button type="submit" class="btn btn-primary m-1">Aceptar</button>
                        </div>
                </form>
            </div>
        </div>

    </div>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection