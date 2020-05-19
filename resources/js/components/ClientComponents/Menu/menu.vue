<template>
    <nav
        class="navbar navbar-expand-lg  sticky-top bg-navbar"
        :style="{ backgroundColor: background, color: color }"
        id="menu"
    >
        <div class="d-flex d-lg-none w-100">
            <a
                href="/"
                class="navbar-brand d-xs-flex d-lg-none navbar-brand-xs borde nav-item"
                :style="{ color: color }"
                >MISVHA</a
            >
            <!-- {{-- menu xs que se vera solo en tablets o celulares--}} -->
            <div class=" d-xs-flex d-lg-none ml-auto">
                <i
                    class="material-icons"
                    id="i-xs-buscar"
                    :style="{ color: color }"
                    >search</i
                >
                <a @click="actionCart">
                    <span class="s-carrito bg-danger ml-4" v-show="cart"></span>
                    <i
                        class="material-icons"
                        id="i-xs-carrito"
                        :style="{ color: color }"
                        >shopping_cart</i
                    >
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    @click="showMenu"
                    :style="{ color: color }"
                >
                    <span class="align-middle">
                        <i class="fas fa-bars fa-1x"></i>
                    </span>
                </button>
            </div>
        </div>
        <div class="navbar-collapse collapse " id="navbarMenu">
            <div class="navbar-nav mr-auto text-center">
                <a href="/" class="nav-item nav-link" :style="{ color: color }"
                    >INICIO</a
                >
                <a
                    class="nav-item nav-link"
                    id="display-categorias"
                    @click="showCategoria"
                    :style="{ color: color }"
                >
                    CATEGORIAS
                </a>
                <a
                    href="/contacto"
                    class="nav-item nav-link"
                    :style="{ color: color }"
                    >CONTACTO</a
                >
                <div v-if="!logeado">
                    <a
                        href="/acceder"
                        class="nav-item  nav-link xs-link d-xs-block d-lg-none"
                        :style="{ color: color }"
                        >ACCEDER</a
                    >
                </div>
                <div v-if="logeado">
                    <a
                        class=" nav-item  nav-link xs-link text-uppercase d-xs-block d-lg-none"
                        @click="clickUserXs"
                        :style="{ color: color }"
                    >
                        {{ user.name }}
                    </a>
                    <div
                        class="drop d-lg-none d-none nav-item"
                        :style="{ backgroundColor: background }"
                    >
                        <div
                            class="volver text-left"
                            @click="clickUserXs"
                            :style="{ color: color }"
                        >
                            <span class="my-auto w-100 ml-3">
                                <i class="fas fa-arrow-left"></i>
                                Volver
                            </span>
                        </div>
                        <a class="nav-item nav-link" :style="{ color: color }"
                            >Mi Perfil</a
                        >
                        <a
                            class="nav-item nav-link"
                            href="/favoritos"
                            :style="{ color: color }"
                            >Mis Favoritos</a
                        >
                        <a class="nav-item nav-link" :style="{ color: color }"
                            >Mis compras</a
                        >
                        <div class="dropdown-divider"></div>
                        <a class="nav-link" @click="cerrarSesion"
                            >Cerrar sesion</a
                        >
                    </div>
                </div>
            </div>
            <div class="navbar-nav mx-auto text-center d-lg-flex d-none">
                <a
                    href="/"
                    class="navbar-brand mx-auto my-auto"
                    :style="{ color: color }"
                    >MISVAH</a
                >
            </div>
            <div class="nav navbar-nav ml-auto d-lg-flex d-none mt-1">
                <i
                    class="material-icons nav-item nav-link xs-link "
                    id="i-buscar"
                    :style="{ color: color }"
                    >search</i
                >

                <div class="nav-item">
                    <div>
                        <span
                            class="s-carrito bg-danger ml-4 mt-1"
                            v-show="cart"
                        ></span>
                        <i
                            class="material-icons nav-item nav-link "
                            id="i-lg-carrito"
                            :style="{ color: color }"
                            @click="actionCart"
                        >
                            shopping_cart
                        </i>
                    </div>
                    <carrito class="carrito d-none" @cartSize="cartSize" @closeCart="actionCart"/>
                </div>
                <div v-if="!logeado">
                    <a
                        href="/acceder"
                        class="nav-item nav-link xs-link "
                        :style="{ color: color }"
                        >ACCEDER</a
                    >
                </div>
                <div v-if="logeado">
                    <div class="dropdown">
                        <a
                            class="dropdown-toggle nav-item nav-link xs-link text-uppercase a-user"
                            type="button"
                            id="dropdownMenu2"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            {{ user.name }}
                        </a>
                        <div
                            class="dropdown-menu dropdown-menu-right"
                            aria-labelledby="dropdownMenu2"
                        >
                            <button class="dropdown-item" type="button">
                                Mi Perfil
                            </button>
                            <button class="dropdown-item" type="button">
                                Mis Favoritos
                            </button>
                            <button class="dropdown-item" type="button">
                                Mis compras
                            </button>
                            <div class="dropdown-divider"></div>
                            <button
                                class="dropdown-item"
                                type="button"
                                @click="cerrarSesion"
                            >
                                Cerrar sesion
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-buscar">
            <form action="">
                <div class="input-group w-100 mt-2">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Buscar"
                        aria-label="Buscar"
                        aria-describedby="basic-addon1"
                    />
                    <div class="input-group-prepend">
                        <button class="input-group-text" id="basic-addon1">
                            <i class="material-icons">search</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <div class="menu-categoria d-none" @mouseleave="hideMenu">
            <div class="categorias">
                <div class="volverMenu d-none" @click="showCategoria">
                    <span class="my-auto w-100 ml-3">
                        <i class="fas fa-arrow-left"></i>
                        Volver
                    </span>
                </div>
                <menu-categoria
                    v-for="categoria in categorias"
                    :key="categoria.id"
                    :categoria="categoria"
                    @click="showProductos"
                    @categoriaSelect="categoriaSelect"
                />
            </div>
            <div class="productos d-none">
                <div class="volverProducto d-none">
                    <span class="my-auto w-100 ml-3" @click="showProductos">
                        <i class="fas fa-arrow-left"></i>
                        Volver
                    </span>
                </div>
                <div v-if="productos.length > 0">
                    <menu-item-categoria
                        v-for="producto in productos"
                        :key="producto.id"
                        :producto="producto"
                        class="text-center"
                    />
                </div>
                <div v-else class="text-center d-none">
                    <p>No se encontraron productos</p>
                </div>
            </div>
        </div>
        <div class="carrito-xs d-none" id="carrito-xs">
            <carrito @cartSize="cartSize" />
        </div>
    </nav>
</template>
<script>
import auth from "../../../mix/auth";
import Vue from "vue";
export default {
    props: [],
    name: "navbar",
    mixins: [auth],
    data() {
        return {
            color: "#000",
            background: "#FFF",
            idCategoriaHover: 0,
            categorias: [],
            productos: [],
            sizeCart: 0,
            cart: false
        };
    },
    created() {},
    mounted() {
        this.traerCategorias();
        this.getMenu();
    },
    methods: {
        actionCart() {
            if(window.innerWidth < 991){ 
                if ($("#carrito-xs").hasClass("d-none")) {
                    $("#carrito-xs").addClass("d-block");
                    $("#carrito-xs").removeClass("d-none");
                    $("#i-xs-carrito").text("clear");
                    $(".s-carrito").addClass("d-none");
                } else {
                    $("#carrito-xs").addClass("d-none");
                    $("#carrito-xs").removeClass("d-block");
                    $("#i-xs-carrito").text("shopping_cart");
                    $(".s-carrito").removeClass("d-none");
                }
            }
            else{
                console.log("golas");
                
                $(".carrito").toggleClass("d-none")
            }
        },
        categoriaSelect: function($categoria) {
            this.productos = $categoria.producto;
            this.showProductos();
        },
        cartSize($estado) {
            this.cart = $estado;
        },
        cerrarSesion: function() {
            axios
                .post("http://127.0.0.1:8000/auth/logout")
                .then(res => {
                    window.location.href = "/";
                })
                .catch(err => {
                    console.log(err);
                });
        },
        clickUserXs() {
            $(".drop").toggleClass("d-none");
        },
        getMenu() {
            axios
                .get("http://127.0.0.1:8000/api/menuCliente")
                .then(res => {
                    this.color = res.data.color_letra;
                    this.background = res.data.color;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        hideMenu() {
            $(".productos").removeClass("d-grid");
            $(".productos").addClass("d-none");
            $(".menu-categoria").removeClass("d-grid");
            $(".menu-categoria").addClass("d-none");
        },
        showCategoria() {
            if (window.innerWidth < 991) {
                $(".menu-categoria").toggleClass("d-none");
                $(".volverMenu").toggleClass("d-none");
            } else {
                $(".menu-categoria").addClass("d-grid");
                $(".menu-categoria").removeClass("d-none");
            }
        },
        showMenu() {
            $("#navbarMenu").toggleClass("show");
        },
        showProductos() {
            if (window.innerWidth < 991) {
                $(".volverProducto").toggleClass("d-none");
                $(".productos").toggleClass("d-none");
                $(".categorias").toggleClass("d-none");
            } else {
                $(".productos").addClass("d-grid");
                $(".productos").removeClass("d-none");
            }
        },
        traerCategorias: function() {
            axios
                .get("http://127.0.0.1:8000/api/categoria")
                .then(res => {
                    this.categorias = res.data;
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    created() {
        // window.addEventListener("resize", this.hoverMenu);
        // this.hoverMenu();
    },
    destroyed() {
        // window.addEventListener("resize", this.hoverMenu);
    },
    computed: {}
};
</script>
<style scoped>
nav {
    z-index: 1000;
}
.categorias {
    height: auto;
    overflow: auto;
    top: 0;
}
.categorias::-webkit-scrollbar {
    width: 8px; /* Tamaño del scroll en vertical */
    height: 8px; /* Tamaño del scroll en horizontal */
}
.categorias::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
}
.categorias::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}
.categorias::-webkit-scrollbar-track:hover,
.categorias::-webkit-scrollbar-track:active {
    background: #d4d4d4;
}
.drop {
    width: 100%;
    height: 100vh !important;
    left: 0;
    position: absolute;
    top: 60px;
    color: inherit;
    display: block;
}
.s-carrito {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    position: absolute;
}
/*pointer en los ico*/
.navbar #navbarMenu i {
    cursor: pointer;
}
/*hover de los nav-link*/
.navbar #navbarMenu .nav-link:hover,
.navbar #navbarMenu .navbar-brand:hover {
    color: black !important;
    transition-delay: 0.2s;
}
/*estilo del navbar brand logo*/
#navbarMenu .navbar-brand {
    font-family: Impact, Charcoal, sans-serif !important;
    padding-left: 7px;
    padding-right: 7px;
    letter-spacing: 2px;
    margin-left: -50px !important;
    border: 2px solid inherit;
}
.navbar-brand-xs {
    font-family: Impact, Charcoal, sans-serif !important;
    padding-left: 7px;
    padding-right: 7px;
    letter-spacing: 2px;
    border: 2px solid inherit;
}
/* items del menu xs */
#i-xs-buscar,
#i-xs-carrito {
    position: relative;
    top: 7px;
    padding: 0px 7px;
    cursor: pointer;
}
.d-buscar {
    position: absolute;
    width: 100%;
    background-color: white;
    padding: 0 10px;
    height: 55px;
    left: 0;
    top: 0;
    display: none;
}
.d-buscar-active {
    display: block;
    top: 55px;
    transition: 1.5s;
    transition-duration: 1s;
}
.a-user {
    overflow: hidden;
    width: 100%;
    max-width: 10ch;
    text-align: center;
}

/* menu categoria xs */
@media (max-width: 991px) {
    .menu-categoria {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 55px;
        left: 0;
        grid-template-rows: 10vh 100%;
        grid-template-columns: 1vw;
        background-color: inherit;
        color: inherit;
    }
    .carrito-xs {
        height: 100vh;
        width: 100%;
        position: absolute;
        top: 55.5px;
        left: 0;
        background-color: inherit;
        color: inherit;
    }
    .volverMenu,
    .volverProducto {
        grid-row: 1/2;
        grid-column: 1;
        padding: 5px 0;
    }
    .categorias {
        grid-row: 2/2;
        grid-column: 1;
    }
    menu-item-categoria {
        width: 100%;
    }
}
/* menu categoria lg*/
@media (min-width: 992px) {
    .menu-categoria {
        width: 70%;
        display: grid;
        grid-template-columns: 40% 60%;
        grid-template-rows: 1fr;
        position: absolute;
        background-color: inherit;
        height: 50vh;
        top: 65px;
    }
    .categorias {
        min-width: calc(70% - 40%);
        grid-column: 1/2;
        grid-row: 1;
    }
    .productos {
        grid-column: 2/3;
        grid-row: 1;
    }
}
</style>
