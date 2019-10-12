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
                                <i class="material-icons fav-xs mt-0 align-middle mx-auto" style="font-size: 2em" :class="[color]" @click.prevent="favorito()">{{icono}}</i>
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
            estado: false,
            tipo:'favorito',
            color: 'text-dark',
            icono: 'favorite_border',
            nombre:''
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
    .card-body{
        position: relative;
    }
    .fav{
        position: absolute;
        top: 0;
     }
</style>
