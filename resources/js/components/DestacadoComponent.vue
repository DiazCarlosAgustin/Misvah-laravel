<template>
    <div class="swiper-slide">
        <div class=" card border my-2">
            <div class="destacado-img align-self-center">
                <div class="card-img-top">
                    <img src="https://via.placeholder.com/300x350.png" alt="" class="aling-center">
                </div>
                <span class="bg-danger text-left  mt-4 text-white s-descuento p-1">25% OFF</span>
                <span class="bg-danger text-left mt-4  text-white s-stock p-1">SIN STOCK</span>
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
            <div class="p-0 justify-content-center">
                <form class="d-inline align-middle">
                    <div class="form-group w-100 h-100 align-midle">
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
</template>
<script>
export default {
    name:'destacado',

}
$(document).ready(function(){
    $('.fav').hover(function(){
        if( $(this).find('i').text()==='favorite_border'){
            $(this).find('i').text('favorite');
            $(this).find('i').addClass('text-danger');
        }
        else{
            $(this).find('i').text('favorite_border');
            $(this).find('i').removeClass('text-danger');
        }
    });
    $('.fav').mouseleave(function(){
       if( $(this).find('i').text() === 'favorite'){
            $(this).find('i').text('favorite');
            $(this).find('i').addClass('text-danger');
        }
        else{
            $(this).find('i').text('favorite_border');
            $(this).find('i').removeClass('text-danger');
        }
    });
    $('.fav').click(function(){
        if( $(this).find('i').text()==='favorite_border'){
            $(this).find('i').text('favorite');
            $(this).find('i').addClass('text-danger');
        }
        else{
            $(this).find('i').text('favorite_border');
            $(this).find('i').removeClass('text-danger');
        }
    });
    //funcion de marcar el corazon para celular
    $('.fav-xs').on("tap",function(){
        if( $(this).find('i').text()==='favorite_border'){
            $(this).find('i').text('favorite');
            $(this).find('i').addClass('text-danger');
        }
        else{
            $(this).find('i').text('favorite_border');
            $(this).find('i').removeClass('text-danger');
        }
    });
});
</script>