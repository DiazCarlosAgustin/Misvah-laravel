<template>
    <div v-show="estado" class="notificacion" :class="{isActive:visible}">
        <span class="bar"></span>
        <div class="body">
            <p v-if="tipo = 'carrito' " class="align-middle my-auto">
                El {{producto}} se agrego al carrito correctamente.
            </p>
            <p v-else-if="tipo = 'favorito'" class="align-middle my-auto">
                El {{producto}} se agrego a favoritos correctamente.
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name:'alert',
    prop:['estado','tipo','producto'],
    data() {
        return {
    
        }
    },
    methods:{
        estadoFalse:function(){
            this.estado = false    
        }
    },
    computed:{
        visible:function(){
           return setTimeout(this.estadoFalse, 3000)        
        }
    }
}
</script>
<style scoped>
    .notificacion{
        position: absolute;
        right: 0;
        top: 70px;
        width: 310px;
        height:auto;
        background-color: white;
        z-index: 1;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 10% 90%;
    }
    .notificacion::after{
        position: fixed;
    }
    .bar{
        height: 100%;
        width: 50%;
        background-color:#FFC5C9;
        grid-column: 1/2;
        grid-row: 1;
    }
    .body{
        width: 100%;
        height: 100%;
        grid-column: 2;
        grid-row: 1;
        padding: 10px 5px; 
    }
    .isActive{
        animation-name: desaparecer;
        animation-duration: 5s;
        animation-delay: 3s;
    }
    @keyframes desaparecer{
        0%{
            opacity: 1;
        }
        25%{
            opacity: .75;
        }
        50%{
            opacity: .5;
        }
        75%{
            opacity: .25;
        }
        100%{
            opacity: 0;
            display: none;
        }
    }
</style>
