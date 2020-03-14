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
        <div class="col-12 my-3">
            @if(!empty($error))
                <div class="my-3">
                    <a href="{{ url()->previous() }}">Volver</a>
                </div>
                <div class="alert alert-danger" role="alert">
                    {{$error}}
                </div>
            @endif
            @if(!empty($productos))
                @if($back)
                    <div class="my-3">
                        <a href="/admin/productos">Volver</a>
                    </div>
                @endif
                <lista-productos :productos="{{JSON_ENCODE($productos)}}"> </lista-productos>
                <div class="d-flex justify-content-center">
                    {!! $productos->render() !!}
                </div>
            @endif
        </div>
    </div>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection