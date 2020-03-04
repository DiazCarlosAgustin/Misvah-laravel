{{--trae el template de layouts--}}
@extends('layouts.app')

{{--cambia el titulo de la pagina--}}
    @section('title', 'Inicio')

{{--le paso la imagen de fondo y lo que contiene la imagen al centro--}}
    @section('fondo')
        <fondo-component></fondo-component>
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
        </div>
        @endsection

        @section('script')
        <script src="{{asset('js/swiper.js')}}" ></script>
        <script src="{{asset('js/app.js')}}" defer></script>
        <script>
            $(document).ready(function(){
                var swiperDestacados = new Swiper('.swiper-destacados', {
                    loop: true,
                    slidesPerView: 3,
                    spaceBetween: 10,
                    pagination: {
                        el: '.pagination-destacados',
                        clickable: true
                    },
                    breakpoints: {
                        1920:{
                            slidesPerView:4,
                            spaceBetween:10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        375: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        },
                        300: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        }
                    }
                });

                
            });
        </script>
    @endsection