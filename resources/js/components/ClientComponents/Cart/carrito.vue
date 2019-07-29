<template>
    <div class="cart mt-2">
        <div class="card">
            <div class="card-body">
                <div class="d-flex text-dark card-title w-100">
                    <h5>Mi carrito</h5>
                    <div class="ml-auto">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
                <ul class="list-group  text-dark list-group-flush">
                    <item-carrito></item-carrito>
                    <item-carrito></item-carrito>
                    <item-carrito></item-carrito>
                </ul>
            </div>
            <div class="card-fother d-flex justify-content-center mb-0">
                <a href="/carrito" class="btn btn-block" :style="{backgroundColor:bgColor, color:color}">Detalles</a>
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
            color: "white"
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

</style>
