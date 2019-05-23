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
<<<<<<< HEAD
                    <form action="">    
                        <div class="group-form">
                            <label for="archivoProducto">Archivo .cvs</label>
                            <input type="file" name="archivoProducto" id="archivoProducto" class="form-control">
=======
                    <form action="">
                        <div class="group-form">
                            <label for="txtNombreProducto">Nombre</label>
                            <input type="text" id="txtNombreProducto"  placeholder="Nombre" class="form-control">
                        </div>
                        <div class="group-form">
                            <label for="cbCategoria">Categoria</label>
                            <select name="cbCategoria" id="cbCategoria" class="form-control">
                                <option value="0">Seleccione una categoria</option>
                                <option value="1">Categoria 1</option>
                                <option value="2">Categoria 2</option>
                                <option value="3">Categoria 3</option>
                            </select>
                        </div>
                        <div class="group-form">
                            <label for="txtStockProducto">Stock</label>
                            <input type="number" name="txtStockProducto" min="0" id="txtStockProducto" class="form-control" value="0">
                        </div>
                        <div class="group-form">
                            <label for="txtPrecioProducto">Precio</label>
                            <input type="text" id="txtPrecioProducto"  placeholder="$" class="form-control">
                        </div>
                        <div class="group-form">
                            <label for="txtFotosProducto">Imagene 1</label>
                            <input type="file" name="txtFotosProducto" id="txtFotosProducto" class="form-control">
                        </div>
                        <div class="group-form">
                            <label for="txtFotosProducto">Imagene 2</label>
                            <input type="file" name="txtFotosProducto" id="txtFotosProducto" class="form-control">
                        </div>
                        <div class="group-form">
                            <label for="txtFotosProducto">Imagene 3</label>
                            <input type="file" name="txtFotosProducto" id="txtFotosProducto" class="form-control">
                        </div>
                        <div class="group-form">
                            <label for="txtDescripcionProducto">Descripción</label>
                            <textarea name="txtDescripcionProducto" id="txtDescripcionProducto" class="form-control" cols="30" rows="10"></textarea>
>>>>>>> db0e47929f93d640a292cd3f500139503ce596f9
                        </div>
                        <div class="group-form text-right mt-2 mb-3">
                            <input type="submit" value="Aceptar" class="btn btn-lg btn-rosa">
                        </div>
                    </form>
                </div>
            </div>
</div>
<<<<<<< HEAD
@endsection
@section('script')
<script src="{{asset('js/app.js')}}" defer></script>
=======
>>>>>>> db0e47929f93d640a292cd3f500139503ce596f9
@endsection