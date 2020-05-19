@extends('layouts.admin')

@section('title', 'Cupones')

@section('container')
    <div class="container">
        <div class="row mt-4 d-flex  justify-content-center">
            <div class="col-12 text-center">
                <h4>Cupones</h4>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-12">
                <lista-productos-cupones :cupones="{{json_encode($cupones)}}"></lista-productos-cupones>
                {{$cupones->links()}}
            </div>
        </div>
    </div>
@endsection


@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection