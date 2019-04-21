@extends('layouts.admin')

@section('title', 'Inicio')

@section('container')
    <div class="container" >
        <div class="row m-2">
            <div class="col-12 text-left">
                <h1 class="">Inicio</h1>
            </div>
        </div>
        <div class="row m-2 d-flex">
            <div class=" mx-2 col-sm-12 col-md-6 col-lg-3">
                <div class="col-12 d-flex blue lighten-1 text-white w-100 h-100 rounded ">
                    <div class="col-4 my-auto mx-auto">
                        <i class="fas fa-shopping-cart fa-3x"></i>
                    </div>
                    <div class="col-8 align-right align-center my-auto  ">
                        <div class="text-center ">
                            <h3>2</h3>
                            <h4> Nuevas ordenes</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="  mx-2 col-sm-12 col-md-6 col-lg-3">
                <div class="col-12 d-flex blue lighten-3 text-white w-100 h-100 rounded">
                    <div class="col-4 my-auto mx-auto">
                        <i class="fas fa-user fa-3x"></i>
                    </div>
                    <div class="col-8 align-right align-center my-auto  ">
                        <div class="text-center ">
                            <h3>12</h3>
                            <h4>Nuevos usuarios</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="  mx-2 col-sm-12 col-md-6 col-lg-3">
                <div class="col-12 d-flex blue lighten-1 text-white w-100 h-100 rounded ">
                    <div class="col-4 my-auto mx-auto">
                        <i class="fas fa-user fa-3x"></i>
                    </div>
                    <div class="col-8 align-right align-center my-auto  ">
                        <div class="text-center ">
                            <h3>12</h3>
                            <h4>Nuevos usuarios</h4>
                        </div>
                    </div>
                </div>
            </div>
           
    </div>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>    
@endsection