@extends('layouts.app')

@section('title','registrarse')

@section('Container')
    @csrf
    <web-registrarse />
@endsection 
@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
    
@endsection
