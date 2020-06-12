<template>
    <tr class=" align-middle border-bottom">
        <td class="align-middle">
            <img
                :src="
                    `http://127.0.0.1:8000/img/productos/${producto.color.imagenes.imagen_color_producto}`
                "
                width="50"
                height="50"
                alt=""
            />
        </td>
        <td class="align-middle">
            <h6>{{ producto.producto.nombre }}</h6>
        </td>
        <td class="align-middle ">
            <form action="">
                <el-input-number
                    v-model.number="producto.cantidad"
                    @change="SubT()"
                    :min="1"
                    :size="'small'"
                ></el-input-number>
            </form>
        </td>
        <td class="align-middle">
            <img
                :src="
                    `http://127.0.0.1:8000/img/colores/${producto.color.imagen_color}`
                "
                alt=""
                width="45"
                height="45"
            />
        </td>
        <td class="align-middle">
            <h6>${{ producto.producto.precio }}</h6>
        </td>
        <td class="align-middle">
            <h6>${{ subtotal }}</h6>
        </td>
        <td class="align-middle">
            <i class="fas fa-trash" @click="EliminarProducto()"></i>
        </td>
    </tr>
</template>
<script>

export default {
    name: "producto-carrito",
    props: ["producto"],
    data() {
        return {
            sub: 0
        };
    },
    methods: {
        SubT: function() {
            // emite la funcion SubTotal para modificar el SubTotal en el componente padre
            this.sub =
                this.producto.producto.precio * this.producto.cantidad;
            this.$emit("subTotal", this.producto.cantidad);
        },
        EliminarProducto: function() {
            this.$emit("EliminarProducto", this.producto.id);
        }
    },
    computed: {
        subtotal() {
            this.sub = this.producto.producto.precio * this.producto.cantidad;
            return this.sub
        }
    },
    watch: {
        subtotal: function($new,$old) {
            this.sub = $new;
        }
    }
};
</script>
<style scoped>
.fa-trash {
    font-size: 1.2em;
}
.colores div {
    display: inline-block;
}
.colores input[type="radio"] {
    display: none;
}

.colores input[type="radio"] + label span {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin: -1px 4px 0 0;
    vertical-align: middle;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
}
span .fa-check {
    color: transparent;
    margin-top: 10px;
}
.colores input[type="radio"]:checked + label span {
    opacity: 0.3;
}
.colores input[type="radio"]:checked + label span .fa-check {
    color: white;
}
</style>
