@extends('layouts.admin')

@section('title','Ventas del local')

@section('container')
    <pagina-ventas-local></pagina-ventas-local>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection