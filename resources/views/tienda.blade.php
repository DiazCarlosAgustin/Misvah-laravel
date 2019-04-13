@extends('layouts.app')

@section('title', 'Tienda')

@section('Container')
    <div class="d-tienda container mt-5 ">
        <div class="row r-contacto text-center  d-flex justify-content-center">
            <div class="col-12 col-sm-12 col-lg-8">
                <div class="d-titulo-tienda mt-5 pb-3">
                    Tienda
                </div>      
            </div>
        </div>
        <div class="row text-center ">
            <div class="col-12 col-xs-12 ">
                <h4 class="my-3">Ajustes</h4>
                <form action="">
                    <div class="col-12 d-sm-block d-md-flex justify-content-center">
                            <div class="input-group  col-md-3 col-xs-12 mb-2 align-middle">
                                    <div class="input-group-prepend">
                                        <label for="cbCategorias" class="input-group-text">Categorias: </label>
                                    </div>
                                    <select name="cbCategorias"  class="custom-select form-control  " id="cbCategorias">
                                        <option value="1">Categorias 1</option>
                                        <option value="2">Categorias 2</option>
                                        <option value="3">Categorias 3</option>
                                        <option value="4">Categorias 4</option>
                                        <option value="5">Categorias 5</option>
                                    </select>
                                </div>
                                <div class="input-group  col-md-3 col-xs-12 mb-2 align-middle">
                                    <div class="input-group-prepend">
                                        <label for="cbMarcas" class="input-group-text">Marcas: </label>
                                    </div>
                                    <select name="cbMarcas"  class="custom-select form-control  " id="cbMarcas">
                                        <option value="1">Marca 1</option>
                                        <option value="2">Marca 2</option>
                                        <option value="3">Marca 3</option>
                                        <option value="4">Marca 4</option>
                                        <option value="5">Marca 5</option>
                                    </select>
                                </div>
                                
                                <div class="input-group col-md-3 col-xs-12 mb-2 align-middle">
                                    <div class="input-group-prepend">
                                        <label for="cbOrder" class="input-group-text">Ordenar por: </label>
                                    </div>
                                    <select name="cbOrder"  class="custom-select form-control" id="cbOrder">
                                        <option value="1">tipo 1</option>
                                        <option value="2">tipo 2</option>
                                        <option value="3">tipo 3</option>
                                        <option value="4">tipo 4</option>
                                        <option value="5">tipo 5</option>
                                    </select>
                                </div>
                    </div>
                </form>
            </div>

        </div>
        <div class="row r-contacto text-right  d-flex justify-content-le mt-5">
            <div class="col-12 col-xs-12 col-md-4">
                <div class="card border my-3 w-auto">
                    <div class="destacado-img align-self-center">
                        <div class="card-img-top">
                            <img src="https://via.placeholder.com/300x350.png" alt="" class="aling-center  ">
                        </div>
                        <span class="bg-danger text-left mt-0 text-white s-stock p-1">SIN STOCK</span>
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
            </div>
            <div class="col-12 col-xs-12 col-md-4">
                <div class="card border my-3 w-auto">
                    <div class="destacado-img align-self-center">
                        <div class="card-img-top">
                            <img src="https://via.placeholder.com/300x350.png" alt="" class="aling-center  ">
                        </div>
                        <span class="bg-danger text-left mt-0 text-white s-descuento p-1">25% OFF</span>
                        <span class="bg-danger text-left mt-0 text-white s-stock p-1">SIN STOCK</span>
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
            </div>
            <div class="col-12 col-xs-12 col-md-4">
                <div class="card border my-3 w-auto">
                    <div class="destacado-img align-self-center">
                        <div class="card-img-top">
                            <img src="https://via.placeholder.com/300x350.png" alt="" class="aling-center  ">
                        </div>
                        <span class="bg-danger text-left mt-0 text-white s-descuento p-1">25% OFF</span>
                        <span class="bg-danger text-left mt-0 text-white s-stock p-1">SIN STOCK</span>
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
            </div>
            <div class="col-12 col-xs-12 col-md-4">
                <div class="card border my-3 w-auto">
                    <div class="destacado-img align-self-center">
                        <div class="card-img-top">
                            <img src="https://via.placeholder.com/300x350.png" alt="" class="aling-center  ">
                        </div>
                    </div>
                    <div class="card-body d-flex">
                        <div class="text-left ">
                            <h4 class="card-title">Nombre Producto</h4>
                            <p class="card-subtitle mb-2 text-muted color-danger">$2900.50</p>
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
            </div>
            <div class="col-12 col-xs-12 col-md-4">
                <div class="card border my-3 w-auto">
                    <div class="destacado-img align-self-center">
                        <div class="card-img-top">
                            <img src="https://via.placeholder.com/300x350.png" alt="" class="aling-center  ">
                        </div>
                        {{--<span class="bg-danger text-left mt-0 text-white s-descuento p-1">25% OFF</span>--}}
                        <span class="bg-danger text-left mt-0 text-white s-stock p-1">SIN STOCK</span>
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
            <div class="col-12 col-xs-12 col-md-4">
                <div class="card border my-3 w-auto">
                    <div class="destacado-img align-self-center">
                        <div class="card-img-top">
                            <img src="https://via.placeholder.com/300x350.png" alt="" class="aling-center  ">
                        </div>
                        <span class="bg-danger text-left mt-0 text-white s-descuento p-1">25% OFF</span>
                        <span class="bg-danger text-left mt-0 text-white s-stock p-1">SIN STOCK</span>
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
            </div>
            <div class="col-12 col-xs-12 col-md-4">
                <div class="card border my-3 w-auto">
                    <div class="destacado-img align-self-center">
                        <div class="card-img-top">
                            <img src="https://via.placeholder.com/300x350.png" alt="" class="aling-center  ">
                        </div>
                        <span class="bg-danger text-left mt-0 text-white s-descuento p-1">25% OFF</span>
                        <span class="bg-danger text-left mt-0 text-white s-stock p-1">SIN STOCK</span>
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
            </div>
        </div>
        <div class="row text-right  d-flex justify-content-le mt-5">
            <div class="col-12">
                    <nav aria-label="...">
                        <ul class="pagination pagination-lg justify-content-center">
                            <li class="page-item active">
                            <a class="page-link " href="#" tabindex="-1">1</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                        </ul>
                    </nav>
            </div>
        </div>
    </div>
@endsection