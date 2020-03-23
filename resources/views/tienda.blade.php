@extends('layouts.app')

@section('title', 'Tienda')

@section('Container')
    <div class="container">
        <div class="row text-center  d-flex justify-content-center">
            <div class="col-12">
                <div class=" text-center my-4">
                    <h2>Tienda</h2> 
                </div>      
            </div>
        </div>
       <div class="row">
            <tienda :productos="{{ json_encode($productos) }}" 
                :categorias="{{ json_encode($categorias) }}"/>
       </div>
        <div class="row d-flex justify-content-center text-center">
            <div class="col-12 my-3">
                {{ $productos->links() }}
            </div>
        </div>
    </div>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
    <script src="{{asset('js/jquery.js')}}"></script>
@endsection