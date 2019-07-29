@extends('layouts.admin')

@section('title','Editar elementos')

@section('container')
    <div class="container">
        <div class="row mt-5">
            <div class="col-12 mt-5 ">
                <h4 class="text-center">Elementos de la pagina</h4>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-12 col-sm-12 col-md-8 col-lg-6 ml-auto">
                <form action="">
                    <div class="input-group">
                        <input type="text" name="txtBuscarElemento" id="txtBuscarElemento" class="my-auto form-control" placeholder="Buscar elemento">
                        <div class="input-group-append">
                            <button type="submit" class="btn btn-info float-right">Buscar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="row d-flex justify-content-center mt-3">
            <div class="col-12 text-center">
                <h5 class="text-muted">Menu de navegación</h5>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                <form action="">
                    <div class="form-group">
                        <label for="txtColorFondo">Color de fondo:</label>
                        <input type="text" name="txtColorFondo" id="txtColorFondo" placeholder="#333111" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="txtColorLetra">Color de letra/ iconos:</label>
                        <input type="text" name="txtColorLetra" id="txtColorLetra" placeholder="#333111" class="form-control">
                    </div>
                    <div class="form-group d-flex">
                        <button type="submit" class="btn btn-primary ml-auto">Aceptar</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                    <div class="h5">Historial de cambios</div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                <div class="table-responsive">
                    <table class="table table-striped table-md">
                        <thead>
                            <tr>
                                <th>Color de fondo</th>
                                <th>Color de letra</th>
                                <th>Fecha</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th class="align-middle">#333111</th>
                                <th class="align-middle">#333111</th>
                                <th class="align-middle">08/07/2019 10:30:00</th>
                                <th class="align-middle">Activo</th>
                                <th class="align-middle"><button class="btn btn-danger">Desabilitar</button></th>
                            </tr>
                            <tr>
                                <th class="align-middle">#333111</th>
                                <th class="align-middle">#333111</th>
                                <th class="align-middle">01/07/2019 10:30:00</th>
                                <th class="align-middle">Desabilitado</th>
                                <th class="align-middle"><button class="btn btn-success">Habilitar</button></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <hr>
        <div class="row d-flex justify-content-center">
            <div class="col-12 text-center">
                <div class="h5">Imagen de fondo</div>
            </div>
            <div class="col-12 col-sm-12 co-md-8 col-lg-6">
                <form action="">
                    <div class="form-group">
                        <label for="ImagenFondo">Imagen de fondo:</label>
                        <input type="file" name="ImagenFondo" id="ImagenFondo" class="form-control">
                    </div>
                    <div class="form-group d-flex">
                        <button type="submit" class="btn btn-primary ml-auto">Aceptar</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-12">
                <div class="h5">
                    Historial de cambios
                </div>
            </div>
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table table-striped table-md">
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Fecha</th>
                                <th>Estado</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="align-middle">
                                    <img src="https://via.placeholder.com/75x75.png" alt="">
                                </td>
                                <td class="align-middle">
                                    Fondo_1
                                </td>
                                <td class="align-middle">
                                    <p>08/01/2019 10:45:00</p>
                                </td class="align-middle">
                                <td class="align-middle">Habilitado</td>
                                <td class="align-middle"><button class="btn btn-danger">desabilitar</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <hr>
        <div class="row d-flex justify-content-center">
            <div class="col-12">
                <div class="h5 text-center">
                    Texto dentro de la imagen de fondo
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-8 col-lg-6">
                <form action="">
                    <div class="form-group">
                        <label for="txtTitulo">Titulo</label>
                        <input type="text" name="txtTitulo" id="txtTitulo" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="txtTitulo">Color titulo</label>
                        <input type="text" name="txtColorTitulo" id="txtColorTitulo" class="form-control" placeholder="#FFF">
                    </div>
                    <div class="form-group">
                        <label for="txtTitulo">Subtitulo</label>
                        <input type="text" name="txtSubtitulo" id="txtSubtitulo" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="txtTitulo">color subtitulo</label>
                        <input type="text" name="txtColorSubtitulo" id="txtColorSubtitulo" class="form-control" placeholder="#FFF">
                    </div>
                    <div class="form-group">
                        <label for="ColorFondoBotones">Color de fondo de botones</label>
                        <input type="text" name="ColorFondoBotones" id="ColorFondoBotones" class="form-control" placeholder="#FFFFFF">
                    </div>
                    <div class="form-group">
                        <label for="ColorLetraBotones">Color de letra de botones</label>
                        <input type="text" name="ColorLetraBotones" id="ColorLetraBotones" class="form-control" placeholder="#FFFFFF">
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="Habilitar" name="Estado" class="custom-control-input">
                        <label class="custom-control-label" for="Habilitar">Habilitar los botones</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="Desabilitar" name="Estado" class="custom-control-input">
                        <label class="custom-control-label" for="Desabilitar">Desabilitar los botones</label>
                    </div>
                    <div class="form-group d-flex">
                        <button class="btn btn-primary ml-auto">Aceptar</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-12">
                <div class="h5">Historial de cambios</div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                <div class="table-responsive">
                    <table class="table table-striped table-md">
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Subtitulo</th>
                                <th>Color del Titulo</th>
                                <th>Color del Subtitulo</th>
                                <th>Color de botones</th>
                                <th>Color de letra</th>
                                <th>Estado de los botones</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="align-middle">Titulo</td>
                                <td class="align-middle">Subtitulo</td>
                                <td class="align-middle">#333111</td>
                                <td class="align-middle">#333111</td>
                                <td class="align-middle">#333111</td>
                                <td class="align-middle">08/07/2019 10:30:00</td>
                                <th class="align-middle text-center">Activo</th>
                                <th class="align-middle"><button class="btn btn-danger">Desabilitar</button></th>
                            </tr>
                            <tr>
                                <td class="align-middle">Titulo</td>
                                <td class="align-middle">Subtitulo</td>
                                <td class="align-middle">#333111</td>
                                <td class="align-middle">#333111</td>
                                <td class="align-middle">#333111</td>
                                <td class="align-middle">08/07/2019 10:30:00</td>
                                <th class="align-middle text-center">Desactivado</th>
                                <th class="align-middle"><button class="btn btn-success">Habilitar</button></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <hr>
        <div class="row d-flex justify-content-center">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                <div class="h5 text-center">
                    Habilitar seccion de instagram
                </div>
            </div>
            <div class="col-12 col-xs-12 col-md-8 col-lg-6 pt-2 text-center">
                <form action="">
                    <div class="custom-control custom-radio custom-control-inline mx-3 mb-2">
                        <input type="radio" id="mostrar" name="habilitar" class="custom-control-input">
                        <label class="custom-control-label" for="mostrar">Habilitar seccion</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline mx-3 mb-2">
                        <input type="radio" id="ocultar" name="habilitar" class="custom-control-input">
                        <label class="custom-control-label" for="ocultar">Desabilitar seccion</label>
                    </div>
                    <div class="form-group d-flex">
                        <button type="submit" class="btn btn-primary ml-auto">Aceptar</button>
                    </div>
                </form>
            </div>
        </div>
        <hr>
    </div>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection