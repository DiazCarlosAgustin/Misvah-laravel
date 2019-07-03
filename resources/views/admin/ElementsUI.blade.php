@extends('layouts.admin')

@section('title','Editar elementos')

@section('container')
    <div class="container">
        <div class="row mt-5">
            <div class="col-12 mt-4 ">
                <h4 class="text-center">Editar elementos de la web</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-xs-12 col-md-6 mt-2 col-lg-6">
                <h5 class="text-center">Imagen e texto(Pagina principal) </h5>
                <form action="" class="px-3">
                    <div class="form-group pl-2">
                        <label for="txtTituloPricipal">Titulo:</label>
                        <input type="text" class="form-control align-middle" name="txtTituloPricipal" id="txtTituloPricipal" value="MISVHA">
                    </div>
                    <div class="form-group pl-2">
                        <label for="txtSubtitulo">Subtitulo:</label>
                        <input type="text" class="form-control align-middle" name="txtSubtitulo" id="txtSubtitulo" value="Moda">
                    </div>
                    <div class="form-group pl-2">
                        <label for="fileImagenFondo">Imagen de fondo</label>
                        <input type="file" name="fileImagenFondo" id="fileImagenFondo" class="form-control">
                    </div>
                    <div class="form-group pl-2">
                        <label for="custom-radio">Habilitar botones </label>
                        <div class="custom-control custom-radio p-2">
                            <input type="radio" class="custom-control-input" id="customCheck1" name="habilitarBotones" checked>
                            <label for="customCheck1" class="px-2">Habilitados</label>
                            <input type="radio" class="custom-control-input" id="customCheck1" name="habilitarBotones">
                            <label for="customCheck1" class="px-2">Desabilitados</label>
                        </div>
                    </div>
                    <div class="form-group w-100 text-right">
                        <button type="reset" class="btn btn-danger">Cancelar</button>
                        <button type="submit" class="btn btn-primary">Guardar</button>
                    </div>
                </form>
            </div>
            <div class="col-12 col-xs-12 col-md-6 mt-2 col-lg-6 ">
                <h5 class="text-center">Habilitar secciones de la pagina de inicio </h5>
                <div class="row d-flex justify-content-center">
                    <form action="">
                        <label for="custom-radio">Categorias </label>
                        <div class="form-group pl-2">
                                <label for="txtTituloCategoria">Titulo</label>
                                <input type="text" name="txtTituloCategoria" id="txtTituloCategoria" placeholder="Titulo" class="form-control">
                            <div class="custom-control custom-radio p-2">
                                <input type="radio" class="" id="customCheck1" name="habilitarBotones" checked>
                                <label for="customCheck1" class="px-2">Mostrar</label>
                                <input type="radio" class="" id="customCheck1" name="habilitarBotones">
                                <label for="customCheck1" class="px-2">No mostrar</label>
                            </div>
                        </div>
                        <div class="form-group w-100 text-right">
                                <button type="reset" class="btn btn-danger">Cancelar</button>
                                <button type="submit" class="btn btn-primary">Guardar</button>
                            </div>
                    </form>
                </div>
                <hr>
                <div class="row d-flex justify-content-center ">
                    <form action="">
                        <label for="custom-radio">Productos destacados </label>
                        <div class="form-group pl-2">
                            <label for="txtTituloProducto">Titulo</label>
                            <input type="text" name="txtTituloProducto" id="txtTituloProducto" placeholder="Titulo" class="form-control">
                            <div class="custom-control custom-radio p-2">
                                <input type="radio" class="" id="customCheck1" name="habilitarBotones" checked>
                                <label for="customCheck1" class="px-2">Mostrar</label>
                                <input type="radio" class="" id="customCheck1" name="habilitarBotones">
                                <label for="customCheck1" class="px-2">No mostrar</label>
                            </div>
                        </div>
                        <div class="form-group w-100 text-right">
                                <button type="reset" class="btn btn-danger">Cancelar</button>
                                <button type="submit" class="btn btn-primary">Guardar</button>
                            </div>
                    </form>
                </div>
                <hr>
                <div class="row d-flex justify-content-center ">
                    <form action="">
                        <label for="custom-radio">Instagram </label>
                        <div class="form-group pl-2">
                            <label for="txtTituloInstagram">Titulo </label>
                            <input type="text" name="txtTituloInstagram" id="txtTituloInstagram" class="form-control" placeholder="Titulo">
                            <div class="custom-control custom-radio p-2">
                                <input type="radio" class="" id="customCheck1" name="habilitarBotones" checked>
                                <label for="customCheck1" class="px-2">Mostrar</label>
                                <input type="radio" class="" id="customCheck1" name="habilitarBotones">
                                <label for="customCheck1" class="px-2">No mostrar</label>
                            </div>
                        </div>
                        <div class="form-group w-100 text-right">
                                <button type="reset" class="btn btn-danger">Cancelar</button>
                                <button type="submit" class="btn btn-primary">Guardar</button>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection