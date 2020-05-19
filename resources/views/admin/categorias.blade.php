@extends('layouts.admin')

@section('title', 'Categorias')
    
@section('container')
    @csrf
    <div class="container mt-5">
        <div class="row d-flex justify-content-center">
            <div class="col-12 text-center mt-4">
                <h4>Categorias</h4>
            </div>
        </div>
        @if(!empty($error))
            <div class="my-3">
                <a href="{{ url()->previous() }}" class="a-volver mx-2 my-2"><i class="fas fa-arrow-left pr-1"></i>Volver</a>
            </div>
            <div class="alert alert-danger" role="alert">
                {{$error}}
            </div>
        @endif
        @if(!@empty($categorias))
            @if($back)
                <div class="my-3">
                    <a href="/admin/categorias" class="a-volver mx-2 my-2"><i class="fas fa-arrow-left pr-1"></i>Volver</a>
                </div>
            @endif
            <div class="row d-flex justify-content-center">
                <div class="col-12">
                    <admin-categorias :categorias="{{json_encode($categorias)}}"></admin-categorias>
                    <div class="d-flex justify-content-center">
                        {{$categorias->links()}}
                    </div>
                </div>
            </div>
        @endif
    </div>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection