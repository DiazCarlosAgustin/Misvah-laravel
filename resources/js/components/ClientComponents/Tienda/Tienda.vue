<template>
    <div class="col-12">
        <ajustes
            class="my-2"
            :categorias="categorias"
            :productos="productos.data"
        />
        <productos :productos="productos.data" />
    </div>
</template>
<script>
export default {
    props: ["productos", "categorias"],
    data() {
        return {};
    },
    mounted() {
        console.log('====================================');
        console.log(this.categorias);
        console.log('====================================');
    },
    methods: {},
    computed: {}
};
</script>
