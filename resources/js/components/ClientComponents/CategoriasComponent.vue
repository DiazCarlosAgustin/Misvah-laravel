<template>
    <div class="d-categoria mt-4">
        <h3 class="text-center p-3">Categorias</h3>
        <div class="row d-flex justify-content-center">
            <div
                v-for="categoria in categorias"
                :key="categoria.id"
                class="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
            >
                <categoria-component :categoria="categoria" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "categorias",
    props: ["categorias"],
    data() {
        return {};
    },
    beforeMount() {},
    methods: {}
};
</script>
<style scoped>
.d-categoria {
    position: relative;
}
.d-categoria {
    font-family: "Montserrat", sans-serif;
    font-size: 45px;
    letter-spacing: normal;
    text-align: center;
}
</style>
