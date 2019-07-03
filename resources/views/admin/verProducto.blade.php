@extends('layouts.admin')

@section('title','Ver producto')
    
@section('container')
    <div class="container">
        <div class="row d-flex justify-content-center mt-4">
            <div class="col-12">
                <h3 class="text-center">Producto</h3>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-12 col-xs-12 col-md-6 col-lg-6 ">
                <div class="product-detail ">
                    <h4 >Codigo: <span class="text-muted">Codigo del producto</span></h4>
                    <h4 >Nombre: <span class="text-muted">Nombre del producto</span></h4>
                    <h4 >Categoria: <span class="text-muted">Categoria del producto</span></h4>
                    <h4 >Precio: <span class="text-muted">Precio del producto</span></h4>
                    <h4 >Estado:<span class="text-muted">Visible</span></h4>
                    <h4 >Colores:</h4>
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
                        <img src="https://via.placeholder.com/100x100.png" alt="" class="my-1">
                        <img src="https://via.placeholder.com/100x100.png" alt="" class="my-1">
                        <img src="https://via.placeholder.com/100x100.png" alt="" class="my-1">
                        <img src="https://via.placeholder.com/100x100.png" alt="" class="my-1">
                        <img src="https://via.placeholder.com/100x100.png" alt="" class="my-1">
                        <img src="https://via.placeholder.com/100x100.png" alt="" class="my-1">
                        <img src="https://via.placeholder.com/100x100.png" alt="" class="my-1">
                        <img src="https://via.placeholder.com/100x100.png" alt="" class="my-1">
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