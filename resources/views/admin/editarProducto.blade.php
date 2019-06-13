@extends('layouts.admin')

@section('title','Editar producto')

@section('container')
    <div class="container">
        <div class="row d-flex justify-content-center mt-4">
            <div class="col col-12">
                <h2 class="text-center">Editar producto</h2>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-12 col-xs-12 col-md-12 col-lg-8 border-right">
                <form action="" >
                    <div class="form-group">
                        <label for="txtCodProducto">Codigo:</label>
                        <input type="text" class="form-control" name="txtCodProducto" id="txtCodProducto">
                    </div>
                    <div class="form-group">
                        <label for="txtNombreProducto">Nombre:</label>
                        <input type="text" class="form-control" name="txtNombreProducto" id="txtNombreProducto">
                    </div>
                    <div class="form-group">
                        <label for="cbCategoriaProducto">Categoria:</label>
                        <select name="" id="" class="custom-select">
                            <option value="0">Seleccione una categoria</option>
                            <option value="1" selected>Categoria 1</option>
                            <option value="2">Categoria 2</option>
                            <option value="3">Categoria 3</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="txtPrecioProducto">Precio:</label>
                        <input type="number" name="txtPrecioProducto" id="txtPrecioProducto" min="0" value="1234" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="txtColoresProducto">Colores:</label>
                        <div class="table-wrapper-scroll-y my-custom-scrollbar">
                            <table class="table  mb-0">
                                <thead>
                                    <tr>
                                        <th class="align-center text-center align-middle">Color</th>
                                        <th class="align-center text-center align-middle">Stock</th>
                                        <th class="align-center text-center align-middle">Accion</th>
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
                                        <td class="align-center align-middle text-center">
                                            <button type="button" class="btn btn-success py-2 px-3 text-center"><i class="fas fa-edit"></i></button>
                                            <button type="button" class="btn btn-danger py-2 px-3 text-center"><i class="fas fa-trash"></i></button>
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
                                        <td class="align-center align-middle text-center">
                                            <button type="button" class="btn btn-success py-2 px-3 text-center"><i class="fas fa-edit"></i></button>
                                            <button type="button" class="btn btn-danger py-2 px-3 text-center"><i class="fas fa-trash"></i></button>
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
                                        <td class="align-center align-middle text-center">
                                            <button type="button" class="btn btn-success py-2 px-3 text-center"><i class="fas fa-edit"></i></button>
                                            <button type="button" class="btn btn-danger py-2 px-3 text-center"><i class="fas fa-trash"></i></button>
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
                                        <td class="align-center align-middle text-center">
                                            <button type="button" class="btn btn-success py-2 px-3 text-center"><i class="fas fa-edit"></i></button>
                                            <button type="button" class="btn btn-danger py-2 px-3 text-center"><i class="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                   
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div class="form-group">
                        <label for="txtPrecioProducto">Imagenes:</label>
                        <div class="imagenesProducto">
                            <img src="https://via.placeholder.com/75x75.png" alt="" class="my-1">
                            <img src="https://via.placeholder.com/75x75.png" alt="" class="my-1">
                            <img src="https://via.placeholder.com/75x75.png" alt="" class="my-1">
                            <img src="https://via.placeholder.com/75x75.png" alt="" class="my-1">
                            <img src="https://via.placeholder.com/75x75.png" alt="" class="my-1">
                            <img src="https://via.placeholder.com/75x75.png" alt="" class="my-1">
                            <img src="https://via.placeholder.com/75x75.png" alt="" class="my-1">
                            <img src="https://via.placeholder.com/75x75.png" alt="" class="my-1">
                        </div>
                        <button type="button" class="btn btn-success ml-auto"><i class="fas fa-edit"></i> Editar imagenes</button>
                    </div>
                    <div class="form-group">
                        <label for="txtDescripcionProducto">Descripcion:</label>
                        <textarea name="txtDescripcionProducto" id="txtDescripcionProducto" class="form-control w-100" cols="30" rows="10" ></textarea>
                    </div>
                    <div class="form-group text-right">
                        <button type="submit" class="btn btn-primary">Guardar cambios</button>
                    </div>
                </form>
            </div>
            <div class="col-12 col-xs-12 col-md-12 col-lg-4">
                <div class="col-12 col-xs-12 col-md-12 col-lg-12  border-bottom pb-4">
                    <h3 class="text-center text-muted">Agregar nuevo color</h3>
                    <form action="" >
                        <div class="form-group">
                            <label for="txtColor">Color:</label>
                            <input type="color" name="txtColor" id="txtColor" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="txtStock">Stock:</label>
                            <input type="number" name="txtStock" id="txtStock" class="form-control" value="1" min="0">
                        </div>
                        <div class="text-center">
                            <button type="reset" class="btn btn-danger"><i class="fas fa-times"></i></button>
                            <button type="submit" class="btn btn-success"><i class="fas fa-check"></i></button>
                        </div>
                    </form>
                </div>
                <div class="col-12 col-xs-12 col-md-12 col-lg-12 mt-4 border-bottom">
                        <h3 class="text-center text-muted">Agregar nueva imagen</h3>
                        <form action="" >
                            <div class="form-group">
                                <label for="txtimagen">imagen:</label>
                                <input type="file" name="txtimagen" id="txtimagen" class="">
                            </div>
                            <div class="form-group">
                                <label for="txtStock">Colores:</label>
                                <div class="colores">
                                    <div>
                                        <input type="radio" name="radioColor1" id="radioColor1">
                                        <label for="radioColor1" ><span style="background-color:red;" class="text-center"><i class="fas fa-check"></i></span></label>
                                        <input type="radio" name="radioColor1" id="radioColor2">
                                        <label for="radioColor2" ><span style="background-color:yellow;" class="text-center"><i class="fas fa-check"></i></span></label>
                                        <input type="radio" name="radioColor1" id="radioColor3">
                                        <label for="radioColor3" ><span style="background-color:green;" class="text-center"><i class="fas fa-check"></i></span></label>
                                        <input type="radio" name="radioColor1" id="radioColor4">
                                        <label for="radioColor4" ><span style="background-color:black;" class="text-center"><i class="fas fa-check"></i></span></label>
                                    </div>
                                </div>                  
                            </div>
                            <div class="text-center form-group">
                                <button type="reset" class="btn btn-danger"><i class="fas fa-times"></i></button>
                                <button type="submit" class="btn btn-success"><i class="fas fa-check"></i></button>
                            </div>
                        </form>
                </div>
                <div class="col-12 col-xs-12 col-md-12 col-lg-12 mt-4 border-bottom">
                    <h3 class="text-muted text-center">Generar cupon</h3>
                    <form action="">
                        <div class="form-group">
                            <label for="txtCuponDescuento">Valor del cupon: </label>
                            <input type="text" name="txtCuponDescuento" id="txtCuponDescuento" class="form-control" placeholder="$">
                        </div>
                        <div class="form-group text-center">
                                <button type="reset" class="btn btn-danger"><i class="fas fa-times"></i></button>
                            <button type="submit" class="btn btn-success"><i class="fas fa-check"></i></button>
                        </div>
                    </form>
                </div>
                <div class="col-12 col-xs-12 col-md-12 col-lg-12 mt-4 ">
                    <h3 class="text-muted text-center">Generar descuento</h3>
                    <form action="">
                        <div class="form-group">
                            <label for="txtCuponDescuento">% en descuento: </label>
                            <input type="text" name="txtCuponDescuento" id="txtCuponDescuento" class="form-control" placeholder="%">
                        </div>
                        <div class="form-group text-center">
                                <button type="reset" class="btn btn-danger"><i class="fas fa-times"></i></button>
                            <button type="submit" class="btn btn-success"><i class="fas fa-check"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('script')
<script src="{{asset('js/app.js')}}" defer></script>
<script>
    $(document).ready(function(){
        var editor = new Jodit('#txtDescripcionProducto',{
            height: 200
        });
    });
</script>
@endsection