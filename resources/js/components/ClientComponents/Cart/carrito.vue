<template>
    <div class="cart mt-2">
        <div class="card">
            <div class="card-body">
                <div class="d-flex text-dark card-title w-100">
                    <h4>Mi cart</h4>
                    <div class="ml-auto">
                        <i class="fas fa-times fa-2"></i>
                    </div>
                </div>
                <div class="list-group  text-dark list-group-flush">
                    <item-carrito
                        class="item-cart"
                        v-for="(producto, index) in itemCart"
                        :key="producto.id"
                        :producto="producto"
                        @Cantidad="cantidad(index, ...arguments)"
                        @Eliminar="eliminar(index)"
                    />
                </div>
                <div
                    class="d-flex justify-content-center text-center"
                    v-if="itemCart.length <= 0"
                >
                    <p>No hay elementos en el carrito.</p>
                </div>
            </div>
            <div class="card-fother p-0 mb-0" v-if="itemCart.length > 0">
                <a href="/cart" class="btn btn-block col">Detalles</a>
                <a
                    href=""
                    class="btn btn-block col"
                    :style="{ backgroundColor: bgColor, color: color }"
                    >Comprar</a
                >
            </div>
        </div>
    </div>
</template>
<script>
import cart from "../../../mix/cart";
export default {
    name: "carrito",
    mixins: [cart],
    data() {
        return {
            bgColor: "#e91e63",
            color: "white"
        };
    },
    mounted() {},
    methods: {
        cantidad: function($id, $cantidad) {
            this.itemCart[$id].cantidad = $cantidad;
            this.itemCart[$id].subtotal =
                this.itemCart[$id].precio * this.itemCart[$id].cantidad;
        },
        eliminar: function($id) {
            this.itemCart.splice($id, 1);
        }
    }
};
$(document).ready(function() {
    $(".fa-times").click(function() {
        $(".cart").toggleClass("cart-active");
    });
});
</script>
<style scoped>
.cart {
    position: absolute;
    min-width: 450px;
    max-width: 500px;
    width: 100%;
    right: 100%;
    z-index: 10000;
    display: none;
}
.cart-active {
    position: absolute;
    right: 0;
    transition: ease-in-out 1.5s;
    transition-duration: 1s;
    margin-right: 30px;
    display: block;
}
.item-cart {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.list-group {
    overflow: auto;
    min-width: 45px;
    max-height: 300px;
    width: 100%;
}
.list-group::-webkit-scrollbar {
    width: 8px; /* Tamaño del scroll en vertical */
    height: 8px; /* Tamaño del scroll en horizontal */
}
.list-group::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
}
.list-group::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}
.list-group::-webkit-scrollbar-track:hover,
.list-group::-webkit-scrollbar-track:active {
    background: #d4d4d4;
}
</style>
