@extends('layouts.admin')

@section('title', 'productos')
    
@section('container')
    <div class="container mt-5">
        <div class="row d-flex justify-content-center">
            <div class="col-12 col-xs-12 col-md-10 mt-4">
                <div class="text-center">
                    <h4>Productos</h4>
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-12 col-xs-12 col-md-12">
                <div class="table-responsive">
                    <table class="table table-striped" id="tablaProductos">
                        <thead>
                            <tr class="text-center">
                                <th scope="col">Codigo</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Ver</th>
                                <th scope="col">Editar</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr>
                                <th class="align-middle" scope="row">1</th>
                                <td class="align-middle">Nombre</td>
                                <td class="align-middle">Categoria</td>
                                <td class="align-middle">$1230</td>
                                <td class="align-middle">Visible</td>
                                <td class="align-middle">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
                                <td class="align-middle text-center">
                                    <a href="{{asset('/admin/ver_producto/1')}}" class="btn btn-primary text-white"><i class="far fa-eye"></i></i></a>
                                </td>
                                <td class="align-middle text-center">
                                    <a href="{{asset('/admin/editar_producto/1')}}" class="btn btn-success text-white"><i class="far fa-edit"></i></a>
                                </td>
                                <td class="align-middle text-center">
                                    <button type="button" class="btn btn-danger"><i class="fas fa-times"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <th class="align-middle" scope="row">2</th>
                                <td class="align-middle">Nombre</td>
                                <td class="align-middle">Categoria</td>
                                <td class="align-middle">$2310</td>
                                <td class="align-middle">Visible</td>
                                <td class="align-middle">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
                                <td class="align-middle text-center">
                                        <button type="button" class="btn btn-primary"><i class="far fa-eye"></i></i></button>
                                </td>
                                <td class="align-middle text-center">
                                    <a href="{{asset('/admin/editar_producto/1')}}" class="btn btn-success text-white"><i class="far fa-edit"></i></a>
                                </td>
                                <td class="align-middle text-center">
                                    <button type="button" class="btn btn-danger"><i class="fas fa-times"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <th class="align-middle" scope="row">3</th>
                                <td class="align-middle">Nombre</td>
                                <td class="align-middle">Categoria</td>
                                <td class="align-middle">$2133</td>
                                <td class="align-middle">Visible</td>
                                <td class="align-middle">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
                                <td class="align-middle text-center">
                                    <button type="button" class="btn btn-primary"><i class="far fa-eye"></i></i></button>
                                </td>
                                <td class="align-middle text-center">
                                    <a href="{{asset('/admin/editar_producto/1')}}" class="btn btn-success text-white"><i class="far fa-edit"></i></a>
                                </td>
                                <td class="align-middle text-center">
                                    <button type="button" class="btn btn-danger"><i class="fas fa-times"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection