{{--traigo el template--}}
@extends('layouts.app')

@section('title','Acceder')

@section('Container')
    <div class="d-acceder container mt-5">
        <web-acceder></web-acceder>
    </div>
@endsection
    
@section('script')
<script src="{{asset('js/app.js')}}" defer></script>
@endsection
