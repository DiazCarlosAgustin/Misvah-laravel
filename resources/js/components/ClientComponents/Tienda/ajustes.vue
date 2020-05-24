<template>
    <div class="container">
        <div class="filtrar row">
            <div class="head p-2 col-12 text-right">
                <p @click="handleFiltro">Filtros</p>
            </div>
            <form  @submit.prevent="sendFilters">
                <div class="filters row" v-show="active">
                    <div
                        class="w-100 my-0 col-12 col-xs-12 col-md-12  col-lg-4 p-a"
                    >
                        <filtro-precio :max="maxPrecio" @price="price" />
                    </div>
                    <div
                        class="w-100 my-0 col-12 col-xs-12 col-md-6 col-lg-4 p-a"
                    >
                        <filtro-categoria
                            :categorias="categorias"
                            :id="idCat"
                            @changeCategoria="newCat"
                        />
                    </div>
                    <div
                        class="w-100 my-0 col-12 col-xs-12 col-md-6 col-lg-4 p-a"
                    >
                        <filtro-ordenado @changeOrder="Ordenar" />
                    </div>
                    <hr />
                    <div class="row mt-2 w-100">
                        <div class="col-12 d-flex justify-content-end">
                            <button
                                class="btn btn-light btn-sm"
                                type="submit"
                            >
                                Aplicar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        categorias: {
            type: Array
        },
        productos: {
            type: Array
        }
    },
    mounted() {},
    data() {
        return {
            active: false,
            max: 0,
            min: 0,
            cat: this.productos[0].categoria_id,
            order: 0,
            maxVal: 0
        };
    },
    methods: {
        handleFiltro: function() {
            this.active = !this.active;
            return this.active;
        },
        sendFilters() {
            var arr = {
                max: this.maxVal,
                min: parseInt(this.min),
                cat: this.cat,
                order: this.order
            };
            var url =`http://127.0.0.1:8000/categoria/${arr.cat}`
            if(arr.min > 0 || arr.max > 0 || arr.order > 0){
                url = url + "?"
            }
            if (arr.min > 0) {
                url = url + `min=${arr.min}`
                if(arr.order > 0 || arr.max > 0){
                    url = url + "&"
                }
            }
            if(arr.max > 0){
                url = url + `max=${arr.max}`
                if(arr.order > 0){
                    url = url + "&"
                }
            }
            if(arr.order > 0){
                url = url + `orden=${arr.order}`
            }

            window.location.href = url
        },
        newCat($cat) {
            this.cat = $cat;
        },
        price($min, $max) {
            this.min = parseInt($min);
            this.maxVal = parseInt($max);
        },
        Ordenar($order) {
            this.order = parseInt($order);
        }
    },
    computed: {
        maxPrecio() {
            for (var i = 0; i < this.productos.length; i++) {
                if (this.productos[i].imagen_color.length > 0) {
                    if (this.productos[i].precio > this.max) {
                        this.max = this.productos[i].precio;
                    }
                }
            }
            return this.max;
        },
        idCat() {
            return this.productos[0].categoria_id;
        }
    }
};
</script>
<style scoped>
.filtrar {
    padding: 0;
    margin: 0;
}
.head p {
    cursor: pointer;
    animation: 1s ease-in-out;
}
</style>
