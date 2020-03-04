@extends('layouts.admin')

@section('title', 'Categorias')
    
@section('container')
    @csrf
    <admin-categorias />
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection