@extends('layouts.app')

@section('title','acceder')

@section('Container')
<div class="container">
   <web-acceder />
</div>
@endsection
@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
    
@endsection