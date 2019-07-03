@extends('layouts.app')

@section('title', 'Tienda')

@section('Container')
    <tienda></tienda>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
    
@endsection