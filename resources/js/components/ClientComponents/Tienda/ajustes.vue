<template>
    <div class="container">
        <div class="filtrar row">
            <div class="head p-2 col-12 text-right">
                <p>Filtros </p>
            </div>
            <div class="w-100 my-0 col-12 col-xs-12 col-md-4 p-a">
                <filtro-precio></filtro-precio>
            </div>
            <div class="w-100 my-0 col-12 col-xs-12 col-md-4 p-a">
                <filtro-categoria :categorias="categorias" />
            </div>
            <div class="w-100 my-0 col-12 col-xs-12 col-md-4 p-a">
                <filtro-ordenado></filtro-ordenado>
            </div>
        </div>
        <hr>
    </div>
</template>
<script>
export default {
    props:['categorias']
}
</script>
<style scoped>
    .filtrar{
        padding: 0;
        margin: 0;
    }
</style>
