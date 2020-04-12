<template>
    <div class="container">
        <div class="row text-center">
            <div class="col-12 text-center">
                <div class="text-center my-4">
                    <h2>Producto</h2>
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center h-auto w-auto">
            <div class="col-12 col-md-7 ">
                <carousel
                    :perPage="1"
                    :navigationEnabled="true"
                    class="w-100 h-90"
                >
                    <slide
                        v-for="(imagen, index) in imagenes"
                        :key="index"
                        class="mx-auto h-auto my-auto"
                        :scrollPerPage="true"
                    >
                        <img
                            class="img mx-auto my-auto"
                            :src="
                                `../../../img/productos/${imagen.imagen_color_producto}`
                            "
                            :alt="'foto'"
                        />
                    </slide>
                </carousel>
            </div>

            <div class="col-12 col-md-5 col-lg-5">
                <info-producto
                    :producto="producto"
                    @imagenColor="imagenColor"
                    @productoFavorito="prodFavorito"
                    @deleteFavorito="deleteFavorito"
                />
            </div>
        </div>
        <div class="row mt-3 d-flex justify-content-center">
            <informacion-producto :info="producto.infomacion" />
        </div>
        <!-- <div class="row mt-5 mx-auto">
            <productos-relacionados></productos-relacionados>
        </div> -->
    </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
export default {
    props: ["producto"],
    data() {
        return {
            imagens: []
        };
    },
    mounted() {console.log(this.producto);
    },
    components: {
        Carousel,
        Slide
    },
    methods: {
        imagenColor: function($imagenes) {
            this.imagens = $imagenes;
            return this.imagens;
        },
        prodFavorito:function($favorito){
            console.log($favorito);
            
            this.producto.favorito = $favorito
        },
        deleteFavorito: function(){
            this.producto.favorito = null
        }
    },
    computed: {
        imagenes: function() {
            return this.imagens;
        }
    }
};
</script>
<style scoped>
.img {
    max-height: 80vh;
    display: block;
    height: auto;
    max-width: 100%;
    width: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
carousel .VueCarousel-dot-container {
    margin-top: -20px !important;
    padding-top: -20px !important;
}
carousel .VueCarousel-dot {
    margin-top: 0px !important;
    padding-top: 0px !important;
}
</style>
