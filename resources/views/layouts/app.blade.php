<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    {{--Estilos externos--}}
    <link rel="stylesheet" href="..\public\css\estilos.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    {{--Fonts--}}
    <link href="https://fonts.googleapis.com/css?family=Gabriela" rel="stylesheet"> 
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
    <title>Misvah - @yield('title')</title>
</head>
<body>
    {{--section del navbar(menu)--}}
    @section('menu')
        {{--Menu--}}
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom fixed-top">
                {{-- navbar-brand xs que solo se vera en celulares o tablets--}}
                <a href="#" class="navbar-brand d-xs-flex d-lg-none navbar-brand-xs borde">MISVHA</a>
                {{-- menu xs que se vera solo en tablets o celulares--}}
                <div class="menu-xs d-xs-blockd-flex d-lg-none">
                        <i class="material-icons" id="i-xs-buscar">search</i>
                        <i class="material-icons" id="i-xs-carrito">shopping_cart</i>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                </div>
                {{--items del menu--}}
                <div class="collapse navbar-collapse mx-auto" id="navbarMenu">
                    {{--Menu del lado izquierdo--}}
                    <div class="nav navbar-nav mr-auto ">
                        <a href="home.html" class="nav-item nav-link xs-link">INICIO</a>
                        <a href="#" class="nav-item  nav-link xs-link">TIENDA</a>
                        <a href="#" class="nav-item  nav-link xs-link">CONTACTO</a>
                        <a href="Acceder.html" class="nav-item  nav-link xs-link d-xs-block d-lg-none">ACCEDER</a>
                    </div>
                    {{--Menu del centro--}}
                    <div class="mx-auto d-lg-flex d-none borde ">
                        <a href="#" class="navbar-brand mx-auto">MISVHA</a>
                    </div>
                    {{--Menu del lado derecho--}}
                    <div class="nav navbar-nav ml-auto d-lg-flex d-none ">
                        <i class="material-icons nav-item nav-link xs-link " id="i-carrito">search</i>
                        <i class="material-icons nav-item nav-link ">shopping_cart</i>
                        <a href="Acceder.html" class="nav-item nav-link xs-link ">ACCEDER</a>
                    </div>
                </div>
            </nav>
        </div>
    @show
    @section('fondo')
        
    @show
    {{--contenedor vacio(se llena segun la page)--}}
    @section('Container')
        
    @show
    {{--pie de pagina--}}
    @section('footer')
        <footer class="f-foot">
            <div class="container">
                <div class="row">
                    {{--area de horarios--}}
                    <div class="f-horarios col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                        <div class="f-contenido">
                            <h1>HORARIOS</h1>
                            <div class="mx-auto">
                                <table class="mx-auto">
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
                                    <tr><td><a href="">Inicio</a></td></tr>
                                    <tr><td><a href="">Tienda</a></td></tr>
                                    <tr><td><a href="">Contacto</a></td></tr>
                                    <tr><td><a href="">¿Como llegar?</a></td></tr> 
                                </table>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    @show
    {{--librerias usadas--}}
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>