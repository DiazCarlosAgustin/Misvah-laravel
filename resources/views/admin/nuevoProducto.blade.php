@extends('layouts.admin')

@section('title','Agregar producto')
    
@section('container')
<div class="container">
        <agregar-producto></agregar-producto>
</div>
@endsection
@section('script')
<script src="{{asset('js/app.js')}}" defer></script>
@endsection