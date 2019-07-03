<template>
    <div class="card">
        <div class="card-img-top">
                <img src="https://via.placeholder.com/300x350.png" alt="" class="aling-center">
                <span class="bg-danger text-left m-0  text-white s-descuento p-1">25% OFF</span>
            <span class="bg-danger text-left m-0  text-white s-stock p-1">SIN STOCK</span>
        </div>
        <div class="body-card">
            <div class="fav white border shadow mr-auto" @click="favorito()">
                <i class="material-icons fav-xs" style="font-size: 30px" :class="[color]">{{icono}}</i>
            </div>
            <div class="text-center my-2">
                <h4 class="card-subtitle text-muted"><strong>Categoria</strong></h4>
                <!-- Subtitle -->
                <h5 class="card-title"><strong>Nombre del producto</strong></h5>
            </div>
            <div class="text-center">
                <p class="card-subtitle mb-2 text-muted"><strike class="text-danger">$3000.50</strike> - $2900.50</p>
            </div>
            <div class="text-center d-flex justify-content-center">
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
    </div>
</template>
<script scoped>
export default {
    name:'destacado',
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
    .s-descuento{
        position: absolute;
        right: 0;
        top: 40px;
    }
    .s-stock{
        position: absolute;
        left: 0;
        top: 40px;
    } 
    .fav{
        margin-left: -25px;
        width: 50px;
        height: 50px;
        position: absolute;
        border-radius: 50%;
        transform: translateY(-50%);
    }
    .fav i{
        position: absolute; 
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .card{
        max-width: 300px;
    }
    .btn-ver{
        border: none;
        box-shadow: none;
    }
</style>
