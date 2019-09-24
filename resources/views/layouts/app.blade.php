<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
        <!-- Bootstrap core CSS -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
        <!-- Material Design Bootstrap -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.7/css/mdb.min.css" rel="stylesheet">
        {{--Estilos externos--}}
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" href="{{asset('css/estilos.css')}}">
        {{--Iconos de google--}}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet">
        {{--Fonts--}}
        <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css">
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
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <!-- Bootstrap tooltips -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
        <!-- MDB core JavaScript -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.7/js/mdb.min.js"></script>
        <script src="{{asset('js/main.js')}}"></script>
        @yield('script')
    </body>
</html>