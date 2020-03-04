<template>
    <div v-show="estado" class="notificacion" :class="{isActive:estado}" :id="'fav-'+_uid">
        <div v-if="type =='carrito' " class="icon">
            <i class="material-icons fav-xs mt-0 align-middle mx-auto text-danger" >cart</i>
        </div>
        <div v-else class="icon ">
            <i class="material-icons fav-xs mt-0 align-middle mx-auto text-danger" >favorite</i>
        </div>
    </div>
</template>
<script>
export default {
    name:'alert',
    props:['estado','tipo'],
    data() {
        return {
            type: this.tipo
        }
    },
    methods:{
    },
    computed:{
    },
    mounted() {
        let vm = this
        let $element = document.getElementById(`fav-${this._uid}`);
        $element.addEventListener('animationend',function(){
            vm.$emit('ocultar',false)
        })
    },
}
</script>
<style scoped>
    .material-icons{
        font-size: 3.5em;
    }
    .notificacion{
        width: 100%;
        height:100%;
        z-index: 100;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 10% 90%;
    }
    .notificacion::after{
        top: 50%;
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
        animation-duration: 2s;
        animation-timing-function: ease-in-out;
    }
    @keyframes desaparecer{
        from{
            opacity: 1;
        }
        to{
            opacity: 0;
        }
    }
</style>
