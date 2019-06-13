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
        <link href="https://fonts.googleapis.com/css?family=Gabriela" rel="stylesheet"> 
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css">
    <title>Misvah - @yield('title')</title>
</head>
<body>
    <div id="app">
        {{--section del navbar(menu)--}}
        @section('menu')
        {{--Menu--}}
                <nav class="navbar navbar-expand-lg navbar-light bg-white text-white fixed-top col-12 scrolling-navbar">
                    {{-- navbar-brand xs que solo se vera en celulares o tablets--}}
                    <a href="#" class="navbar-brand d-xs-flex d-lg-none navbar-brand-xs borde">MISVHA</a>
                    {{-- menu xs que se vera solo en tablets o celulares--}}
                    <div class="menu-xs d-xs-flex d-lg-none" >
                        <i class="material-icons" id="i-xs-buscar">search</i>
                        <a href="{{url('/carrito')}}">
                            <span class="s-carrito bg-danger"></span>
                            <i class="material-icons" id="i-xs-carrito">shopping_cart</i>
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu"
                            aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="dark-blue-text">
                                <i class="fas fa-bars fa-1x"></i>
                            </span>
                        </button>
                    </div>
                    {{--items del menu--}}
                    <div class="navbar-collapse collapse" id="navbarMenu">
                        {{--Menu del lado izquierdo--}}
                        <div class="nav navbar-nav mr-auto text-center">
                            <a href="{{url("/")}}" class="nav-item nav-link xs-link">INICIO</a>
                            <a href="{{url('/tienda')}}" class="nav-item  nav-link xs-link">TIENDA</a>
                            <a href="{{url('/contacto')}}" class="nav-item  nav-link xs-link">CONTACTO</a>
                            {{--este item solo se muestra en pantallas mobiles--}}
                            <a href="{{url('/acceder')}}" class="nav-item  nav-link xs-link d-xs-block d-lg-none">ACCEDER</a>
                        </div>
                        {{--Menu del centro--}}
                        <div class="mx-auto d-lg-flex d-none borde text-center ">
                            <a href="{{url("/")}}" class="navbar-brand mx-auto">MISVAH</a>
                        </div>
                        {{--Menu del lado derecho--}}
                        <div class="nav navbar-nav ml-auto d-md-flex d-none ">
                            <i class="material-icons nav-item nav-link xs-link " id="i-buscar">search</i>

                            <div class="nav-item">
                                <div>
                                    <span class="s-carrito bg-danger ml-4 mt-1"></span>
                                    <i class="material-icons nav-item nav-link " id="i-lg-carrito">shopping_cart</i>
                                </div>
                                <div class="cart mt-2">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class=" text-dark card-title text-center">
                                                <h5>Mi carrito</h5>
                                            </div>
                                            <ul class="list-group  text-dark list-group-flush">
                                                <li class="list-group-item px-0">
                                                    <div class="card-product">
                                                        <div class="row">
                                                            <div class="col-12 w-100 d-flex h-100">
                                                                <div class="col-4">
                                                                    <img src="https://via.placeholder.com/75x75.png" alt="">
                                                                </div>
                                                                <div class="col-8">
                                                                    <div class="d-flex">
                                                                        <div class="name-producto d-block text-center">
                                                                            <h5>Nombre del producto</h5>
                                                                        </div>
                                                                        <span class="ml-auto">
                                                                            <i class="fas fa-trash-alt"></i>
                                                                        </span>
                                                                    </div>
                                                                    
                                                                    <div class="detalles w-100 d-flex my-1">
                                                                            <div class="d-flex mr-auto">
                                                                                <form action="">
                                                                                    <div class="form-group d-flex mr-auto">
                                                                                        <h6 class="align-middle pt-2 pr-1">Cantidad:</h6>
                                                                                        <input type="number" name="numCantidad" id="numCantidad" class="align-middle p-0" min="1" value="1">
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                            <div class="d-flex ml-auto">
                                                                                <h6 class="pt-2">Precio: <h6 class="align-middle p-2">$350</h6></h6>
                                                                                
                                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item px-0">
                                                    <div class="card-product">
                                                        <div class="row">
                                                            <div class="col-12 w-100 d-flex h-100">
                                                                <div class="col-4">
                                                                    <img src="https://via.placeholder.com/75x75.png" alt="">
                                                                </div>
                                                                <div class="col-8">
                                                                    <div class="d-flex">
                                                                        <div class="name-producto d-block text-center">
                                                                            <h5>Nombre del producto</h5>
                                                                        </div>
                                                                        <span class="ml-auto">
                                                                            <i class="fas fa-trash-alt"></i>
                                                                        </span>
                                                                    </div>
                                                                    
                                                                    <div class="detalles w-100 d-flex my-1">
                                                                            <div class="d-flex mr-auto">
                                                                                <form action="">
                                                                                    <div class="form-group d-flex mr-auto">
                                                                                        <h6 class="align-middle pt-2 pr-1">Cantidad:</h6>
                                                                                        <input type="number" name="numCantidad" id="numCantidad" class="align-middle p-0" min="1" value="1">
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                            <div class="d-flex ml-auto">
                                                                                <h6 class="pt-2">Precio: <h6 class="align-middle p-2">$350</h6></h6>
                                                                                
                                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                
                                            </ul>
                                            <div class="card-body d-flex justify-content-center">
                                                <a href="{{url('/carrito')}}" class="btn btn-white text-black">Ver</a>
                                                <a href="{{url('/carrito')}}" class="btn btn-rosa text-white">Comprar</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="{{url('/acceder')}}" class="nav-item nav-link xs-link ">ACCEDER</a>
                        </div>
                    </div>
                    <div class="d-buscar">
                        <form action="">
                            <div class="input-group w-100 mt-2">
                                <input type="text" class="form-control" placeholder="Buscar" aria-label="Buscar" aria-describedby="basic-addon1">
                                <div class="input-group-prepend">
                                    <button class="input-group-text" id="basic-addon1">
                                        <i class="material-icons">search</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </nav>
        @show
        @yield('fondo')
            
        {{--contenedor vacio(se llena segun la page)--}}
        @yield('Container')
    </div>
    {{--pie de pagina--}}
    @section('footer')
        <footer class="f-foot  animated fadeIn">
            <div class="container">
                <div class="row">
                    {{--area de horarios--}}
                    <div class="f-horarios col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                        <div class="f-contenido">
                            <h1>HORARIOS</h1>
                            <div class="mx-auto ">
                                <table class="mx-auto text-white">
                                    <tr>
                                        <td>lun.:</td>
                                        <td>8:30 - 20:00</td>
                                    </tr>
                                    <tr>
                                        <td>Mar.:</td>
                                        <td>8:30 - 20:00</td>
                                    </tr>
                                    <tr>
                                        <td>Mié.:</td>
                                        <td>8:30 - 20:00</td>
                                    </tr>
                                    <tr>
                                        <td>Jue.:</td>
                                        <td>8:30 - 20:00</td>
                                    </tr>
                                    <tr>
                                        <td>Vie.:</td>
                                        <td>8:30 - 20:00</td>
                                    </tr>
                                    <tr>
                                        <td>Sáb.:</td>
                                        <td>8:30 - 20:00</td>
                                    </tr>
                                    <tr>
                                        <td>Dom.:</td>
                                        <td>Cerrado</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    {{--area de redes sociales--}}
                    <div class="f-redes col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                        <div class="f-contenido">
                            <h1>NUESTRAS REDES</h1>
                            <div class="mx-auto iconos">
                                <i class="fab fa-facebook f-icon"></i>
                                <i class="fab fa-instagram f-icon"></i>
                                <i class="fas fa-envelope f-icon"></i>
                            </div>
                        </div>
                    </div>
                    <div class="f-enlaces col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                        <div class="f-contenido mx-auto">
                            <h1>ENLACES</h1>
                            <div class="mx-auto">
                                <table class="mx-auto">
                                    <tr><td><a href="{{url('/')}}">Inicio</a></td></tr>
                                    <tr><td><a href="{{url('/tienda')}}">Tienda</a></td></tr>
                                    <tr><td><a href="{{url('/contacto')}}">Contacto</a></td></tr>
                                    <tr><td><a href="{{url('/como_llegar')}}">¿Como llegar?</a></td></tr> 
                                </table>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    @show
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