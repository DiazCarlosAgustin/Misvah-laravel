<template>
    <div class="swiper-slide">
        <div class=" card border">
            <div class="destacado-img align-self-center">
                <div class="card-img-top">
                    <img src="https://via.placeholder.com/300x350.png" alt="" class="aling-center">
                </div>
                <span class="bg-danger text-left  text-white s-descuento p-1">25% OFF</span>
                <span class="bg-danger text-left  text-white s-stock p-1">SIN STOCK</span>
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
        </div>
    </div>
</template>
<script>
export default {
    name:'destacado',

}
$(document).ready(function(){
    console.log(1);
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