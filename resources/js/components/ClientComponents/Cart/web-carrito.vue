<template>
    <div class="container mt-4">
        <div class="row ">
            <div class="col-12">
                <div class="titulo-carrito text-center">
                    <h3 class="text-center">Mi carrito</h3>
                </div>
            </div>
        </div>
        <div
            class="row d-flex justify-content-center"
            v-if="productos.length <= 0"
        >
            <h4 class="text-center my-5 py-5">
                No hay productos en el carrito.
            </h4>
        </div>
        <div class="row" v-if="productos.length > 0">
            <div class="col-12 table-responsive">
                <table
                    id="dtHorizontalExample"
                    class="table text-center"
                    cellspacing="0"
                    width="100%"
                >
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Color</th>
                            <th scope="col">Precio unitario</th>
                            <th scope="col">Precio Total</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <producto-carrito
                            v-for="(producto, index) in productosList"
                            :key="producto.id"
                            :producto="producto"
                            @subTotal="subTot(index, ...arguments)"
                            @EliminarProducto="Eliminar(index, ...arguments)"
                        />
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <h5 class="total mr-3">
                    Total: <span> ${{ totalCarrito }}</span>
                </h5>
            </div>
        </div>
        <div
            class="row d-flex justify-content-center  mt-2"
            v-if="productos.length > 0"
        >
            <div class="col-10 col-xs-8 col-md-5 my-auto">
                <form action="" @submit.prevent="validCupon">
                    <div class="input-group mt-2 form-group-sm">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Cupon"
                            aria-label="Cupon"
                            aria-describedby="button-addon1"
                            v-model="cupon"
                            name="cupon"
                        />
                        <div class="input-group-prepend">
                            <button
                                class="btn btn-pink m-0 px-3 py-2 z-depth-0 waves-effect"
                                type="submit"
                                id="button-addon1"
                            >
                                Cajear
                            </button>
                        </div>
                    </div>
                </form>
                <p
                    v-if="error"
                    class="alert alert-danger m-2 lert-dismissible fade show"
                    role="alert"
                >
                    {{ error }}
                </p>
            </div>
            <div class="col-12 col-xs-12 col-md-6 text-center align-middle">
                <button class="btn btn-pink">Continuar con la compra</button>
            </div>
        </div>
    </div>
</template>
<script>
//TODO: see how do with to produce if has offer, control a price
import bus from "../../../bus";
export default {
    name: "web-carrito",
    props: {
        productos: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            total: 0,
            cupon: "",
            monto: 0,
            error: "",
            products: this.productos
        };
    },
    created() {
        bus.$on("cart", $cart => {
            this.products = $cart;
        });
    },
    methods: {
        Eliminar: function(i, $id) {
            // elimina un producto del array
            axios
                .delete("http://127.0.0.1:8000/api/carrito/" + $id)
                .then(res => {
                    this.products.splice(i, 1);
                    bus.$emit('deleteItem',this.products)
                })
                .catch(err => {
                    console.log(err);
                });
        },
        sumarTotal() {
            this.total = 0;
            this.products.forEach(p => {
                this.total = this.total + p.cantidad * p.producto.precio;
            });
        },
        subTot($i, $cant) {
            var id = this.products[$i].id;
            axios
                .put("http://127.0.0.1:8000/api/carrito/" + id, {
                    cantidad: $cant
                })
                .then(res => {
                    if (res.data == 200) {
                        this.products[$i].producto.cantidad = $cant;
                        this.sumarTotal();
                        bus.$emit("elementCartCant", $cant, $i);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        validCupon() {
            const param = {
                cupon: this.cupon
            };
            axios
                .post("http://127.0.0.1:8000/api/cupones", param)
                .then(res => {
                    this.error = "";

                    if (res.data.respuesta == "OK") {
                        this.monto = res.data.cupon.monto;
                    } else if (res.data.respuesta == "FALSE") {
                        this.error = "No se encontro el cupon.";
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    computed: {
        totalCarrito() {
            // recorre el array de productos en el carrito para sacar el total
            this.total = 0;
            this.products.forEach(p => {
                this.total = this.total + p.cantidad * p.producto.precio;
            });
            return this.total - this.monto;
        },
        productosList() {
            return this.products;
        }
    },
    watch: {
        totalCarrito($new) {},
        productosList($new) {
            this.products = $new;
        }
    }
};
</script>
<style scoped>
.total {
    width: 100%;
    text-align: right;
}
</style>
