<template>
    <div class="row d-flex justify-content-center">
        <producto class="col-sm-6 col-md-4 col-lg-3" 
            v-for="(producto,index) in productos" :key="producto.id"
            :producto="producto"
            :class="col" 
            @productoFavorito="favorito(index,...arguments)"/>
    </div>
</template>
<script>
export default {
    name:'productos',
    props:[],
    data(){
        return{
            col:"col-12",
            productos:[
                {
                    id:1,
                    nombre:"Producto 1",
                    id_categoria:"1",
                    precio:233,
                    favorito:false
                },
                {
                    id:2,
                    nombre:"Producto 2",
                    id_categoria:"1",
                    precio:2343,
                    favorito:false
                },
                {
                    id:3,
                    nombre:"Producto 3",
                    id_categoria:"1",
                    precio:213,
                    favorito:false
                },
                {
                    id:4,
                    nombre:"Producto 4",
                    id_categoria:"1",
                    precio:2323,
                    favorito:false
                },
                {
                    id:5,
                    nombre:"Producto 5",
                    id_categoria:"1",
                    precio:263,
                    favorito:false
                },
                {
                    id:6,
                    nombre:"Producto 6",
                    id_categoria:"1",
                    precio:253,
                    favorito:false
                },
                {
                    id:7,
                    nombre:"Producto 7",
                    id_categoria:"1",
                    precio:223,
                    favorito:false
                },
                {
                    id:8,
                    nombre:"Producto 8",
                    id_categoria:"1",
                    precio:863,
                    favorito:false
                },
                {
                    id:9,
                    nombre:"Producto 9",
                    id_categoria:"1",
                    precio:293,
                    favorito:false
                },
                {
                    id:10,
                    nombre:"Producto 10",
                    id_categoria:"1",
                    precio:313,
                    favorito:false
                },
            ],
        }
    },
    methods:{
        cambiarClase:function(){
            if(window.innerWidth > 375 && window.innerWidth < 575){
                this.col = 'col-6'
            }
            else{
                this.col = 'col-12'
            }
        },
        favorito: function($id,$favorito){
            this.productos[$id].favorito = $favorito      
        }
    },
    created(){
        window.addEventListener('resize',this.cambiarClase)
    }
}
</script>
<style scoped>
</style>

