@extends('layouts.app')

@section('title', 'Producto')

@section('style')
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css">
@endsection

@section('Container')
    <web-producto></web-producto>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js"></script>
    <script>
        $(document).ready(function(){
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 1,
                spaceBetween: 30, 
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                
            });
        });   
    </script>
@endsection