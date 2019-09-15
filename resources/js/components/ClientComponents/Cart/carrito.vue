<template>
    <div class="cart mt-2">
        <div class="card">
            <div class="card-body">
                <div class="d-flex text-dark card-title w-100">
                    <h4>Mi carrito</h4>
                    <div class="ml-auto">
                        <i class="fas fa-times fa-2"></i>
                    </div>
                </div>
                <div class="list-group  text-dark list-group-flush">
                    <item-carrito class="item-carrito" 
                        v-for="(producto, index) in carrito" 
                        :key="producto.id" 
                        :producto="producto"
                        @Cantidad="cantidad(index,...arguments)"
                        @Eliminar="eliminar(index)"
                    />
                </div>
            </div>
            <div class="card-fother p-0 mb-0">
                <a href="/carrito" class="btn btn-block col">Detalles</a>
                <a href="" class="btn btn-block col" :style="{backgroundColor:bgColor, color:color}">Comprar</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'carrito',
    data(){
        return{
            bgColor: "#e91e63",
            color: "white",
            carrito:[
                {
                    id:1,
                    nombre:'producto 1',
                    precio:200,
                    subtotal:400,
                    imagen: 'https://via.placeholder.com/80.png',
                    color:'https://via.placeholder.com/40x25/FF0000',
                    cantidad:2
                },
                {
                    id:2,
                    nombre:'producto 2',
                    precio:100,
                    subtotal:100,
                    imagen: 'https://via.placeholder.com/80.png',
                    color:'https://via.placeholder.com/40x25/FF0000',
                    cantidad:1
                },
                {
                    id:3,
                    nombre:'producto 3',
                    precio:140,
                    subtotal:140,
                    imagen: 'https://via.placeholder.com/80.png',
                    color:'https://via.placeholder.com/40x25/FF0000',
                    cantidad:1
                },
                {
                    id:4,
                    nombre:'producto 4',
                    precio:240,
                    subtotal:480,
                    imagen: 'https://via.placeholder.com/80.png',
                    color:'https://via.placeholder.com/40x25/FF0000',
                    cantidad:2
                },
            ]
        }
    },
    methods:{
        cantidad: function($id, $cantidad){
            this.carrito[$id].cantidad = $cantidad  
            this.carrito[$id].subtotal = this.carrito[$id].precio * this.carrito[$id].cantidad
        },
        eliminar:function($id){
            this.carrito.splice($id,1)
        }
    }
};
$(document).ready(function(){
    $('.fa-times').click(function(){
        $('.cart').toggleClass('cart-active');
    });
});
</script>
<style scoped>
    .cart{
        position: absolute;
        min-width: 450px;
        max-width:500px;
        width: 100%;
        right: 100%;
        z-index: 10000;
        display: none;
    } 
    .cart-active{
        position: absolute;
        right: 0;
        transition:ease-in-out 1.5s;
        transition-duration:1s ; 
        margin-right: 30px;
        display: block;
    }
    .item-carrito{
        border-top: 1px solid rgba(0, 0, 0, .1);
        border-bottom: 1px solid rgba(0, 0, 0, .1);
    }
    .list-group{
        overflow: auto;
        min-width: 45px;
        max-height: 300px;
        width: 100%;
    }
    .list-group::-webkit-scrollbar {
        width: 8px;     /* Tamaño del scroll en vertical */
        height: 8px;    /* Tamaño del scroll en horizontal */
    }
    .list-group::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 4px;
    }
    .list-group::-webkit-scrollbar-thumb:hover {
        background: #b3b3b3;
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    }
    .list-group::-webkit-scrollbar-track:hover,
    .list-group::-webkit-scrollbar-track:active {
        background: #d4d4d4;
    }
</style>
