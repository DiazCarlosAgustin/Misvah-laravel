<template>
    <div class="col-12">
        <ajustes class="my-2" :categorias="categorias.data" />
        <productos :productos="productos.data" />
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
