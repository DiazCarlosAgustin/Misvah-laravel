@extends('layouts.admin')

@section('title', 'Categorias')
    
@section('container')
    <div class="container mt-5">
       <div class="row d-flex justify-content-center">
           <div class="col-12 text-center mt-4">
               <h4>Categorias</h4>
           </div>
       </div>
       <div class="row d-flex justify-content-center">
            <div class="col-12 col-md-10 text-center mt-2 mb-3">
                    <table class="table table-striped">
                            <thead class="">
                              <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Imagen </th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Editar</th>
                                <th scope="col">editar</th>
                              </tr>
                            </thead>
                            <tbody>
                                <tr class="">
                                    <th class="align-middle" scope="row">1</th>
                                    <td class="align-middle">Categoria</td>
                                    <td class="align-middle">
                                         <img src="https://via.placeholder.com/75x75.png" alt="">
                                    </td>
                                    <td class="aling-middle">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    </td>
                                    <td class="align-middle text-center">
                                        <a href={{asset('admin/editar_categoria/1')}} class="btn btn-success text-white"><i class="far fa-edit"></i></a>
                                    </td>
                                    <td class="align-middle text-center">
                                        <button type="button" class="btn btn-danger"><i class="fas fa-times"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" class="align-middle">2</th>
                                    <td class="align-middle">Categoria</td>
                                    <td class="align-middle">
                                        <img src="https://via.placeholder.com/75x75.png" alt="">
                                    </td>
                                    <td class="aling-middle">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    </td>
                                    <td class="align-middle text-center">
                                <button type="button" class="btn btn-success"><i class="far fa-edit"></i></button>
                            </td>
                            <td class="align-middle text-center">
                                <button type="button" class="btn btn-danger"><i class="fas fa-times"></i></button>
                            </td>
                                </tr>
                                <tr>
                                    <th scope="row" class="align-middle">3</th>
                                    <td class="align-middle">Categoria</td>
                                    <td class="align-middle">
                                        <img src="https://via.placeholder.com/75x75.png" alt="">
                                    </td>
                                    <td class="aling-middle">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    </td>
                                    <td class="align-middle text-center">
                                <button type="button" class="btn btn-success"><i class="far fa-edit"></i></button>
                            </td>
                            <td class="align-middle text-center">
                                <button type="button" class="btn btn-danger"><i class="fas fa-times"></i></button>
                            </td>
                                </tr>
                                <tr>
                                    <th scope="row" class="align-middle">4</th>
                                    <td class="align-middle">Categoria</td>
                                    <td class="align-middle">
                                        <img src="https://via.placeholder.com/75x75.png" alt="">
                                    </td>
                                    <td class="aling-middle">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    </td>
                                    <td class="align-middle text-center">
                                        <button type="button" class="btn btn-success"><i class="far fa-edit"></i></button>
                                    </td>
                                    <td class="align-middle text-center">
                                        <button type="button" class="btn btn-danger"><i class="fas fa-times"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td class="align-middle">Categoria</td>
                                    <td class="align-middle">
                                        <img src="https://via.placeholder.com/75x75.png" alt="">
                                    </td>
                                    <td class="aling-middle">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
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
        </div>
    </div>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection