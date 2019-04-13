@extends('layouts.app')

@section('title', 'Contacto')

{{--section del container que contendra el contacto--}}
@section('Container')
    <div class="container d-como-llegar mt-5">
        <div class="row r-como-llegar text-center d-flex justify-content-center">
            <div class="col-12 col-sm-12 col-lg-10">
                <div class="d-titulo-como-llegar mt-5 pb-3">
                    ¿Cómo llegar?
                </div>
                <div class="d-mapa">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1012.2843372158017!2d-64.18584644712581!3d-31.416739211326266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x93f297da8d9e049e!2sAccesorios+Misvah!5e0!3m2!1ses-419!2sar!4v1553545626862" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
@endsection