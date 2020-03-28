<template>
    <div class="row mt-2">
        <editar-producto
            :producto="producto"
            :colores="colores"
            :imagenes="images"
        />
        <div class="col-12 col-xs-12 col-md-12 col-lg-4">
            <nuevo-color
                :id_producto="producto.id"
                @newColor="newColor"
            ></nuevo-color>
            <stock-color
                :id="producto.id"
                :colores="colores"
                @newStock="newStock()"
            />
            <imagen-color
                :colors="colores"
                :id="producto.id"
                @updateImagen="updateImagen"
            />
            <generar-cupon-descuento :id="producto.id" />
            <generar-oferta :id="producto.id" />
        </div>
    </div>
</template>
<script>
export default {
    name: "pagina-editar-producto",
    props: ["pro"],
    data() {
        return {
            colores: this.pro[0].color,
            imagenes: this.pro[0].imagen_color,
            producto: this.pro[0]
        };
    },
    methods: {
        updateImagen: function(imagen) {
            this.imagenes.push(imagen);
        },
        updateProducto: function(producto) {
            this.producto = producto;
        },
        newStock: function($i, $color) {
            this.producto.color[$i] = $color;
        },
        newColor: function($color){
            this.colores.push($color)
        }
    },
    computed: {
        images() {
            return this.imagenes;
        }
    }
};
</script>
