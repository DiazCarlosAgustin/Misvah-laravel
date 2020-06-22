{{--traigo el template--}}
@extends('layouts.app')

@section('title','Acceder')

@section('Container')
    <div class="d-acceder container">
        <pagina-perfil :perfil="{{json_encode($user)}}"/>
    </div>
@endsection
    
@section('script')
<script src="{{asset('js/app.js')}}" defer></script>
@endsection
