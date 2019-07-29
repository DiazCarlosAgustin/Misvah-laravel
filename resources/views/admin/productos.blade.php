@extends('layouts.admin')

@section('title', 'productos')
    
@section('container')
    <div class="container-fluid mt-5">
        <div class="row d-flex justify-content-center">
            <div class="col-12 col-xs-12 col-md-10 mt-4">
                <div class="text-center">
                    <h4>Productos</h4>
                </div>
            </div>
        </div>
        <lista-productos></lista-productos>
        <lista-productos-oferta></lista-productos-oferta>
        <lista-productos-cupones></lista-productos-cupones>
    </div>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection