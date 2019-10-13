<template>
    <nav class="navbar navbar-expand-lg navbar-light sticky-top bg-navbar" id="menu">
        <div class="d-flex d-lg-none w-100">
            <a href="/" class="navbar-brand d-xs-flex d-lg-none navbar-brand-xs borde nav-item">MISVHA</a>
            <!-- {{-- menu xs que se vera solo en tablets o celulares--}} -->
            <div class=" d-xs-flex d-lg-none ml-auto" >
                <i class="material-icons" id="i-xs-buscar">search</i>
                <a href="/carrito">
                    <span class="s-carrito bg-danger"></span>
                    <i class="material-icons" id="i-xs-carrito">shopping_cart</i>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu"
                    aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation" @click="tapVolverMenu">
                    <span class="dark-blue-text">
                        <i class="fas fa-bars fa-1x"></i>
                    </span> 
                </button>
            </div>
        </div>
        <div class="navbar-collapse collapse " id="navbarMenu">
            <div class="navbar-nav mr-auto text-center">
                <a href="/" class="nav-item nav-link">INICIO</a>
                <a class="nav-item nav-link" id="display-categorias" 
                     @click.native="clickMouse" @click="clickMouse">
                    CATEGORIAS
                </a>
                <a href="/contacto" class="nav-item nav-link">CONTACTO</a>
                <a href="/acceder" class="nav-item  nav-link xs-link d-xs-block d-lg-none">ACCEDER</a>
            </div>
            <div class="navbar-nav mx-auto text-center d-lg-flex d-none">
                <a href="/" class="navbar-brand mx-auto my-auto">MISVAH</a>
            </div>
            <div class="nav navbar-nav ml-auto d-lg-flex d-none ">
                <i class="material-icons nav-item nav-link xs-link " id="i-buscar">search</i>

                <div class="nav-item">
                    <div>
                        <span class="s-carrito bg-danger ml-4 mt-1"></span>
                        <i class="material-icons nav-item nav-link " id="i-lg-carrito">shopping_cart</i>
                    </div>
                    <carrito></carrito>
                </div>
                <a href="/acceder" class="nav-item nav-link xs-link ">ACCEDER</a>
            </div>
        </div>
        <div class="d-buscar">
            <form action="">
                <div class="input-group w-100 mt-2">
                    <input type="text" class="form-control" placeholder="Buscar" aria-label="Buscar" aria-describedby="basic-addon1">
                    <div class="input-group-prepend">
                        <button class="input-group-text" id="basic-addon1">
                            <i class="material-icons">search</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <div v-if="pantalla > 991" :class="claseMenu" class="menu-categoria-lg" @mouseleave="hoverMouse">
            <div class="categorias">
                <menu-categoria v-for="categoria in categorias" 
                :key="categoria.id" :categoria="categoria" 
                @categoriaHover="CategoriaHover"
                @click.native="tapCategoria"/>
            </div>
            <div class="productos">
                <menu-item-categoria v-for="producto in productosCategoria" 
                    :key="producto.id"
                    :producto="producto"
                    class="text-center" :class="claseProducto"/>
            </div>
        </div>
        <div v-else :class="claseMenuXs" class="menu-categoria-xs" @mouseleave="hoverMouse">
            <div class="categorias" :class="classCat">
                <div class="volver" :class="claseVolver" @click="tapVolverMenu">
                    <span class="my-auto w-100 ml-3">
                        <i class="fas fa-arrow-left"></i>
                        Volver
                    </span>
                </div>
                <menu-categoria v-for="categoria in categorias" 
                :key="categoria.id" :categoria="categoria" 
                @categoriaHover="CategoriaHover"
                @click.native="tapCategoria"/>
            </div>
            <div class="productos">
                <div class="volverProducto" :class="claseVolverProducto">
                    <span class="my-auto w-100 ml-3" @click="tapVolverCategoria">
                        <i class="fas fa-arrow-left"></i>
                        Volver
                    </span>
                </div>
                <div v-if="productosCategoria.length > 0">
                    <menu-item-categoria v-for="producto in productosCategoria" 
                        :key="producto.id"
                        :producto="producto"
                        class="text-center" :class="claseProducto"
                    />
                </div>
                <div v-else class="text-center" :class="claseProducto">
                    <p>No se encontraron productos</p>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import { log } from 'util'
export default {
    props:[],
    data(){
        return{
            idCategoriaHover:0,
            pantalla: 0,
            hover: false,
           	claseMenu:'d-none',
           	claseMenuXs:'d-none',
           	claseProducto: 'd-none',
            classCat:'d-grid',
            claseVolver: 'd-grid',
            claseVolverProducto: 'd-none',
            categorias:[
                {
                    id: 1,
                    nombre:'categoria 1'
                },
                {
                    id: 2,
                    nombre:'categoria 2'
                },
                {
                    id: 3,
                    nombre:'categoria 3'
                },
                {
                    id: 4,
                    nombre:'categoria 4'
                },
                {
                    id: 5,
                    nombre:'categoria 5'
                },
                {
                    id: 6,
                    nombre:'categoria 6'
                },
            ],
            productos:[
                {
                    id:1,
                    id_categoria:1,
                    nombre:'producto 1'
                },
                {
                    id:2,
                    w:1,
                    nombre:'producto 2'
                },
                {
                    id:3,
                    id_categoria:1,
                    nombre:'producto 3'
                },
                {
                    id:4,
                    id_categoria:2,
                    nombre:'producto 4'
                },
                {
                    id:5,
                    id_categoria:2,
                    nombre:'producto 5'
                },
                {
                    id:6,
                    id_categoria:2,
                    nombre:'producto 6'
                },
                {
                    id:7,
                    id_categoria:3,
                    nombre:'producto 7'
                },
                {
                    id:8,
                    id_categoria:3,
                    nombre:'producto 8'
                },
                {
                    id:9,
                    id_categoria:4,
                    nombre:'producto 9'
                },
            ]
        }
    },
    methods:{
        hoverMouse: function(){
            this.hover = !this.hover
            this.pantalla = window.innerWidth
            this.claseProducto = 'd-none'
            this.hoverMenu();
        },
        hoverMenu: function(){
            if(window.innerWidth > 991){
                if(this.hover){
                    this.claseMenu = 'd-grid' 
                    this.claseProducto = 'd-grid'
                }
                else{
                    this.claseMenu = 'd-none' 
                    this.claseProducto = 'd-none'
                }
            }
        },
        clickMouse:function(){
            if(window.innerWidth <= 991){
                this.claseMenuXs = 'd-grid'
            }
            else{
                this.claseMenu ="d-grid"
                this.hover = !this.hover
                this.pantalla = window.innerWidth
            }
        },
        CategoriaHover: function(id){
            this.idCategoriaHover = id
        },
        tapVolverMenu: function(){
            this.claseMenuXs = 'd-none'
            this.claseProducto = 'd-none'
            this.classCat = 'd-grid'
            this.claseVolver = 'd-grid'
            this.claseVolverProducto = 'd-none'
        },
        tapCategoria: function(){        
            if(window.innerWidth <= 991){
                this.claseProducto = 'd-grid'
                this.claseVolver = 'd-none'
                this.classCat = 'd-none'
                this.claseVolverProducto = 'd-grid'
            }          
            else{
                this.claseProducto = 'd-grid'
            } 
        },
        tapVolverCategoria:function(){
            this.claseProducto = 'd-none'
            this.classCat = 'd-grid'
            this.claseVolver = 'd-grid'
            this.claseVolverProducto = 'd-none'
        },
    },
    created(){
        window.addEventListener('resize',this.hoverMenu)
        this.hoverMenu()
    }, 
    destroyed(){
        window.addEventListener('resize',this.hoverMenu)
    },
   computed:{
        productosCategoria: function(){
            return this.productos.filter((producto) => {
                return String(producto.id_categoria).match(String(this.idCategoriaHover));
            })
        }
    }   
}

</script>
<style scoped>
    /*estilo de los links del menu*/
    .collapse{
        height: auto;
        max-height: 100vh;
    }
    .nav .material-icons{
        color:#707070 !important; 
    } 
    .s-carrito{
        height: 10px;
        width: 10px;
        border-radius: 50%;
        position: absolute;
    }
    /*pointer en los ico*/
    .navbar #navbarMenu i{
        cursor: pointer;
    }
    /*hover de los nav-link*/
    .navbar #navbarMenu .nav-link:hover,.navbar #navbarMenu .navbar-brand:hover{
        color: black !important;
        transition-delay: .2s;
    }
    .bg-navbar{
        background-color: white !important;
    }
    /*estilo del navbar brand logo*/
    #navbarMenu .navbar-brand{
        font-family: Impact, Charcoal, sans-serif !important;
        color:#707070 !important;
        padding-left: 7px;
        padding-right: 7px;
        letter-spacing: 2px;   
        margin-left: -50px !important;
        border: 2px solid #707070;
    }
    .navbar-brand-xs{
        font-family: Impact, Charcoal, sans-serif !important;
        color:#707070 !important;
        padding-left: 7px;
        padding-right: 7px;
        letter-spacing: 2px;  
        border: 2px solid #707070;
    }
    /* items del menu xs */
    #i-xs-buscar, #i-xs-carrito{
        position: relative;
        top: 7px;
        padding: 0px 7px;
        color: #707070;
        cursor: pointer;
    }
    .d-buscar{
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
        top: 57px;
        transition: 1.5s;
        transition-duration:1s ; 
    }
    
    /* menu categoria xs */
    @media (max-width: 991px) {
        .menu-categoria-xs{
            width: 100%;
            height: 100vh;
            position:absolute;
            top:65px;
            left: 0;
            grid-template-rows: 10vh 100%;
            grid-template-columns: 1vw;
            background-color: inherit;
            color:inherit;
        }
        .volver{
            grid-row:1/2;
            grid-column:1;
        
        }
        .categorias{
            grid-row: 2/2;
            grid-column: 1;
        }
        menu-item-categoria{
            width: 100%;
        }
    }
    /* menu categoria lg*/
    @media (min-width: 992px) {
        .menu-categoria-lg{
            width: 70%;
            display: grid;
            grid-template-columns: 40% 60%;
            grid-template-rows: 1fr;
            position: absolute;
            background-color: inherit;
            height: 50vh;
            top:60px;
        }
        .categorias{
            grid-column: 1/2;
            grid-row: 1;
        }
        .productos{
            grid-column: 2/2;
            grid-row: 1;
        }
    }
</style>
