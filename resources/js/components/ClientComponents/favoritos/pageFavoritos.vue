<template>
    <div class="container">
        <div class="row mt-4 d-flex justify-content-center">
            <div class="col-12 mb-4">
                <h3 class="text-center">Mis favoritos</h3>
            </div>
        </div>
        <div class="row mt-4 d-flex justify-content-center">
            <div class="text-center mb-5 col-12" v-if="productos.length == 0">
                <h5>No hay productos en favoritos</h5>
            </div>
            <div class="d-flex row" v-else>
                <div :class="col" class="col-xs-6 col-md-4 col-lg-3" v-for="(producto,index) in productos" :key="producto.id">
                    <producto :producto="producto"
                        @productoFavorito="favorito(index,...arguments)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'page-favoritos',
    data(){
        return{
            col:'col-12',
            productos:[
                {
                    id:1,
                    nombre:"Producto 1",
                    id_categoria:"1",
                    precio:233,
                    favorito:true
                },
                {
                    id:2,
                    nombre:"Producto 2",
                    id_categoria:"2",
                    precio:233,
                    favorito:true
                },
                {
                    id:3,
                    nombre:"Producto 3",
                    id_categoria:"3",
                    precio:233,
                    favorito:true
                },
            ]
        }
    },
    methods: {
        cambiarClase:function(){
            if(window.innerWidth > 375 && window.innerWidth < 575){
                this.col = 'col-6'
            }
            else{
                this.col = 'col-12'
            }
        },
        favorito: function($id,$favorito){
            if (!$favorito) {
                this.productos.splice($id,1)
            }
            else{
                this.productos[$id].favorito = $favorito      
            }
        }
    },
    created(){
        window.addEventListener('resize',this.cambiarClase)
    }
}
</script>