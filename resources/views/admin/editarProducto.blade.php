@extends('layouts.admin')

@section('title','Editar producto')

@section('container')
    <div class="container">
        <div class="row d-flex justify-content-center mt-5">
            <div class="col col-12">
                <h2 class="text-center">Editar producto</h2>
            </div>
            <div class="my-3 col-12 text-left">
              <a href="{{ url()->previous() }}" class="a-volver mx-2 my-2"><i class="fas fa-arrow-left pr-1"></i>Volver</a>
          </div>
        </div>
        <pagina-editar-producto :pro="{{json_encode($producto)}}"/>
    </div>
@endsection
@section('script')
<script src="{{asset('js/app.js')}}" defer></script>
@endsection