<template>
    <div class="row mt-2">
        <editar-producto :producto="producto"></editar-producto>
        <div class="col-12 col-xs-12 col-md-12 col-lg-4">
            <nuevo-color></nuevo-color>
            <stock-color></stock-color>
            <imagen-color></imagen-color>
            <generar-cupon-descuento></generar-cupon-descuento>
            <generar-oferta></generar-oferta>
        </div>
    </div>
</template>
<script>
export default {
    name:'pagina-editar-producto',
    props:{
        producto:Object
    },
    data(){
        return{

        }
    }
}
</script>