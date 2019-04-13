@extends('layouts.admin')

@section('title', 'Inicio')
    
@section('container')
    <div class="container">
       <div class="row f-flex justify-content-center">
           <div class="col-12 text-center">
               <h1>Panel administrativo "Misvah"</h1>
           </div>
       </div>
       <div class="row d-flex justify-content-center">
           <div class="row">
               <div class="col-12 col-xs-12  col-md-4 ">
                   <a href="{{asset('admin/categorias')}}" class="text-black">
                       <div class="card text-white text-center bg-info">
                           <div class="card-body">
                               <div class="card-title">
                                    <h3>Categoria</h3>
                               </div>
                               <div class="card-text">
                                    <h6>Agregar, eliminar, modificar o ver categorias</h6>
                               </div>
                           </div>
                           
                       </div>
                   </a>
               </div>
               <div class="col-12 col-xs-12 col-md-4">
                   <a href="{{asset('admin/productos')}}" class="text-black">
                       <div class="card text-dark bg-light text-center">
                           <div class="card-body">
                               <div class="card-title">
                                    <h3>Productos</h3>
                               </div>
                               <div class="card-text">
                                    <h6>Agregar, eliminar, modificar o ver productos</h6>
                               </div>
                           </div>
                           
                       </div>
                   </a>
               </div>
               <div class="col-12 col-xs-12 col-md-4">
                   <a href="{{asset('/admin/ventas')}}" class="text-black">
                       <div class="card text-white bg-info text-center">
                           <div class="card-body">
                               <div class="card-title">
                                    <h3>Ventas</h3>
                               </div>
                               <div class="card-text">
                                    <h6>Ver las ventas realizadas</h6>
                               </div>
                           </div>
                           
                       </div>
                   </a>
               </div>
               <div class="col-12 col-xs-12 col-md-4">
                   <a href="{{asset('admin/productos')}}" class="text-black">
                       <div class="card text-dark bg-light text-center">
                           <div class="card-body">
                               <div class="card-title">
                                    <h3>Estadisticas</h3>
                               </div>
                               <div class="card-text">
                                    <h6>Genera graficos con los datos obtenidos</h6>
                               </div>
                           </div>
                           
                       </div>
                   </a>
               </div>
               <div class="col-12 col-xs-12 col-md-4">
                   <a href="{{asset('admin/pedidos')}}" class="text-black">
                       <div class="card text-white bg-info text-center">
                           <div class="card-body">
                               <div class="card-title">
                                    <h3>Pedidos</h3>
                               </div>
                               <div class="card-text">
                                    <h6>Ver detalles de los pedidos</h6>
                               </div>
                           </div>
                           
                       </div>
                   </a>
               </div>
               <div class="col-12 col-xs-12 col-md-4">
                   <a href="{{asset('admin/productos')}}" class="text-black">
                       <div class="card text-dark bg-light text-center">
                           <div class="card-body">
                               <div class="card-title">
                                    <h3>Mensajes</h3>
                               </div>
                               <div class="card-text">
                                    <h6>Mensajes de contacto u otros </h6>
                               </div>
                           </div>
                           
                       </div>
                   </a>
               </div>
        </div>
       </div>
    </div>
@endsection

@section('script')
@endsection