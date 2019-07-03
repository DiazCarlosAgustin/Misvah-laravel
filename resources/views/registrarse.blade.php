@extends('layouts.app')

@section('title','Crear cuenta')

@section('Container')
    <div class="d-registrarse container mt-5">
        <web-registrarse></web-registrarse>
    </div>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection