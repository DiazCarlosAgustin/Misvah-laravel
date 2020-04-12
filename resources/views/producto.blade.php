@extends('layouts.app')

@section('title', 'Producto')


@section('Container')
    <web-producto :producto="{{json_encode($producto)}}"></web-producto>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection