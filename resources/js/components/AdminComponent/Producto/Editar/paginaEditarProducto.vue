<template>
    <div class="row mt-2">
        <editar-producto :producto="producto" :colores="colores"/>
        <div class="col-12 col-xs-12 col-md-12 col-lg-4">
            <nuevo-color :id_producto="producto.id" />
            <stock-color :id="producto.id" :colores="colores"/>
            <imagen-color :colors="colores"/>
            <generar-cupon-descuento></generar-cupon-descuento>
            <generar-oferta></generar-oferta>
        </div>
    </div>
</template>
<script>
export default {
    name:'pagina-editar-producto',
    props:['producto','colores'],
    data(){
        return{
            colors:[]
        }
    },
    computed:{

    }
}
</script>