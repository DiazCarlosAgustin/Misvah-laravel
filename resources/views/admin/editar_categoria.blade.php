@extends('layouts.admin')

@section('title', 'Nueva categoria')
    
@section('container')
    @csrf
    <editar-categoria :categoria="{{ json_encode($categoria)}}"/>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection