@extends('layouts.admin')

@section('title', 'Inicio')

@section('container')
    <div class="container" >
        <div class="row mt-4 d-flex justify-content-center">
            <div class="  col-sm-12 col-md-6 col-lg-3 ">
                <div class="col-12 d-flex text-white border border-dark deep-purple accent-4 w-100 h-100 rounded z-depth-4">
                    <div class="col-4  my-auto  ">
                        <i class="fas fa-shopping-cart fa-3x align-middle"></i>
                    </div>
                    <div class="col-8 align-right align-center my-auto  ">
                        <div class="text-center ">
                            <h3>2</h3>
                            <h4> Nuevas ordenes</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="   col-sm-12 col-md-6 col-lg-3 ">
                <div class="col-12 d-flex text-white border border-dark deep-purple accent-4 w-100 h-100 rounded z-depth-4">
                    <div class="col-4  my-auto  ">
                        <i class="fas fa-user fa-3x align-middle"></i>
                    </div>
                    <div class="col-8 align-right align-center my-auto  ">
                        <div class="text-center ">
                            <h3>12</h3>
                            <h4>Nuevos usuarios</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="   col-sm-12 col-md-6 col-lg-3 ">
                <div class="col-12 d-flex text-white border border-dark deep-purple accent-4  w-100 h-100 rounded z-depth-4 ">
                    <div class="col-4 my-auto   ">
                            <i class="fas fa-cash-register fa-3x align-middle"></i>
                    </div>
                    <div class="col-8 align-right align-center my-auto  ">
                        <div class="text-center ">
                            <h3>12</h3>
                            <h4>Ventas Totales</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="   col-sm-12 col-md-6 col-lg-3 ">
                <div class="col-12 d-flex text-white border border-dark deep-purple accent-4 w-100 h-100 rounded z-depth-4">
                    <div class="col-4  my-auto  ">
                        <i class="fas fa-tshirt fa-3x align-middle"></i>
                    </div>
                    <div class="col-8 align-right align-center my-auto  ">
                        <div class="text-center ">
                            <h3>22</h3>
                            <h4>Productos vendidos</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row d-tabla-ordenes mt-5 text-center">
            <div class="col-12">
                <table id="dtHorizontalExample" class="table table-striped table-bordered table-sm" cellspacing="0"
                    width="100%">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Dirección</th>
                            <th>Piso</th>
                            <th>Telefono</th>
                            <th>Fecha</th>
                            <th>Estado</th>
                            <th>Total</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="align-middle">Diaz Agustin</td>
                            <td class="align-middle">Independencia 715</td>
                            <td class="align-middle">5</td>
                            <td class="align-middle">3521-407811</td>
                            <td class="align-middle">01-05-2019</td>
                            <td class="align-middle">Pendiente</td>
                            <td class="align-middle">$3050</td>
                            <td><button class="btn btn-info btn-sm">Detalles</button></td>
                        </tr>
                        <tr>
                            <td class="align-middle">Diaz Agustin</td>
                            <td class="align-middle">Independencia 715</td>
                            <td class="align-middle">5</td>
                            <td class="align-middle">3521-407811</td>
                            <td class="align-middle">01-05-2019</td>
                            <td class="align-middle">Pendiente</td>
                            <td class="align-middle">$3050</td>
                            <td><button class="btn btn-info btn-sm">Detalles</button></td>
                        </tr>
                        <tr>
                            <td class="align-middle">Diaz Agustin</td>
                            <td class="align-middle">Independencia 715</td>
                            <td class="align-middle">5</td>
                            <td class="align-middle">3521-407811</td>
                            <td class="align-middle">01-05-2019</td>
                            <td class="align-middle">Entregado</td>
                            <td class="align-middle">$3050</td>
                            <td><button class="btn btn-info btn-sm">Detalles</button></td>
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