<template>
    <div class="justify-content-center">
        <div class="body" id="filtro-color">
            <form action="">
                <label for="">Precio:</label>
                <div class="form-group d-md-flex">
                    <div class="col-12 col-xs-12 col-md-6 my-3 my-lg-0">
                        <input
                            type="number"
                            id="NumDesde"
                            placeholder="Desde"
                            class="form-control mx-1"
                            value="0"
                            min="0"
                            v-model="min"
                            :max="max"
                            @change="cambio"
                        />
                    </div>
                    <div class="col-12 col-xs-12 col-md-6 my-3 my-lg-0">
                        <input
                            type="number"
                            id="NumHasta"
                            class="form-control mx-1"
                            v-model="maxVal"
                            min="0"
                            :max="max"
                            placeholder="Hasta"
                            @change="cambio"
                        />
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: "FiltroPrecio",
    props: {
        max: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            min: "",
            maxVal: ""
        };
    },
    mounted() {},
    methods: {
        cambio: function() {
            console.log(this.maxVal);
            this.$emit("price", this.min, this.maxVal);
        }
    }
};
</script>
<style scoped>
.filtro {
    width: 100% !important;
    margin: 0;
}

button {
    box-shadow: none !important;
}
.body {
    position: relative;
    overflow: hidden;
    z-index: 100;
}
</style>
