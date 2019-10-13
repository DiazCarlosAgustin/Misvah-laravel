<template>
    <div>
        <a href="">
            <div class="card my-3">
                <img src="https:via.placeholder.com/250x250.png" alt="" class="card-img-top">
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
    </div>
</template>
<script scoped>
export default {
    name:'destacado',
    props:['producto'],
    data() {
        return{
        }
    },
     methods:{
         favorito: function(){
             this.producto.favorito = !this.producto.favorito
             this.$emit('productoFavorito',this.producto.favorito)
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
</style>
