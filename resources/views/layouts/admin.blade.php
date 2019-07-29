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
    <link rel="stylesheet" href="{{asset('css/adminEstilos.css')}}">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet">
    {{--Fonts--}}
    <link href="https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap" rel="stylesheet">
    {{--Editor de texto --}}
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/jodit/3.1.39/jodit.min.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/jodit/3.1.39/jodit.min.js"></script>
    @yield('style')
    <title>Misvah - @yield('title')</title>
</head>
<body>
    <div id="app">
        @section('menu')
            <div class="fixed-top">
                <nav class="navbar navbar-dark  bg-purple fixed-top col-12 scrolling-navbar">
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
                    <div class="collapse navbar-collapse text-white bg-purple" id="sidebar">
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
                            <a href="{{url('/admin/elementos')}}" class="nav-link nav-item">Elementos del UI</a>
                            <a href="" class="nav-link nav-item">Pedidos</a>
                            <a href="" class="nav-link nav-item">Ventas</a>
                            <a href="" class="nav-link nav-item">Estadisticas</a>
                        </div>
                    </div>
                </nav>
                <div class="col-12 col-xs-12 col-md-4 w-100 content d-none">
                    <div class="notification">
                        <div class="card border">
                            <div class="card-header bg-purple">
                                <div class="card-title text-white d-flex font-weight-bold">
                                    Notificaciones
                                    <div class="icon-close-notification ml-auto">
                                        <i class="fas fa-times " id="close-noti"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body p-1">
                                <div class="notification-info border-bottom w-100 m-0 p-1">
                                    <div class="title-notification-info p-1 font-weight-bold d-flex">
                                        Aviso de Stock bajo/ no disponible
                                        <div class="icon-close-notification ml-auto">
                                            <i class="fas fa-times"></i>
                                        </div>
                                    </div>
                                    <div class="description-notification pl-2">
                                        El producto 'Nombre del producto' con codigo '123-Cod' se encuentra con un stock de X en el color X
                                    </div>
                                    <div class="time-notification p-1 text-muted text-right">
                                        Hace 2 horas
                                    </div>
                                </div>
                                <div class="notification-info border-bottom w-100 m-0 p-1">
                                    <div class="title-notification-info p-1 font-weight-bold d-flex">
                                        Aviso de Stock bajo/ no disponible
                                        <div class="icon-close-notification ml-auto">
                                            <i class="fas fa-times"></i>
                                        </div>
                                    </div>
                                    <div class="description-notification pl-2">
                                        El producto 'Nombre del producto' con codigo '123-Cod' se encuentra con un stock de X en el color X
                                    </div>
                                    <div class="time-notification p-1 text-muted text-right">
                                        Hace 2 horas
                                    </div>
                                </div>
                                <div class="notification-info border-bottom w-100 m-0 p-1">
                                    <div class="title-notification-info p-1 font-weight-bold d-flex">
                                        Aviso de Stock bajo/ no disponible
                                        <div class="icon-close-notification ml-auto">
                                            <i class="fas fa-times"></i>
                                        </div>
                                    </div>
                                    <div class="description-notification pl-2">
                                        El producto 'Nombre del producto' con codigo '123-Cod' se encuentra con un stock de X en el color X
                                    </div>
                                    <div class="time-notification p-1 text-muted text-right">
                                        Hace 2 horas
                                    </div>
                                </div>
                                <div class="notification-info border-bottom w-100 m-0 p-1">
                                    <div class="title-notification-info p-1 font-weight-bold d-flex">
                                        Aviso de Stock bajo/ no disponible
                                        <div class="icon-close-notification ml-auto">
                                            <i class="fas fa-times"></i>
                                        </div>
                                    </div>
                                    <div class="description-notification pl-2">
                                        El producto 'Nombre del producto' con codigo '123-Cod' se encuentra con un stock de X en el color X
                                    </div>
                                    <div class="time-notification p-1 text-muted text-right">
                                        Hace 2 horas
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
    <script type="text/javascript" src="{{asset('js/admin.js')}}"></script>
    @yield('script')
</body>
</html>