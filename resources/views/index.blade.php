{{--trae el template de layouts--}}
@extends('layouts.app')

{{--cambia el titulo de la pagina--}}
    @section('title', 'Inicio')

    @section('style')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css">
    @endsection

{{--le paso la imagen de fondo y lo que contiene la imagen al centro--}}
    @section('fondo')
        <div class="fondo">
            <fondo-component></fondo-component>
        </div>
    @endsection

{{--contenido de la pagina--}}
    @section('Container')
        <div class="">
            <div class="d-categoria container">
                <categorias-component></categorias-component>
            </div>
            <div class="d-destacados container">
                <destacados-component></destacados-component>
            </div>
            <div class="d-instagram container">
                <instagram-component></instagram-component>
            </div>
        </div>
        @endsection

    @section('script')
        <script src="{{asset('js/app.js')}}" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js"></script>
        <script>
            $(document).ready(function(){

                var cantidad = 0;
                if($( window ).width() >= 360  && $( window ).width() < 800){
                    cantidad = 1;
                }
                else if($( window ).width() >= 800 && $( window ).width() < 1020){
                    cantidad = 2;
                }
                else if($( window ).width() >= 1020){
                    cantidad = 3;
                    
                }
                var swiperDestacados = new Swiper('.swiper-destacados', {
                slidesPerView: cantidad,
                spaceBetween: 30,
                pagination: {
                el: '.pagination-destacados',
                clickable: true,
                },
                });
                var swiper = new Swiper('.swiper-container', {
                slidesPerView: cantidad,
                spaceBetween: 30,
                pagination: {
                el: '.swiper-pagination',
                clickable: true,
                },
                });
                
            });
        </script>
    @endsection