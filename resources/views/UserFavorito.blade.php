@extends('layouts.app')

@section('title','Mis favoritos')

@section('Container')
    <page-favoritos :favoritos="{{json_encode($favoritos)}}"/>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection