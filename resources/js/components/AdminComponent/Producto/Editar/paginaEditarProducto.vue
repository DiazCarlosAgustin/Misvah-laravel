<template>
    <div class="row mt-2">
        <editar-producto :producto="producto" 
            :colores="colores" :imagenes="images"/>
        <div class="col-12 col-xs-12 col-md-12 col-lg-4">
            <nuevo-color :id_producto="producto.id" />
            <stock-color :id="producto.id" :colores="colores"/>
            <imagen-color :colors="colores" :id="producto.id" 
                @updateImagen="updateImagen"/>
            <generar-cupon-descuento :id="producto.id"/>
            <generar-oferta :id="producto.id"/>
        </div>
    </div>
</template>
<script>
export default {
    name:'pagina-editar-producto',
    props:['producto','colores'],
    data(){
        return{
            colors:[],
            imagenes: this.producto.imagenes_color
        }
    },
    methods:{
        updateImagen:function(imagen){
            this.imagenes.push(imagen)
        },
        updateProducto:function(producto){
            this.producto = producto
        }
    },
    computed:{
        images(){
            return this.imagenes
        }
    }
}
</script>