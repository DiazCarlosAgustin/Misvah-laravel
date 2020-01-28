@extends('layouts.app')

@section('title', 'Tienda')

@section('Container')
    <tienda />
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
    <script src="{{asset('js/jquery.js')}}"></script>
@endsection