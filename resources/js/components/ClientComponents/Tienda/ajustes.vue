<template>
    <div class="container">
        <div class="filtrar row">
            <div class="head p-2 col-12 text-right">
                <p @click="handleFiltro">Filtros </p>
            </div>
           <div class="filters row" v-show="active">
                <div class="w-100 my-0 col-12 col-xs-12 col-md-12  col-lg-4 p-a">
                    <filtro-precio></filtro-precio>
                </div>
                <div class="w-100 my-0 col-12 col-xs-12 col-md-6 col-lg-4 p-a">
                    <filtro-categoria :categorias="categorias" />
                </div>
                <div class="w-100 my-0 col-12 col-xs-12 col-md-6 col-lg-4 p-a">
                    <filtro-ordenado></filtro-ordenado>
                </div>
                <button></button>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['categorias'],
    data() {
        return {
            active:false
        }
    },
    methods:{
        handleFiltro:function(){
            this.active = !this.active
            return this.active
        }
    }
}
</script>
<style scoped>
    .filtrar{
        padding: 0;
        margin: 0;
    }
    .head p{
        cursor: pointer;
        animation: 1s ease-in-out;
    }

</style>
