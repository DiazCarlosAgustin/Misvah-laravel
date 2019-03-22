{{--trae el template de layouts--}}
@extends('layouts.app')

{{--cambia el titulo de la pagina--}}
@section('title', 'Inicio')

{{--trae el menu de layouts--}}
@section('menu')
    @parent
@endsection

{{--le paso la imagen de fondo y lo que contiene la imagen al centro--}}
@section('fondo')
    <section id="fondo">
        <div class="d-centro">
            <div class="Titulo">MISVAH</div>
            <div class="sub-titulo">MODA</div>
            <div class="botones mx-auto">
                <button class="btn">CONTACTO</button>    
                <button class="btn">PRODUCTOS</button>    
            </div>  
        </div>
    </section>
@endsection

{{--contenido de la pagina--}}
@section('Container')
    <div class="container ">
        <div class="d-categoria">
            <div class="Titulo-categoria">Categorias</div>
            <div class="row mx-auto">
                @for ($i = 0; $i < 6; $i++)
                    <div class="col col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                        <div  class="card  card-categoria ">
                            <img src="" class="card-img-top card-img" alt="">
                            <div class="card-body mx-auto">
                                <h5 class="card-title text-center">
                                    Title category
                                </h5>
                                <button class="btn btn-rosa btn-block">Ver</button>
                            </div>
                        </div>
                    </div>
                @endfor
            </div>
        </div>
        <div class="d-destacados">
            <div class="Titulo-destacados">Destacados</div>
            <div class="row">
                @for ($i = 0; $i < 4; $i++)
                    <div class="card card-destacados col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-3">
                        <div class="card-img-destacados">
    
                        </div>
                        <div class="btn">NOMBRE DES</div>
                    </div>
                @endfor
            </div>
        </div>
        <div class="d-instagram">
            <div class="Titulo-instagram">Instagram</div>
            <div class="usuario-intagram"><a href="">@Misvah-moda</a></div>
            <div class="row">
                    @for ($i = 0; $i < 4; $i++)
                        <div class="card card-insta col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-3">
                            <div class="card-img-insta">
                                <div class="descrip-insta"><a href="">@Misvah-moda</a></div>
                            </div>
                        </div>
                    @endfor
                </div>
        </div>
    </div>
@endsection

{{--footer--}}
@section('footer')
    @parent
@endsection
