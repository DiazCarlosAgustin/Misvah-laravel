<template>
    <div class="swiper-slide animated fadeIn h-100" style="height:550px !important;">
        <div class="card">
            <div class="destacado-img align-self-center">
                <div class="card-img-top">
                    <img src="https://via.placeholder.com/300x350.png" alt="" class="aling-center card-img-top">
                </div>
                <span class="bg-danger text-left m-0  text-white s-descuento p-1">25% OFF</span>
                <span class="bg-danger text-left m-0  text-white s-stock p-1">SIN STOCK</span>
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
                        <button type="submit" class="btn btn-rosa align-middle d-none d-md-inline">
                            <i class="fas fa-cart-plus"></i>
                            Añadir al carrito
                        </button>
                        <button type="submit" class="btn btn-rosa align-middle d-md-none">
                            <i class="fas fa-cart-plus " ></i>
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
<style scoped>
.swiper-container{
    width: 320px;
}
 .swiper-slide {
    text-align: center;
    height: 550px !important;
    font-size: 18px;
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
