@extends('layouts.app')

@section('title','Carrito')
    
@section('Container')
    <web-carrito></web-carrito>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection