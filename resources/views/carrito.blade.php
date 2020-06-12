@extends('layouts.app')

@section('title','Carrito')

@section('Container')

    <web-carrito :productos="{{json_encode($productos)}}"/>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection