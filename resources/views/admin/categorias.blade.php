@extends('layouts.admin')

@section('title', 'Categorias')
    
@section('container')
    <div class="container">
       <div class="row d-flex justify-content-center">
           <div class="col-12 text-center">
               <h2>Categorias</h2>
           </div>
       </div>
       <div class="row d-flex justify-content-center">
           <div class="col-12 col-xs-12 col-md-6">
               <form action="">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Buscar" aria-label="Buscar" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-rosa" type="button">
                                <i class="material-icons align-middle">
                                    search
                                </i>
                            </button>
                        </div>
                    </div>
               </form>
           </div>
       </div>
       <div class="row d-flex justify-content-center">
            <div class="col-12 col-md-10 text-center mt-2">
                    <table class="table table-striped">
                            <thead class="">
                              <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Imagen </th>
                                <th scope="col">Acción</th>
                              </tr>
                            </thead>
                            <tbody>
                                <tr class="">
                                    <th class="align-middle" scope="row">1</th>
                                    <td class="align-middle">Categoria</td>
                                    <td class="align-middle">
                                         <img src="https://via.placeholder.com/75x75.png" alt="">
                                    </td>
                                    <td class="align-middle">
                                        <button type="button" class="btn btn-success">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" class="align-middle">2</th>
                                    <td class="align-middle">Categoria</td>
                                    <td class="align-middle">
                                        <img src="https://via.placeholder.com/75x75.png" alt="">
                                    </td>
                                    <td class="align-middle">
                                        <button type="button" class="btn btn-success">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" class="align-middle">3</th>
                                    <td class="align-middle">Categoria</td>
                                    <td class="align-middle">
                                        <img src="https://via.placeholder.com/75x75.png" alt="">
                                    </td>
                                    <td class="align-middle">
                                        <button type="button" class="btn btn-success">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" class="align-middle">4</th>
                                    <td class="align-middle">Categoria</td>
                                    <td class="align-middle">
                                        <img src="https://via.placeholder.com/75x75.png" alt="">
                                    </td>
                                    <td class="align-middle">
                                        <button type="button" class="btn btn-success">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td class="align-middle">Categoria</td>
                                    <td class="align-middle">
                                        <img src="https://via.placeholder.com/75x75.png" alt="">
                                    </td>
                                    <td class="align-middle">
                                        <button type="button" class="btn btn-success">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                            </tbody>
                    </table>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-10 text-right">
                <a href="{{asset('/admin/nueva_categoria')}}" class="btn btn-rosa text-white">Nueva categoria</a>
            </div>
        </div>
    </div>
@endsection

@section('script')
@endsection