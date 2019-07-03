@extends('layouts.admin')

@section('title', 'Inicio')

@section('container')
    <div class="container" >
        <div class="row mt-5">
            <div class="col-12 col-xs-12 col-md-6 col-lg-3 mt-5">
                <div class="card">
                    <div class="card-head">
                        <div class="card-icon col">
                            <i class="fas fa-shopping-bag fa-2x"></i>
                        </div>
                        <div class="card-title col text-right">
                            <h5 class="text-muted pt-2">Nuevas ordenes</h5>
                        </div>
                        <div class="card-subtitle text-right">
                            <h3 class="px-3 text-muted">22</h3>
                        </div>
                    </div>
                    <div class="card-footer d-flex h-100 justify-content-center">
                        <i class="fas fa-clock  text-muted d-flex"><div class="i-time pl-1 h6">Hace 2 horas</div></i>
                    </div>
                </div>
            </div>
            <div class="col-12 col-xs-12 col-md-6 col-lg-3 mt-5">
                <div class="card">
                    <div class="card-head">
                        <div class="card-icon col">
                            <i class="fas fa-chart-line fa-2x"></i>
                        </div>
                        <div class="card-title col text-right">
                            <h5 class="text-muted pt-2">Ingresos del mes</h5>
                        </div>
                        <div class="card-subtitle text-right">
                            <h3 class="px-3 text-muted">$22,033.30</h3>
                        </div>
                    </div>
                    <div class="card-footer d-flex h-100 justify-content-center">
                        <i class="fas fa-calendar-day  text-muted d-flex"><div class="i-time pl-1 h6">Mes de Junio</div></i>
                    </div>
                </div>
            </div>
            <div class="col-12 col-xs-12 col-md-6 col-lg-3 mt-5">
                <div class="card">
                    <div class="card-head">
                        <div class="card-icon col">
                            <i class="fas fa-shopping-cart fa-2x"></i>
                        </div>
                        <div class="card-title col text-right">
                            <h5 class="text-muted pt-2">Ventas totales</h5>
                        </div>
                        <div class="card-subtitle text-right">
                            <h3 class="px-3 text-muted">2314</h3>
                        </div>
                    </div>
                    <div class="card-footer d-flex h-100 justify-content-center">
                        <i class="fas fa-clock text-muted d-flex"><div class="i-time pl-1 h6">Hace 2 horas</div></i>
                    </div>
                </div>
            </div>
            <div class="col-12 col-xs-12 col-md-6 col-lg-3 mt-5">
                <div class="card">
                    <div class="card-head">
                        <div class="card-icon col">
                            <i class="fas fa-user fa-2x"></i>
                        </div>
                        <div class="card-title col text-right">
                            <h5 class="text-muted pt-2">Total de usuarios</h5>
                        </div>
                        <div class="card-subtitle text-right">
                            <h3 class="px-3 text-muted">42</h3>
                        </div>
                    </div>
                    <div class="card-footer d-flex h-100 justify-content-center">
                        <i class="fas fa-calendar-day  text-muted d-flex"><div class="i-time pl-1 h6">Hace 2 horas</div></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5 ">
            <div class="col-12 col-xs-12 col-md-12 col-lg-12">
                <p class="text-muted h5">Ordenes</p>
                <div class="table-responsive">
                    <table id="dtHorizontalExample" class="table table-md text-center" cellspacing="0"
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
        <div class="row mt-5 d-flex justify-content-center">
            <div class="col-12 col-xs-12 col-md-6 col-lg-6">
                <div class="h5 text-muted">Prod. más vendidos</div>
                <div class="table-responsive">
                    <table class="table table-sm text-center">
                        <thead>
                            <tr>
                                <th>Cod.</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="align-middle">02-Co</td>
                                <td class="align-middle">Nom. Producto</td>
                                <td class="align-middle">$369.50</td>
                                <td class="align-middle">20</td>
                                <td class="align-middle"><div class="btn btn-success btn-sm">Disponible</div></td>
                            </tr>
                            <tr>
                                <td class="align-middle">07-Co</td>
                                <td class="align-middle">Nom. Producto</td>
                                <td class="align-middle">$32.50</td>
                                <td class="align-middle">0</td>
                                <td class="align-middle"><div class="btn btn-danger btn-sm">No disponible</div></td>
                            </tr>
                            <tr>
                                <td class="align-middle">232-Co</td>
                                <td class="align-middle">Nom. Producto</td>
                                <td class="align-middle">$3650</td>
                                <td class="align-middle">4</td>
                                <td class="align-middle"><div class="btn btn-primary btn-sm">En oferta</div></td>
                            </tr>
                            <tr>
                                <td class="align-middle">22-Co</td>
                                <td class="align-middle">Nom. Producto</td>
                                <td class="align-middle">$350</td>
                                <td class="align-middle">1</td>
                                <td class="align-middle"><div class="btn btn-danger btn-sm">No disponible</div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-12 col-xs-12 col-md-6 col-lg-6">
                <div class="h5 text-muted">Prod. Con stock bajo/ sin stock</div>
                <div class="table-responsive">
                    <table class="table table-sm text-center">
                        <thead>
                            <tr>
                                <th>Cod.</th>
                                <th>Nombre</th>
                                <th>Color</th>
                                <th>Stock</th>
                                <th>Estado</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="align-middle">02-Co</td>
                                <td class="align-middle">Nom. Producto</td>
                                <td class="align-middle">
                                    <div class="colores">
                                        <input type="radio" name="radioColor1" id="radioColor1" disabled>
                                        <label for="radioColor1" >
                                            <span style="background-color:red;" class="text-center">
                                                <i class="fas fa-check"></i>
                                            </span>
                                        </label>
                                    </div>
                                </td>
                                <td class="align-middle">0</td>
                                <td class="align-middle"><div class="btn btn-danger btn-sm">Sin Stock</div></td>
                                <td class="align-middle"><div class="btn btn-info btn-sm">Ver</div></td>
                            </tr>
                            <tr>
                                <td class="align-middle">07-Co</td>
                                <td class="align-middle">Nom. Producto</td>
                                <td class="align-middle">
                                    <div class="colores">
                                        <input type="radio" name="radioColor1" id="radioColor1" disabled>
                                        <label for="radioColor1" >
                                            <span style="background-color:green;" class="text-center">
                                                <i class="fas fa-check"></i>
                                            </span>
                                        </label>
                                    </div>
                                </td>
                                <td class="align-middle">0</td>
                                <td class="align-middle"><div class="btn btn-danger btn-sm">Sin stock</div></td>
                                <td class="align-middle"><div class="btn btn-info btn-sm">Ver</div></td>
                            </tr>
                            <tr>
                                <td class="align-middle">232-Co</td>
                                <td class="align-middle">Nom. Producto</td>
                                <td class="align-middle">
                                    <div class="colores">
                                        <input type="radio" name="radioColor1" id="radioColor1" disabled>
                                        <label for="radioColor1" >
                                            <span style="background-color:black;" class="text-center">
                                                <i class="fas fa-check"></i>
                                            </span>
                                        </label>
                                    </div>
                                </td>
                                <td class="align-middle">2</td>
                                <td class="align-middle"><div class="btn btn-warning btn-sm">Stock bajo</div></td>
                                <td class="align-middle"><div class="btn btn-info btn-sm">Ver</div></td>
                            </tr>
                            <tr>
                                <td class="align-middle">22-Co</td>
                                <td class="align-middle">Nom. Producto</td>
                                <td class="align-middle">
                                    <div class="colores">
                                        <input type="radio" name="radioColor1" id="radioColor1" disabled>
                                        <label for="radioColor1" >
                                            <span style="background-color:aqua;" class="text-center">
                                                <i class="fas fa-check"></i>
                                            </span>
                                        </label>
                                    </div>
                                </td>
                                <td class="align-middle">1</td>
                                <td class="align-middle"><div class="btn btn-warning btn-sm">Stock bajo</div></td>
                                <td class="align-middle"><div class="btn btn-info btn-sm">Ver</div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    </div>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection