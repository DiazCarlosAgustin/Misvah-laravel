@extends('layouts.admin')

@section('title', 'productos')
    
@section('container')
    @csrf
    <div class="container-fluid">
        <div class="row d-flex justify-content-center">
            <div class="col-12 col-xs-12 col-md-10 mt-4">
                <div class="text-center">
                    <h4>Productos</h4>
                </div>
            </div>
        </div>
        <lista-productos :productos="{{json_encode($productos)}}"> </lista-productos>
        <div class="d-flex justify-content-center">
            {{$productos->links()}}
        </div>
        {{-- <lista-productos-oferta></lista-productos-oferta>
         --}}
    </div>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection