<template>
    <div class="justify-content-center">
        <div class="body" id="filtro-color">
            <form action="">
                <label for="">Precio:</label>
                <div class="form-group d-md-flex">
                    <div class="col-12 col-xs-12 col-md-6 my-3 my-lg-0">
                        <input type="number" id="NumDesde" class="form-control mx-1" value="0" v-model="minHasta" @change="cambio">
                    </div>
                    <div class="col-12 col-xs-12 col-md-6 my-3 my-lg-0">
                        <input type="number" id="NumHasta" class="form-control mx-1" value="5000" min="0" max="5000">
                    </div>
                </div>
            </form>
        </div>
    </div> 
</template>
<script>
import { log } from 'util';
    export default {
        name:'FiltroPrecio',
        data: ()=>({
            minHasta: 0,
            maxDesde: 0
        }),
        methods: {
            cambio:function(){
               var Hasta = document.getElementById("NumHasta")
               Hasta.setAttribute("min",this.minHasta)
                
            }
        }
    }
</script>
<style scoped>
    .filtro{
        width: 100% !important;
        margin:0;
    }

    button{
        box-shadow: none !important;
    }
    .body{
        position: relative;;
        overflow: hidden;
        z-index: 100;
    }
</style>
