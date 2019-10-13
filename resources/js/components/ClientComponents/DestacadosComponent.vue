<template>
    <div class="mt-4">
        <h3 class="p-3 text-center">Destacados</h3>
        <div class="swiper-container swiper-destacados  justify-content-center">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(producto,index) in productos" :key="producto.id">
                    <producto :producto="producto"
                        @productoFavorito="favorito(index,...arguments)"
                    />
                </div>
            <!-- Add Pagination -->
            </div>
            <div class="pagination-pagination pagination-destacados text-danger text-center"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'destacados',
    data() {
        return {
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
                    favorito:true
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
            ]
        }
    },
    methods: {
        favorito: function($id,$favorito){
            this.productos[$id].favorito = $favorito      
        }
    },  
}
</script>
<style scoped>
/*estilo de swiper.js*/
    .swiper-container {
        width: auto ;
        height: auto;
    }
    .swiper-slide {
        font-size: 18px;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .d-destacados{
        position: relative;
        height: 100%;
    }
    .Titulo-destacados{
        font-size: 45px;
        text-align: center;
    }
</style>
