@extends('layouts.app')

@section('title', 'Producto')

@section('style')
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css">
@endsection

@section('Container')
    <div class="d-productos container mt-5">
        <div class="row d-flex justify-content-center">
            <div class="d-titulo-producto mt-5 pb-3">
                    <h1>Producto</h1>
            </div>
            
        </div>
<<<<<<< HEAD
        <div class="row d-flex justify-content-center mx-auto">
            <div class="col-12 col-xs-12 col-lg-6 text-center">
                <div class="swiper-container h-100">
                    <div class="swiper-wrapper mb-3 mx-auto">
=======
        <div class="row d-flex justify-content-center">
            <div class="col-12 col-xs-12 col-lg-6">
                <div class="swiper-container">
                    <div class="swiper-wrapper mb-3">
>>>>>>> db0e47929f93d640a292cd3f500139503ce596f9
                        <div class="swiper-slide"><img src="https://via.placeholder.com/350x350.png" alt=""></div>
                        <div class="swiper-slide"><img src="https://via.placeholder.com/350x350.png" alt=""></div>
                        <div class="swiper-slide"><img src="https://via.placeholder.com/350x350.png" alt=""></div>
                        <div class="swiper-slide"><img src="https://via.placeholder.com/350x350.png" alt=""></div>
                        <div class="swiper-slide"><img src="https://via.placeholder.com/350x350.png" alt=""></div>
                        <div class="swiper-slide"><img src="https://via.placeholder.com/350x350.png" alt=""></div>
                        <div class="swiper-slide"><img src="https://via.placeholder.com/350x350.png" alt=""></div>
                        <div class="swiper-slide"><img src="https://via.placeholder.com/350x350.png" alt=""></div>
                        <div class="swiper-slide"><img src="https://via.placeholder.com/350x350.png" alt=""></div>
                        <div class="swiper-slide"><img src="https://via.placeholder.com/350x350.png" alt=""></div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                    <!-- Add Arrows -->
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
                        
            </div>
            <div class="col-12 col-xs-12 col-lg-6 ">
                <div class="nombre-producto pt-1">
                    <h2>Nombre del producto</h2>
                </div>
                <div class="calificacion-producto px-2 ">
                        <form>
                            <p class="clasificacion">
                                <input id="radio1" type="radio" name="estrellas" value="5"><!--
                                --><label for="radio1">★</label><!--
                                --><input id="radio2" type="radio" name="estrellas" value="4"><!--
                                --><label for="radio2">★</label><!--
                                --><input id="radio3" type="radio" name="estrellas" value="3"><!--
                                --><label for="radio3">★</label><!--
                                --><input id="radio4" type="radio" name="estrellas" value="2"><!--
                                --><label for="radio4">★</label><!--
                                --><input id="radio5" type="radio" name="estrellas" value="1"><!--
                                --><label for="radio5">★</label>
                            </p>
                        </form>
                </div>
<<<<<<< HEAD
                <div class="color-producto py-1 d-block">
                    <h4 class="d-inline">Color:  </h4>
                    <select name="cbColorProducto" id="cbColorProducto" class=" custom-select mr-sm-2 d">
                        <option value="1">Blanco</option>
                        <option value="2">Negro</option>
                    </select>
                </div>
=======
>>>>>>> db0e47929f93d640a292cd3f500139503ce596f9
                <div class="precio-producto py-1">
                    <h4 class="d-inline">Precio: </h4>
                    <h5 class="d-inline text-muted">$262.56</h5>
                </div>
                <div class="stock-producto py-1">
                    <h4 class="d-inline">Disponibilidad: </h4>
                    <h5 class="d-inline text-muted">En stock</h5>
                </div>
                <div class="cantidad-producto form-group py-1">
                    <h4 class="d-inline">Cantidad: </h4>
                    <input type="number" name="" id="" class="form-control d-inline cantidad" min="1" value="1">
                </div>
                <button type="submit" class="btn btn-rosa  align-middle">
<<<<<<< HEAD
                    <i class="fas fa-cart-plus pr-1"></i>
                    Añadir al carrito
                </button>
                <div class="lista-deseo">
                    <a href="" class="text-mutted">Agregar a tu lista de deseos</a>
                </div>
=======
                    <i class="fas fa-cart-plus"></i>
                    Añadir al carrito
                </button>
>>>>>>> db0e47929f93d640a292cd3f500139503ce596f9
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12">
                <div class="card ">
                    <div class="card-header">
                       <h4>Información del producto</h4>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Especificación</h5>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit esse obcaecati soluta debitis dolores optio excepturi quam rerum repudiandae cum minima quaerat nisi facilis, expedita nulla id ex voluptatibus maxime?
                        </p>
                        <h5 class="card-title">Caracterisitcas</h5>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit esse obcaecati soluta debitis dolores optio excepturi quam rerum repudiandae cum minima quaerat nisi facilis, expedita nulla id ex voluptatibus maxime?
                        </p>
                        <h5 class="card-title">Extras</h5>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit esse obcaecati soluta debitis dolores optio excepturi quam rerum repudiandae cum minima quaerat nisi facilis, expedita nulla id ex voluptatibus maxime?
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-12">
                <h3>Productos relacionados</h3>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12 col-xs-12 col-md-4">
                <div class="card border my-3 w-auto">
                    <div class="destacado-img align-self-center">
                        <div class="card-img-top">
                            <img src="https://via.placeholder.com/300x350.png" alt="" class="aling-center  ">
                        </div>
                        <span class="bg-danger text-left mt-0 text-white s-descuento p-1">25% OFF</span>
                    </div>
                    <div class="card-body d-flex">
                        <div class="text-left ">
                            <h4 class="card-title">Nombre Producto</h4>
                            <p class="card-subtitle mb-2 text-muted color-danger"><strike>$3000.50</strike> - $2900.50</p>
                        </div>
                        <div class="text-right align-self-center fav ml-auto">
                            <i class="material-icons fav-xs" style="font-size: 30px">favorite_border</i>
                        </div>
                    </div>
                    <div class="p-0 justify-content-center d-flex">
                        <form class="d-inline align-middle">
                            <div class="form-group w-100  align-midle">
                                <button class="btn align-middle btn-info">
                                    <i class="far fa-eye"></i>
                                    Ver
                                </button>
                                <button type="submit" class="btn btn-rosa align-middle">
                                    <i class="fas fa-cart-plus"></i>
                                    Añadir al carrito
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>        <div class="col-12 col-xs-12 col-md-4">
                <div class="card border my-3 w-auto">
                    <div class="destacado-img align-self-center">
                        <div class="card-img-top">
                            <img src="https://via.placeholder.com/300x350.png" alt="" class="aling-center  ">
                        </div>
                        <span class="bg-danger text-left mt-0 text-white s-descuento p-1">25% OFF</span>
                    </div>
                    <div class="card-body d-flex">
                        <div class="text-left ">
                            <h4 class="card-title">Nombre Producto</h4>
                            <p class="card-subtitle mb-2 text-muted color-danger"><strike>$3000.50</strike> - $2900.50</p>
                        </div>
                        <div class="text-right align-self-center fav ml-auto">
                            <i class="material-icons fav-xs" style="font-size: 30px">favorite_border</i>
                        </div>
                    </div>
                    <div class="p-0 justify-content-center d-flex">
                        <form class="d-inline align-middle">
                            <div class="form-group w-100  align-midle">
                                <button class="btn align-middle btn-info">
                                    <i class="far fa-eye"></i>
                                    Ver
                                </button>
                                <button type="submit" class="btn btn-rosa align-middle">
                                    <i class="fas fa-cart-plus"></i>
                                    Añadir al carrito
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>        <div class="col-12 col-xs-12 col-md-4">
                <div class="card border my-3 w-auto">
                    <div class="destacado-img align-self-center">
                        <div class="card-img-top">
                            <img src="https://via.placeholder.com/300x350.png" alt="" class="aling-center  ">
                        </div>
                    </div>
                    <div class="card-body d-flex">
                        <div class="text-left ">
                            <h4 class="card-title">Nombre Producto</h4>
                            <p class="card-subtitle mb-2 text-muted color-danger"> $2900.50</p>
                        </div>
                        <div class="text-right align-self-center fav ml-auto">
                            <i class="material-icons fav-xs" style="font-size: 30px">favorite_border</i>
                        </div>
                    </div>
                    <div class="p-0 justify-content-center d-flex">
                        <form class="d-inline align-middle">
                            <div class="form-group w-100  align-midle">
                                <button class="btn align-middle btn-info">
                                    <i class="far fa-eye"></i>
                                    Ver
                                </button>
                                <button type="submit" class="btn btn-rosa align-middle">
                                    <i class="fas fa-cart-plus"></i>
                                    Añadir al carrito
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
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