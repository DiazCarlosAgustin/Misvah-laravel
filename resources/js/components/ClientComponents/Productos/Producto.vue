<template>
    <div>
        <a href="">
            <div class="card my-3">
                <img src="https:via.placeholder.com/250x250.png" alt="" class="card-img-top">
               <div class="tags text-center d-none">
                    <span class="text-center tag-off">
                        <p>20% OFF</p> 
                    </span>
                    <span class="text-center tag-out">
                        <p>Sin Stock</p> 
                    </span>
               </div>
                <div class="card-body row">
                    <div class="col-12">
                        <div class="row h-100">
                            <div class="col-9">
                                <div class="row">
                                    <p class="col-12 h4 text-muted">${{producto.precio}}</p>
                                    <h6 class="col-12 ">{{producto.nombre}}</h6>
                                </div>
                            </div>
                            <div class="col-3 d-flex p-0">
                                <i class="material-icons fav-xs mt-0 align-middle mx-auto text-dark" 
                                    style="font-size: 2em"
                                    v-show="!producto.favorito"
                                    @click.prevent="favorito()">favorite_border
                                </i>
                                
                                <i class="material-icons fav-xs mt-0 align-middle mx-auto text-danger" 
                                    style="font-size: 2em"
                                    v-show="producto.favorito"
                                    @click.prevent="favorito()">favorite
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
        <div v-if="producto.favorito" class="cont-alert-fav">
            <alert :estado="favorite"
            :tipo="tipo"
            @ocultar="ocultar" />
        </div>
    </div>
</template>
<script scoped>
export default {
    name:'destacado',
    props:['producto'],
    data() {
        return{
            favorite:false,
            tipo:'favorito'
        }
    },
    methods:{
        favorito: function(){
            this.producto.favorito = !this.producto.favorito
            this.favorite = true
            this.$emit('productoFavorito',this.producto.favorito)
        },
        ocultar: function($estado){
            this.favorite = $estado
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
    .card-body{
        position: relative;
    }
    .fav{
        position: absolute;
        top: 0;
     }
    .cont-alert-fav{
        position: absolute;
        top: 40%;
        left:50%;
        transform: translate(-50%,-50%);
    }
    .tags{
        position: absolute;
        top:0;
        width: 100%;
    }
    .tag-off{
        position: absolute;
        background-color: white;
        top:5%;
        left: -2%;
        font: bolder;
        padding: .5em;
        box-shadow:  0 10px 10px rgba(0,0,0,0.1);
        margin: 0;
    }
    .tag-off p, .tag-out p{
        margin: 0;
        padding: 0;
        display: block;
    }
    .tag-out{
        position: absolute;
        background-color: white;
        top:5%;
        right: -2%;
        font: bolder;
        padding: .5em;
        box-shadow:  0 10px 10px rgba(0,0,0,0.1);
        margin: 0;
    }
</style>
