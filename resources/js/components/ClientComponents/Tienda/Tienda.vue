<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-12">
                <ajustes class="my-2" :categorias="categorias.data" />
            </div>
        </div>
        <div>
            <productos :productos="productos.data" />
        </div>
    </div>
</template>
<script>
export default {
    props: ["productos", "categorias"],
    data() {
        return {};
    },
    mounted() {},
    methods: {},
    computed: {}
};
</script>
