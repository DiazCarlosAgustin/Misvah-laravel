@extends('layouts.app')

@section('title', 'Contacto')

{{--section del container que contendra el contacto--}}
@section('Container')
    <div class="d-contacto container ">
        <web-contacto></web-contacto>
    </div>
@endsection
@section('script')
<script src="{{asset('js/app.js')}}" defer></script>
@endsection