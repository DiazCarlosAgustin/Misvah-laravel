<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
        {{--Estilos externos--}}
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="user" content="{{ Auth::user() }}">
        <link rel="stylesheet" href="{{asset('css/bootstrap.css')}}">
        <link rel="stylesheet" href="{{asset('css/mdb.css')}}">
        <link rel="stylesheet" href="{{asset('css/estilos.css')}}">
        <link rel="stylesheet" href="{{asset('css/swiper.css')}}">
        {{--Iconos de google--}}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet">
        {{--Fonts--}}
        <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap" rel="stylesheet">
        <title>Misvah - @yield('title')</title>
        @yield('script-head')
    </head>
    <body>
        <div id="app">
            {{--section del navbar(menu)--}}
            @section('menu')
            {{--Menu--}}
            <navbar></navbar>
            @yield('fondo')
            @show
            
            {{--contenedor vacio(se llena segun la page)--}}
            <section>
                @yield('Container')
            </section>
            @section('footer')
            <footer-cliente></footer-cliente>
            @show
        </div>
        {{--pie de pagina--}}
        {{--librerias usadas--}}
        
        <!-- JQuery -->
        
        <script src="{{asset('js/mdbootstrap.js')}}"></script>
        @yield('script')
        <script src="{{asset('js/main.js')}}"></script>
    </body>
    </html>