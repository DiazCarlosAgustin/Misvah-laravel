@extends('layouts.admin')

@section('title', 'Pedidos')
    
@section('container')
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-12 col-xs-12 col-md-10">
                <h2 class="text-black text-center">
                    Detalle de los pedidos
                </h2>
            </div>
        </div>
        <div class="row d-flex justify-content-center my-3">
            <div class="col-12 col-xs-12 col-md-12">
                <table class="table table-striped text-center">
                    <thead>
                        <tr class="text-center">
                            <th scope="col"  class="align-middle">ID de la orden</th>
                            <th scope="col"  class="align-middle">Producto</th>
                            <th scope="col"  class="align-middle">Cantidad</th>
                            <th scope="col"  class="align-middle">Usuario</th>
                            <th scope="col"  class="align-middle">Mail</th>
                            <th scope="col"  class="align-middle">Dirección</th>
                            <th scope="col"  class="align-middle">Fecha del pedido</th>
                            <th scope="col"  class="align-middle">Fecha de entrega</th>
                            <th scope="col"  class="align-middle">Estado</th>
                            <th scope="col"  class="align-middle">Ver</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="align-middle" scope="row">2</th>
                            <td class="align-middle">Nom. producto</td>
                            <td class="align-middle">2</td>
                            <td class="align-middle">Nombre Usuario</td>
                            <td class="align-middle">Correo@gmail.com</td>
                            <td class="align-middle">calle falsa 123</td>
                            <td class="align-middle">12-02-2019</td>
                            <td class="align-middle">19-02-2019</td>
                            <td class="align-middle">Entregado</td>
                            <td class="align-middle">
                                <button class="btn btn-success">Ver</button>
                            </td>
                        </tr>
                        <tr>
                            <th class="align-middle" scope="row">2</th>
                            <td class="align-middle">Nom. producto</td>
                            <td class="align-middle">1</td>
                            <td class="align-middle">Nombre Usuario</td>
                            <td class="align-middle">Correo@gmail.com</td>
                            <td class="align-middle">calle falsa 123</td>
                            <td class="align-middle">01-02-2019</td>
                            <td class="align-middle">07-02-2019</td>
                            <td class="align-middle">Entregado</td>
                            <td class="align-middle">
                                <button class="btn btn-success">Ver</button>
                            </td>
                        </tr>
                        <tr>
                            <th class="align-middle" scope="row">2</th>
                            <td class="align-middle">Nom. producto</td>
                            <td class="align-middle">1</td>
                            <td class="align-middle">Nombre Usuario</td>
                            <td class="align-middle">Correo@gmail.com</td>
                            <td class="align-middle">calle falsa 123</td>
                            <td class="align-middle">01-02-2019</td>
                            <td class="align-middle">07-02-2019</td>
                            <td class="align-middle">Entregado</td>
                            <td class="align-middle">
                                <button class="btn btn-success">Ver</button>
                            </td>
                        </tr>
                        <tr>
                            <th class="align-middle" scope="row">1</th>
                            <td class="align-middle">Nom. producto</td>
                            <td class="align-middle">1</td>
                            <td class="align-middle">Nombre Usuario</td>
                            <td class="align-middle">Correo@gmail.com</td>
                            <td class="align-middle">calle falsa 123</td>
                            <td class="align-middle">01-02-2019</td>
                            <td class="align-middle">07-02-2019</td>
                            <td class="align-middle">Entregado</td>
                            <td class="align-middle">
                                <button class="btn btn-success">Ver</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection