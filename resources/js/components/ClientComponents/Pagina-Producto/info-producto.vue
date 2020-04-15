<template>
    <div class="info-producto">
        <div class="nombre-producto">
            <h3>{{ producto.nombre }}</h3>
        </div>
        <div class="codigo text-muted">
            <h5>{{ producto.codigo }}</h5>
        </div>
        <div class="precio mt-2 d-inline-flex h4">
            <p class="px-2 text-muted" v-if="!producto.oferta">
                ${{ producto.precio }}
            </p>
            <span v-else>
                <strike class="text-danger pr-2">$223</strike> -
                <p class="px-2 text-muted">${{ producto.precio }}</p>
            </span>
        </div>
        <div class="colores">
            <p class="h4 text-muted">Colores:</p>
            <div class="color-producto d-flex">
                <color-producto
                    v-for="(color, index) in producto.color"
                    :key="index"
                    :id="color.id"
                    :color="color"
                    :index="index"
                    @handlerColor="handlerColor"
                />
            </div>
        </div>
        <div class="cantidad mb-3 row">
            <div class="col-12">
                <p class="h4 text-muted">Cantidad:</p>
            </div>
            <div class="col-12 col-md-12 col-lg-8">
                <div class="input-group w-100">
                    <div class="input-group-append">
                        <button
                            @click="disminuir()"
                            class="minus btn btn-md mx-0"
                            :style="{
                                background: colorButtons,
                                color: textButtons
                            }"
                        >
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>

                    <input
                        class="form-control text-center my-auto mx-0"
                        min="1"
                        name="quantity"
                        v-model="cantidad"
                        type="number"
                        :max="max"
                    />

                    <div class="input-group-append">
                        <button
                            @click="aumentar()"
                            class="plus btn btn-md mx-0"
                            :style="{
                                background: colorButtons,
                                color: textButtons
                            }"
                        >
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="comprar row d-flex">
            <div class="col-12 col-lg-8">
                <button class="btn btn-block" @click="fav">
                    <span class="text-center" v-if="favorito == null">
                        Añadir a favoritos
                        <i class="far fa-heart fa-2x px-2 align-middle"></i>
                    </span>
                    <span class="text-center" v-else-if="favorito != null">
                        Quitar de favoritos
                        <i class="fas fa-heart fa-2x px-2 align-middle fav"></i>
                    </span>
                </button>
            </div>
            <div class="col-12 col-xs-12 col-lg-8 my-1">
                <button
                    @click="addCart"
                    class="btn btn-block"
                    :style="{ background: colorButtons, color: textButtons }"
                >
                    Añadir al carrito
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import auth from "../../../mix/auth";
import cart from "../../../mix/cart";
export default {
    name: "info-producto",
    props: ["producto"],
    mixins: [auth, cart],
    data() {
        return {
            cantidad: 1,
            max: 0,
            imagenes: [],
            colorButtons: "#FF637D",
            textButtons: "white",
            favorito: this.producto.favorito,
            color: 0
        };
    },
    mounted() {},
    methods: {
        aumentar: function() {
            this.cantidad = this.cantidad + 1;
            if (this.cantidad > this.max) {
                this.cantidad = this.cantidad - 1;
            }
        },
        disminuir: function() {
            this.cantidad -= 1;
            if (this.cantidad < 0) {
                this.cantidad = 0;
            }
        },
        handlerColor: function($i) {
            this.max = this.producto.color[$i].stock_color.stock;
            var id = this.producto.color[$i].id;
            this.color = id;

            this.cantidad = 0;
            this.imagenes.splice(0);

            this.producto.imagen_color.forEach((img, index) => {
                if (img.color_id == id) {
                    this.imagenes.push(this.producto.imagen_color[index]);
                }
            });

            this.$emit("imagenColor", this.imagenes);
        },
        fav: function() {
            if (this.user == null) {
                window.location.href = "/acceder";
            } else {
                if (this.favorito == null) {
                    const params = {
                        user: this.user.id,
                        producto: this.producto.id
                    };

                    axios
                        .post("http://127.0.0.1:8000/api/favoritos", params)
                        .then(res => {
                            this.favorito = res.data.favorito;
                            console.log(res.data.favorito);

                            this.$emit("productoFavorito", res.data.favorito);

                            this.producto.favorito;
                            this.favorite = true;

                            return this.producto.favorito;
                        })
                        .catch(err => {
                            console.log(err);
                        });
                } else {
                    var id = this.producto.favorito.id;

                    axios
                        .delete("http://127.0.0.1:8000/api/favoritos/" + id)
                        .then(res => {
                            console.log(res);
                            this.favorito = null;
                            this.$emit("deleteFavorito");
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }
            }
        },
        addCart: function() {
            if (this.cantidad == 0) {
                this.cantidad = 1;
            }
            if (this.user) {
                const param = {
                    user_id: this.user.id,
                    producto_id: this.producto.id,
                    color_id: this.color,
                    cantidad: this.cantidad
                };
                axios
                    .post("http://127.0.0.1:8000/api/carrito", param)
                    .then(res => {
                        this.cart = res.data;
                        console.log(this.cart);

                        this.addItemCart(this.cart.id);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            } else {
                window.location.href = "/acceder";
            }
        }
    }
};
</script>
<style scoped>
.fav {
    color: red;
}
</style>
