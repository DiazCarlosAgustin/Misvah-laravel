<template>
    <div>
        <a :href="`/producto/${producto.id}`">
            <div class="card my-3">
                <img
                    :src="
                        `../../../img/productos/${producto.imagen_color[0].imagen_color_producto}`
                    "
                    alt=""
                    class="card-img-top"
                />
                <div class="tags text-center d-none">
                    <span class="text-center tag-off">
                        <p>20% OFF</p>
                    </span>
                    <span class="text-center tag-out">
                        <p>Sin Stock</p>
                    </span>
                </div>
                <div class="card-body row">
                    <div class="col-12">
                        <div class="row h-100">
                            <div class="col-9">
                                <div class="row">
                                    <p class="col-12 h4 text-muted">
                                        ${{ producto.precio }}
                                    </p>
                                    <h6 class="col-12 ">
                                        {{ producto.nombre }}
                                    </h6>
                                </div>
                            </div>
                            <div class="col-3 d-flex p-0">
                                <i
                                    class="material-icons fav-xs mt-0 align-middle mx-auto text-dark"
                                    style="font-size: 2em"
                                    v-if="favorito == null"
                                    @click.prevent="fav()"
                                    >favorite_border
                                </i>

                                <i
                                    class="material-icons fav-xs mt-0 align-middle mx-auto text-danger"
                                    style="font-size: 2em"
                                    v-show="favorito"
                                    @click.prevent="fav()"
                                    >favorite
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
        <div v-if="favorite" class="cont-alert-fav">
            <alert :estado="favorite" :tipo="tipo" @ocultar="ocultar()" />
        </div>
    </div>
</template>
<script scoped>
import auth from "../../../mix/auth";
export default {
    name: "producto",
    props: ["producto"],
    mixins: [auth],
    data() {
        return {
            favorite: false,
            tipo: "favorito",
            favorito: this.producto.favorito
        };
    },
    mounted() {},
    methods: {
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
                    console.log(id);

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
        ocultar: function($estado) {
            this.favorite = $estado;
        }
    }
};
</script>
<style scoped>
/* style v.2 */
a {
    text-decoration: none;
    color: black;
}
.card-body {
    position: relative;
}
.fav {
    position: absolute;
    top: 0;
}
.cont-alert-fav {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.tags {
    position: absolute;
    top: 0;
    width: 100%;
}
.tag-off {
    position: absolute;
    background-color: white;
    top: 5%;
    left: -2%;
    font: bolder;
    padding: 0.5em;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    margin: 0;
}
.tag-off p,
.tag-out p {
    margin: 0;
    padding: 0;
    display: block;
}
.tag-out {
    position: absolute;
    background-color: white;
    top: 5%;
    right: -2%;
    font: bolder;
    padding: 0.5em;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    margin: 0;
}
</style>
