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
    <link rel="stylesheet" href="{{asset('css/adminEstilos.css')}}">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet">
    {{--Fonts--}}
    <link href="https://fonts.googleapis.com/css?family=Gabriela" rel="stylesheet"> 
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
    @yield('style')
    <title>Misvah - @yield('title')</title>
</head>
<body>
    <div id="app">
        @section('menu')
        <div class="collapse col-12 red lighten-5 text-white d-lg-block active" id="sidebar">
            <div class="head ">
                <div class="row align-center mt-2">
                    <div class="col-lg-12 col-10 text-center">
                        <h1 class="font-weight-bold Brown-darken-4">Titulo</h1>
                    </div>
                    <div class="col-2 d-lg-none text-center mt-2 mx-auto">
                        <i class="fas fa-times fa-2x  Brown-darken-4" id="close-menu"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="pos-f-t">
            <nav class="navbar navbar-dark red lighten-4 ">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
            
        </div>
        @show
        @section('container')
            
        @show
    </div>
    {{--librerias usadas--}}
    <!-- JQuery -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!-- Bootstrap tooltips -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.7/js/mdb.min.js"></script>
    <script src="{{asset('js/admin.js')}}"></script>
    @yield('script')
</body>
</html>