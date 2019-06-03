@extends('layouts.admin')

@section('title','Ver producto')
    
@section('container')
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-12 col-xs-12 col-md-6 col-lg-6 mt-5">
                <h3 class="text-center">Producto</h3>
                <div class="product-detail ">
                    <h4 class="text-muted">Codigo: <span class="text-dark">Codigo del producto</span></h4>
                    <h4 class="text-muted">Nombre: <span class="text-dark">Nombre del producto</span></h4>
                    <h4 class="text-muted">Categoria: <span class="text-dark">Categoria del producto</span></h4>
                    <h4 class="text-muted">Precio: <span class="text-dark">Precio del producto</span></h4>
                    <h4 class="text-muted">Colores:</h4>
                    <div class="table-wrapper-scroll-y my-custom-scrollbar mb-3 pl-1 ">
                        <table class="table  mb-0">
                            <thead>
                                <tr>
                                    <th class="align-center text-center align-middle">Color</th>
                                    <th class="align-center text-center align-middle">Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="align-center align-middle">
                                        <div class="colores">
                                            <input type="radio" name="radioColor" id="radioColor">
                                            <label for="radioColor" class="form-check-label disabled"><span style="background-color:red;"></span></label>
                                        </div>
                                    </td>
                                    <td class="align-center align-middle">
                                        <h5>10</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="align-center align-middle">
                                        <div class="colores">
                                            <input type="radio" name="radioColor" id="radioColor">
                                            <label for="radioColor" class="form-check-label disabled"><span style="background-color:yellow;"></span></label>
                                        </div>
                                    </td>
                                    <td class="align-center align-middle">
                                        <h5>10</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="align-center align-middle">
                                        <div class="colores">
                                            <input type="radio" name="radioColor" id="radioColor">
                                            <label for="radioColor" class="form-check-label disabled"><span style="background-color:green;"></span></label>
                                        </div>
                                    </td>
                                    <td class="align-center align-middle">
                                        <h5>10</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="align-center align-middle">
                                        <div class="colores">
                                            <input type="radio" name="radioColor" id="radioColor">
                                            <label for="radioColor" class="form-check-label disabled"><span style="background-color:black;"></span></label>
                                        </div>
                                    </td>
                                    <td class="align-center align-middle">
                                        <h5>10</h5>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    <h4 class="text-muted">Imagenes:</h4>
                    <div class="imagenesProducto mb-3 border pl-1">
                        <img src="https://via.placeholder.com/75x75.png" alt="" class="my-1">
                        <img src="https://via.placeholder.com/75x75.png" alt="" class="my-1">
                        <img src="https://via.placeholder.com/75x75.png" alt="" class="my-1">
                        <img src="https://via.placeholder.com/75x75.png" alt="" class="my-1">
                        <img src="https://via.placeholder.com/75x75.png" alt="" class="my-1">
                        <img src="https://via.placeholder.com/75x75.png" alt="" class="my-1">
                        <img src="https://via.placeholder.com/75x75.png" alt="" class="my-1">
                        <img src="https://via.placeholder.com/75x75.png" alt="" class="my-1">
                    </div>
                    <h4 class="text-muted">Descripcion:</h4>
                    <textarea name="" id="" cols="30" rows="10" class="w-100 mb-2" disabled>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id at tenetur alias, quaerat modi totam, quasi ullam incidunt quo, laboriosam impedit doloribus dolor et nemo ducimus repellat. Illum, adipisci ratione?
                    </textarea>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection