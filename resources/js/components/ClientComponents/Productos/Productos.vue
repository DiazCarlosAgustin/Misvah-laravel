<template>
    <div class="row">
        <producto
            class="col-sm-6 col-md-4 col-lg-3"
            v-for="(producto, index) in listProductos"
            :key="producto.id"
            :producto="producto"
            :class="col"
            @deleteFavorito="deleteFavorito(index)"
            @productoFavorito="favorito(index, ...arguments)"
        />
    </div>
</template>
<script>
export default {
    name: "productos",
    props: ["productos"],
    data() {
        return {
            col: "col-12"
        };
    },
    mounted() {},
    methods: {
        cambiarClase: function() {
            if (window.innerWidth > 375 && window.innerWidth < 575) {
                this.col = "col-6";
            } else {
                this.col = "col-12";
            }
        },
        favorito: function($id, $favorito) {
            this.productos[$id].favorito = $favorito;
        },
        deleteFavorito: function($id) {
            this.productos[$id].favorito = null;
            console.log(this.productos[$id]);
        }
    },
    computed: {
        listProductos: function() {
            return this.productos;
        }
    },
    created() {
        window.addEventListener("resize", this.cambiarClase);
    }
};
</script>
<style scoped></style>
