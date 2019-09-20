<template>
    <!-- Card v.2  -->
    <a href="">
        <div class="card my-3">
            <img src="https:via.placeholder.com/250x250.png" alt="" class="card-img-top">
            <div class="card-body row">
                <div class="col-12">
                    <div class="row h-100">
                        <div class="col-9">
                            <div class="row">
                                <h6 class="col-12">{{producto.nombre}}</h6>
                                <h6 class="col-12">${{producto.precio}}</h6>
                            </div>
                        </div>
                        <div class="col-3 d-flex p-0">
                            <i class="material-icons fav-xs mt-0 align-middle mx-auto" style="font-size: 2em" :class="[color]" @click.prevent="favorito()">{{icono}}</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </a>
    <!-- Card v.1 -->
    <!-- <div class="card">
        <div class="card-img-top">
                <img src="https:via.placeholder.com/300x350.png" alt="" class="aling-center">
                <span class="bg-danger text-left m-0  text-white s-descuento p-1">25% OFF</span>
            <span class="bg-danger text-left m-0  text-white s-stock p-1">SIN STOCK</span>
        </div>
        <div class="body-card">
            <div class="fav white border shadow mr-auto" @click="favorito()">
                <i class="material-icons fav-xs" style="font-size: 30px" :class="[color]">{{icono}}</i>
            </div>
            <div class="text-center py-3">
                <h5 class="card-subtitle text-muted">Categoria</h5>
                <h4 class="card-title">Nombre del producto</h4>
            </div>
            <div class="text-center">
                <p class="card-subtitle mb-2 text-muted"><strike class="text-danger">$3000.50</strike> - $2900.50</p>
            </div>
            <div class="text-center justify-content-center">
                <button class="btn align-middle btn-md btn-ver">
                    <i class="far fa-eye"></i>
                    Ver
                </button>
                <button type="submit" class="btn pink btn-md align-middle d-md-inline enviar p-3 white-text">
                    <i class="fas fa-cart-plus"></i>
                    Añadir al carrito
                </button>
            </div>
        </div>
    </div> -->
</template>
<script scoped>
export default {
    name:'destacado',
    props:['producto'],
    data() {
        return{
            estado: false,
            color: 'text-dark',
            icono: 'favorite_border'
        }
    },
     methods:{
         favorito: function(){
             this.estado = !this.estado
             if(this.estado){
                 this.color = 'text-danger';
                 this.icono = 'favorite'
             }
             else{
                 this.color ='text-dark';
                 this.icono = 'favorite_border'
             }
            
         }
     }
}
</script>
<style scoped>
    /* style v.2 */
    a{
        text-decoration: none;
        color:black;
    }
    /* style v.1 */
    /* .s-descuento{
        position: absolute;
        right: 0;
        top: 40px;
    }
    .s-stock{
        position: absolute;
        left: 0;
        top: 40px;
    } */
    .card-body{
        position: relative;
    }
    .fav{
        position: absolute;
        top: 0;
     }/*
    .fav i{
        position: absolute; 
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    } */
    /*
    .card{
        max-width: 300px;
    }
    .btn-ver{
        border: none;
        box-shadow: none;
    } */
</style>
