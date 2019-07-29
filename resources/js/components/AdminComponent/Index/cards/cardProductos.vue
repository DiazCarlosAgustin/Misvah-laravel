<template>
    <div class="row mx-2 card-pedido">
        <div class="col-4 card-left">
            <i class="fas fa-tshirt fa-4x text-white"></i>
        </div>
        <div class="col-8 d-block card-right w-100">
            <p class="titulo">Prod. vendidos</p>
            <p class="cantidad">
                10
            </p>
            <p class="pie">
                Aumentaron un 20% 
            </p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .card-pedido{
        -webkit-box-shadow: -1px -1px 10px 2px rgba(184,184,184,0.59);
        -moz-box-shadow: -1px -1px 10px 2px rgba(184,184,184,0.59);
        box-shadow: -1px -1px 10px 2px rgba(184,184,184,0.59);
    }
    .card{
        position: relative;
        width: 100%;
        height: 100%;
    }
    .card-right{
        padding: 15px 10px;
    }
    .card-right .titulo{
        font-family: sans-serif;
        font-size: 22px;
    }
    .card-right .cantidad{
        font-size: 25px;
        letter-spacing: 0px;
        font-family: sans-serif;
    }
    .card-right .pie{
        font-size: 15px;
        position: absolute;
        bottom: 0;
        font-family: sans-serif;
    }
    .card-left{
        background: linear-gradient(to bottom,#F6BFE9, #AD93D4);
        height: 150px;
    }
    .card-left i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
</style>
