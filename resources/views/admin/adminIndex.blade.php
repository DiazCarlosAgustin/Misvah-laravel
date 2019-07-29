@extends('layouts.admin')

@section('title', 'Inicio')

@section('container')
    <div class="container-fluid mt-5" >
        <cards-dashboard></cards-dashboard>
        <tabla-ordenes></tabla-ordenes>
        <div class="row mt-5 d-flex justify-content-center">
            <tabla-mas-vendidos></tabla-mas-vendidos>
            <tabla-productos-stock-bajo></tabla-productos-stock-bajo>
            
        </div>
    </div>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection