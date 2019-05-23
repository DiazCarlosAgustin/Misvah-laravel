@extends('layouts.app')

@section('title','Carrito')
    
@section('Container')
    <div class="container mt-5">
        <div class="row ">
            <div class="col-12">
                <div class="titulo-carrito mt-5 pb-3">
                    Mi carrito
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 ">
                    <table id="dtHorizontalExample" class="table text-center table-sm table-responsive" cellspacing="0"
                    width="100%">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio unitario</th>
                                <th scope="col">Precio Total</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="">
                                <td class="align-middle"><img src="https://via.placeholder.com/75x75.png" alt=""></td>
                                <td class="align-middle"><h6>Nombre del producto</h6></td>
                                <td class="align-middle ">
                                    <form action="">
                                        <input type="number" name="txtCantidad" id="txtCantidad" min="1" max="" value="1" class="form-control text-center mx-auto">
                                    </form>
                                </td>
                                <td class="align-middle"><h6>$350</h6></td>
                                <td class="align-middle"><h6>$350</h6></td>
                                <td class="align-middle">
                                    <button class="btn btn-danger btn-sm">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr class="">
                                <td class="align-middle"><img src="https://via.placeholder.com/75x75.png" alt=""></td>
                                <td class="align-middle"><h6>Nombre del producto</h6></td>
                                <td class="align-middle ">
                                    <form action="">
                                        <input type="number" name="txtCantidad" id="txtCantidad" min="1" max="" value="2" class="form-control text-center mx-auto">
                                    </form>
                                </td>
                                <td class="align-middle"><h6>$350</h6></td>
                                <td class="align-middle"><h6>$700</h6></td>
                                <td class="align-middle">
                                    <button class="btn btn-danger btn-sm">
                                            <i class="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-right px-3" colspan="6">
                                    <h5>Total: $1050</h5>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row d-flex justify-content-center  mt-2">
                <div class="col-12 col-xs-12 col-md-6">
                    <form action="">
                            <div class="input-group mt-2 form-group-sm">
                                <input type="text" class="form-control" placeholder="Cupon" aria-label="Example text with button addon"
                                aria-describedby="button-addon1">
                                <div class="input-group-prepend">
                                    <button class="btn btn-md btn-pink m-0 px-3 py-2 z-depth-0 waves-effect" type="button" id="button-addon1">Cajear</button>
                                </div>
                            </div>
                    </form>
                </div>
                <div class="col-12 col-xs-12 col-md-6">
                    <button class="btn btn-pink float-right">Continuar con la compra</button>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection