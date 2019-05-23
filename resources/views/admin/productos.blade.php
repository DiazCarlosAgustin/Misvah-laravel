@extends('layouts.admin')

@section('title', 'productos')
    
@section('container')
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-12 col-xs-12 col-md-10">
                <div class="text-center">
                    <h2>Productos</h2>
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-12 col-xs-12 col-md-6">
                <form action="">
                     <div class="input-group mb-3">
<<<<<<< HEAD
                         <input type="text" class="form-control my-auto" placeholder="Buscar  producto" aria-label="Buscar" aria-describedby="basic-addon2">
=======
                         <input type="text" class="form-control" placeholder="Buscar  producto" aria-label="Buscar" aria-describedby="basic-addon2">
>>>>>>> db0e47929f93d640a292cd3f500139503ce596f9
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
            <div class="col-12 col-xs-12 col-md-12">
<<<<<<< HEAD
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr class="text-center">
                                <th scope="col">Codigo</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Precio</th>
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
                                <td class="align-middle">10</td>
                                <td class="align-middle">$1230</td>
                                <td class="align-middle">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
                                <td class="align-middle text-center">
                                    <button type="button" class="btn btn-primary"><i class="far fa-eye"></i></i></button>
                                </td>
                                <td class="align-middle text-center">
                                    <button type="button" class="btn btn-success"><i class="far fa-edit"></i></button>
                                </td>
                                <td class="align-middle text-center">
                                    <button type="button" class="btn btn-danger"><i class="fas fa-times"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <th class="align-middle" scope="row">2</th>
                                <td class="align-middle">Nombre</td>
                                <td class="align-middle">Categoria</td>
                                <td class="align-middle">10</td>
                                <td class="align-middle">$2310</td>
                                <td class="align-middle">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
                                <td class="align-middle text-center">
                                        <button type="button" class="btn btn-primary"><i class="far fa-eye"></i></i></button>
                                </td>
                                <td class="align-middle text-center">
                                    <button type="button" class="btn btn-success"><i class="far fa-edit"></i></button>
                                </td>
                                <td class="align-middle text-center">
                                    <button type="button" class="btn btn-danger"><i class="fas fa-times"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <th class="align-middle" scope="row">3</th>
                                <td class="align-middle">Nombre</td>
                                <td class="align-middle">Categoria</td>
                                <td class="align-middle">10</td>
                                <td class="align-middle">$2133</td>
                                <td class="align-middle">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
                                <td class="align-middle text-center">
                                    <button type="button" class="btn btn-primary"><i class="far fa-eye"></i></i></button>
                                </td>
                                <td class="align-middle text-center">
                                    <button type="button" class="btn btn-success"><i class="far fa-edit"></i></button>
                                </td>
                                <td class="align-middle text-center">
                                    <button type="button" class="btn btn-danger"><i class="fas fa-times"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
=======
                <table class="table table-striped">
                    <thead>
                        <tr class="text-center">
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Imagenes</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Ver</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="align-middle" scope="row">1</th>
                            <td class="align-middle">Nombre</td>
                            <td class="align-middle">Categoria</td>
                            <td class="align-middle">10</td>
                            <td class="align-middle">$1230</td>
                            <td class="align-middle">
                                    <img src="https://via.placeholder.com/75x75.png" alt="">
                            </td>
                            <td class="align-middle">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
                            <td class="align-middle text-center">
                                <button type="button" class="btn btn-primary"><i class="far fa-eye"></i></i></button>
                            </td>
                            <td class="align-middle text-center">
                                <button type="button" class="btn btn-success"><i class="far fa-edit"></i></button>
                            </td>
                            <td class="align-middle text-center">
                                <button type="button" class="btn btn-danger"><i class="fas fa-times"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <th class="align-middle" scope="row">2</th>
                            <td class="align-middle">Nombre</td>
                            <td class="align-middle">Categoria</td>
                            <td class="align-middle">10</td>
                            <td class="align-middle">$2310</td>
                            <td class="align-middle">
                                    <img src="https://via.placeholder.com/75x75.png" alt="">
                            </td>
                            <td class="align-middle">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
                            <td class="align-middle text-center">
                                    <button type="button" class="btn btn-primary"><i class="far fa-eye"></i></i></button>
                            </td>
                            <td class="align-middle text-center">
                                <button type="button" class="btn btn-success"><i class="far fa-edit"></i></button>
                            </td>
                            <td class="align-middle text-center">
                                <button type="button" class="btn btn-danger"><i class="fas fa-times"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <th class="align-middle" scope="row">3</th>
                            <td class="align-middle">Nombre</td>
                            <td class="align-middle">Categoria</td>
                            <td class="align-middle">10</td>
                            <td class="align-middle">$2133</td>
                            <td class="align-middle">
                                    <img src="https://via.placeholder.com/75x75.png" alt="">
                            </td>
                            <td class="align-middle">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
                            <td class="align-middle text-center">
                                <button type="button" class="btn btn-primary"><i class="far fa-eye"></i></i></button>
                            </td>
                            <td class="align-middle text-center">
                                <button type="button" class="btn btn-success"><i class="far fa-edit"></i></button>
                            </td>
                            <td class="align-middle text-center">
                                <button type="button" class="btn btn-danger"><i class="fas fa-times"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
>>>>>>> db0e47929f93d640a292cd3f500139503ce596f9
            </div>
        </div>
    </div>
@endsection

@section('script')
<<<<<<< HEAD
    <script src="{{asset('js/app.js')}}" defer></script>
=======
>>>>>>> db0e47929f93d640a292cd3f500139503ce596f9
@endsection