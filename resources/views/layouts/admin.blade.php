<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="{{asset('css/adminEstilos.css')}}">
    <link rel="stylesheet" href="{{asset('css/estilos.css')}}">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    {{--Fonts--}}
    <link href="https://fonts.googleapis.com/css?family=Gabriela" rel="stylesheet"> 
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
    @yield('style')
    <title>Admin Misvah - @yield('title')</title>
</head>
<body>
    @section('Menu')
    <div id="menu" class="d-inline p-0">
        <button class="navbar-toggler border " type="button" >
            <i class="fas fa-bars" id="i-menu"></i>
        </button>
    </div>
      <div class="col h-100 d-blcok" id="sidebar">
        <ul >
          <li>
            <h1 class="text-center">Panel de adminstración</h1>
          </li>
          <hr>
          <li>
            <a href="{{asset('/admin/index')}}" class="align-middle">Inicio</a>
          </li>
          <hr>
          <li>
            <button type="button" class="btn btn-transparent dropdown-toggle" data-toggle="dropdown">
                Categoria
            </button>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="{{asset('/admin/categorias')}}">Ver</a>
                <a class="dropdown-item" href="{{asset('/admin/nueva_categoria')}}">Agregar</a>
            </div>
          </li>
          <hr>
          <li>
              <button type="button" class="btn btn-transparent dropdown-toggle" data-toggle="dropdown">
                  Productos
              </button>
              <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Ver</a>
                  <a class="dropdown-item" href="#">Agregar</a>
                  <a class="dropdown-item" href="#">Nueva oferta</a>
              </div>
          </li>
          <hr>
          <li>
              <a href="" class="align-middle">Graficos</a>
          </li>
          <hr>
          <li>
              <a href="" class="align-middle">Pedidos</a>
          </li>
          <hr>
          <li>
              <a href="" class="align-middle">Mensajes</a>
          </li>
        </ul>
      </div>
    @show
    @yield('container')
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script>
        $(document).ready(function(){
          $('.navbar-toggler').on('click',function(){
            $('#sidebar').toggleClass('active');
            $('#menu').toggleClass('active');
            $('.navbar-toggler').toggleClass('btn-rosa-menu');
            if($('#i-menu').hasClass('fa-bars')){
                $('#i-menu').removeClass('fa-bars');
                $('#i-menu').addClass('fa-times');  
            }
            else{
                $('#i-menu').addClass('fa-bars');
                $('#i-menu').removeClass('fa-times');  
            }
          });
        });  
    </script>
    @yield('script')
</body>
</html>