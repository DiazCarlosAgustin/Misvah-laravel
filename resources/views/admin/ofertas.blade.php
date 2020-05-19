@extends('layouts.admin')

@section('title', 'Ofertas')

@section('container')
    <div class="container">
        <div class="row mt-4 d-flex  justify-content-center">
            <div class="col-12 text-center">
                <h4>Ofertas</h4>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-12">
                <lista-productos-oferta :ofertas="{{json_encode($ofertas)}}"></lista-productos-oferta>
                {{$ofertas->links()}}
            </div>
        </div>
    </div>
@endsection


@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection