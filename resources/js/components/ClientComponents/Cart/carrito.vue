<template>
    <div class="cart mt-2">
        <div class="card-body">
            <div class="d-flex text-dark card-title w-100">
                <h4>Mi cart</h4>
                <div class="ml-auto carrito-close">
                    <i class="fas fa-times fa-2" @click="closeCart"></i>
                </div>
            </div>
            <div class="list-group  text-dark list-group-flush">
                <item-carrito
                    class="item-cart"
                    v-for="(producto, index) in cart"
                    :key="producto.id"
                    :producto="producto"
                    @Cantidad="cantidad(index, ...arguments)"
                    @Eliminar="eliminar(producto.id, index)"
                />
            </div>
            <div
                class="d-flex justify-content-center text-center"
                v-if="cart.length <= 0"
            >
                <p>No hay elementos en el cart.</p>
            </div>
        </div>
        <div class="card-fother p-0 mb-0" v-if="cart.length > 0">
            <a href="/cart" class="btn btn-block col">Detalles</a>
            <a
                href=""
                class="btn btn-block col"
                :style="{ backgroundColor: bgColor, color: color }"
                >Comprar</a
            >
        </div>
    </div>
</template>
<script>
import bus from "../../../bus";
export default {
    name: "carrito",
    data() {
        return {
            bgColor: "#e91e63",
            color: "white",
            cart: []
        };
    },
    mounted() {
        this.getCart();
    },
    created() {
        bus.$on("addCart", $cart => {
            this.cart = $cart;
            this.$emit("cartSize", true);
        });
    },
    methods: {
        closeCart(){
            this.$emit('closeCart');
        },
        getCart() {
            axios
                .get("http://127.0.0.1:8000/api/carrito")
                .then(res => {
                    this.cart = res.data;
                    if (this.cart.length > 0) {
                        this.$emit("cartSize", true);
                    } else {
                        this.$emit("cartSize", false);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        cantidad: function($id, $cantidad) {
            this.cart[$id].cantidad = $cantidad;
            this.cart[$id].subtotal =
                this.cart[$id].precio * this.cart[$id].cantidad;
        },
        eliminar: function($id, $i) {
            axios
                .delete("http://127.0.0.1:8000/api/carrito/" + $id)
                .then(res => {
                    this.cart.splice($i, 1);
                    if (this.cart.length > 0) {
                        this.$emit("cartSize", true);
                    } else {
                        this.$emit("cartSize", false);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>
<style scoped>
.cart {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10000;
    background-color: white;
}
.card-body, .card-fother{
    background-color: white;
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

@media (max-width: 991px) {
    .cart {
        background-color: white;
        display: block;
    }
    .carrito-close{
        display: none;
    }
}
@media (min-width: 992px) {
    .cart {
        position: absolute;
        z-index: 100;
        right: 35px;
        min-width: 450px;
        max-width: 500px;
        -webkit-box-shadow: 10px 14px 33px -13px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 10px 14px 33px -13px rgba(0, 0, 0, 0.75);
        box-shadow: 10px 14px 33px -13px rgba(0, 0, 0, 0.75);
    }
    .carrito-close{
        display: block;
    }
}
</style>
