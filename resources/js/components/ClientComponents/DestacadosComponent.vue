<template>
    <div class="mt-4">
        <h3 class="p-3 text-center">Destacados</h3>
        <div class="swiper-container swiper-destacados  justify-content-center">
            <div class="swiper-wrapper">
                <div
                    class="swiper-slide"
                    v-for="(producto, index) in destacados"
                    :key="producto.id"
                >
                    <producto
                        :producto="producto"
                        @productoFavorito="favorito(index, ...arguments)"
                        @deleteFavorito="deleteFavorito(index)"
                    />
                </div>
                <!-- Add Pagination -->
            </div>
            <div
                class="pagination-pagination pagination-destacados text-danger text-center"
            ></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "destacados",
    props: ["destacados"],
    data() {
        return {};
    },
    methods: {
        favorito: function($id, $favorito) {
            this.destacados[$id].favorito = $favorito;
        },
        deleteFavorito: function($id) {
            this.destacados[$id].favorito = null;
        }
    }
};
</script>
<style scoped>
/*estilo de swiper.js*/
.swiper-container {
    width: auto;
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
.d-destacados {
    position: relative;
    height: 100%;
}
.Titulo-destacados {
    font-size: 45px;
    text-align: center;
}
</style>
