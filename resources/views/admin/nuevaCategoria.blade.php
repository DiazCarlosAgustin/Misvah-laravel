@extends('layouts.admin')

@section('title','Nueva categoria')

@section('container')
   <div class="d-nueva-categoria">
        @csrf
        <agregar-categoria />
   </div>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection