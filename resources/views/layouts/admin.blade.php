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
<<<<<<< HEAD
            <div class="pos-f-t">
                <nav class="navbar navbar-dark pink darken-1 fixed-top">
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#sidebar" aria-controls="sidebar"
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="d-flex ml-auto nav-flex-icon">
                        <i class="fas fa-envelope text-white nav-link nav-item px-1"></i>
                        <i class="fas fa-bell text-white nav-link nav-item"></i>
                        <img src="https://via.placeholder.com/30x30.png" class="rounded-circle z-depth-0 w-100" alt="">
                    </div>
                    <div class="collapse navbar-collapse text-white pink darken-1" id="sidebar">
                        <div class="navbar-brand nav-link nav-item text-center w-100">
                            <h3>Mishvah</h3>
                            <h4>Admin</h4>
                        </div>
                        <div class="flex-column">
                            <a href="{{asset('/admin/index')}}" class="nav-item nav-link">Inicio</a>
                            <div class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Productos
                                </a>
                                <div class="dropdown-menu w-100 text-center" aria-labelledby="navbarDropdown">
                                  <a class="dropdown-item" href="{{asset('/admin/nuevo_producto')}}">Agregar</a>
                                    <a class="dropdown-item" href="{{asset('/admin/productos')}}">Listar</a>
                                  <a class="dropdown-item" href="{{asset('/admin/editar_producto')}}">Editar</a>
                                </div>
                            </div>
                            <div class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Categoria
                                </a>
                                <div class="dropdown-menu w-100 text-center" aria-labelledby="navbarDropdown">
                                  <a class="dropdown-item" href={{asset('/admin/nueva_categoria')}}>Agregar</a>
                                  <a class="dropdown-item" href="{{asset('/admin/categorias')}}">Listar</a>
                                  <a class="dropdown-item" href="">Editar</a>
                                </div>
                            </div>
                            <a href="" class="nav-link nav-item">Elementos del UI</a>
                            <a href="" class="nav-link nav-item">Pedidos</a>
                            <a href="" class="nav-link nav-item">Ventas</a>
                            <a href="" class="nav-link nav-item">Estadisticas</a>
                        </div>
                    </div>
                </nav>
            </div>
=======
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
>>>>>>> db0e47929f93d640a292cd3f500139503ce596f9
        @show
        @section('container')
            
        @show
    </div>
    {{--librerias usadas--}}
<<<<<<< HEAD
     
=======
>>>>>>> db0e47929f93d640a292cd3f500139503ce596f9
    <!-- JQuery -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!-- Bootstrap tooltips -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.7/js/mdb.min.js"></script>
<<<<<<< HEAD
    <script type="text/javascript" src="{{asset('js/admin.js')}}"></script>
=======
    <script src="{{asset('js/admin.js')}}"></script>
>>>>>>> db0e47929f93d640a292cd3f500139503ce596f9
    @yield('script')
</body>
</html>