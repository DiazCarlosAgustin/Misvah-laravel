<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{asset('css/swiper.min.css')}}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <style>
        *{
            align-items: center;
            text-align: center
        }
        .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    height: 380px !important;
    text-align: center;
    font-size: 18px;
    background: #f2f2;
    /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
  }
    </style>
    <title>Document</title>
</head>
<body>
    @extends('layouts.app')
    @section('Container')
    <div class="d-instagram container">
            <div class="Titulo-instagram">Instagram</div>
            <div class="usuario-intagram"><a href="">@Misvah-moda</a></div>
            <div class="swiper-container mt-2">
                <div class="swiper-wrapper mb-5" style="width:350px; height:380px;">
                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                    <div class="swiper-slide">Slide 4</div>
                    <div class="swiper-slide">Slide 5</div>
                    <div class="swiper-slide">Slide 6</div>
                    <div class="swiper-slide">Slide 7</div>
                    <div class="swiper-slide">Slide 8</div>
                    <div class="swiper-slide">Slide 9</div>
                    <div class="swiper-slide">Slide 10</div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
    @endsection
        @section('script')
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{asset('js/swiper.min.js')}}"></script>
    <script>
        var swiper = new Swiper('.Container .swiper-container', {
       slidesPerView: 3,
       spaceBetween: 30,
       pagination: {
         el: '.swiper-pagination',
         clickable: true,
       }
         });
     </script>
            
        @endsection
</body>
</html>