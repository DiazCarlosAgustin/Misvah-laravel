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
            <div class="Titulo-categoria">CATEGORIAS</div>
            <div class="row">
                @for ($i = 0; $i < 6; $i++)
                    <div class="card card-categoria col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                        <div class="card-img">
    
                        </div>
                        <div class="btn">NOMBRE</div>
                    </div>
                @endfor
            </div>
        </div>
        <div class="d-destacados">
            <div class="Titulo-destacados">DESTACADOS</div>
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
    </div>
@endsection

{{--footer--}}
@section('footer')
    @parent
@endsection
