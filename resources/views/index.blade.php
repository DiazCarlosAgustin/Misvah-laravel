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
    <div class="fondo">
        <fondo-component></fondo-component>
    </div>
@endsection

{{--contenido de la pagina--}}
@section('Container')
    <div class="container ">
        <div class="d-categoria">
            <categorias-component></categorias-component>
        </div>
        <div class="d-destacados">
            <destacados-component></destacados-component>
        </div>
        <div class="d-instagram">
            <instagram-component></instagram-component>
        </div>
    </div>
        
@endsection

{{--footer--}}
@section('footer')
    @parent
@endsection

@section('scripts')
    <script src="{{ asset('js/app.js') }}" defer></script>
@endsection