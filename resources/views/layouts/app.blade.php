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
        </div>
        {{--pie de pagina--}}
        @section('footer')
            <footer class="f-foot  animated fadeIn pink">
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
                        <div class="f-enlaces col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <div class="f-contenido mx-auto">
                                <h1>ENLACES</h1>
                                <div class="mx-auto">
                                    <table class="mx-auto">
                                        <tr><td><a href="{{url('/')}}">Inicio</a></td></tr>
                                        <tr><td><a href="{{url('/tienda')}}">Tienda</a></td></tr>
                                        <tr><td><a href="{{url('/contacto')}}">Contacto</a></td></tr>
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