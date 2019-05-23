@extends('layouts.admin')

@section('title','Editar producto')

@section('container')
    <div class="container">
        <div class="row d-flex justify-content-center mt-4">
            <div class="col col-12">
                <h2 class="text-center">Editar producto</h2>
            </div>
        </div>
        <div class="row d-flex justify-content-center mt-2">
            <div class="col-12 col-md-6 col-xs-12">
                <form action="" class="h-100">
                    <div class="input-group">
                        <input type="text" name="txtBuscarProducto" id="txtBuscarProducto" class="form-control my-auto" placeholder="Cod producto">
                        <input type="submit" value="Buscar" class="btn btn-rosa">
                    </div>
                </form>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-12 table-responsive">
                <table class="text-center table">
                    <thead>
                        <tr>
                            <th scope="col">Cod</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Imagen</th>
                            <th scope="col">Color</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="align-middle">A-12</td>
                            <td class="align-middle">Nombre producto</td>
                            <td class="align-middle">
                                <img src="https://via.placeholder.com/75x75.png" alt="">
                            </td>
                            <td class="align-middle"> <div class="color bg-danger mx-auto" style="width:30px; height:30px;"></div></td>
                            <td class="align-middle">12</td>
                            <td class="align-middle px-0">
                                <button type="button" class="btn btn-primary btn-md p-3"><i class="far fa-eye"></i></i></button>
                                <button type="button" class="btn btn-success btn-md p-3"><i class="far fa-edit"></i></button>
                                <button type="button" class="btn btn-danger btn-md p-3"><i class="fas fa-times"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="row d-flex justify-content-center mt-2 w-100">
        <div class="col-12 col-xs-12 col-md-6 col-lg-4">
            <h3 class="text-center py-3">Agregar color a un producto</h3>
            <form action="" class="text-center">
                <div class="input-gorup d-flex text-muted py-1">
                    <h4 class="my-auto">Producto: <div class="d-inline">Nombre producto <div class="d-inline"> (codigo)</div></div></h4>
                </div>
                <div class="input-group py-1 ">
                    <label for="fileFotoProduc" class="form-label pr-1">Imagen:</label>
                    <input type="file" name="fileFotoProduc" id="fileFotoProduc" class="form-control">
                </div>
                <div class="input-group py-1 ">
                    <label for="fileColorProduc" class="form-label pr-1">Color:</label>
                    <input type="color" name="fileColorProduc" id="fileColorProduc" class="form-control">
                </div>
                <div class="input-group py-1 ">
                    <label for="txtStockProdc" class="pr-1 form-label">Stock:</label>
                    <input type="number" name="txtStockProdc" id="txtStockProdc" class="form-control" value="1" min="1" max="">
                </div>
                <div class="input-group  py-1 d-flex justify-content-center">
                    <button type="reset" class="btn btn-danger">Cancelar</button>
                    <button type="submit" class="btn btn-success">Aceptar</button>
                </div>
            </form>
        </div>
    </div>
@endsection
@section('script')
<script src="{{asset('js/app.js')}}" defer></script>
@endsection