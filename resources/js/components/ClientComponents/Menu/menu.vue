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
                <button class="navbar-toggler" type="button" @click="showMenu">
                    <span class="align-middle">
                        <i class="fas fa-bars fa-1x" v-if="!show"></i>
                        <i class="fas fa-times fa-1x" v-if="show"></i>
                    </span> 
                </button>
            </div>
        </div>
        <div class="navbar-collapse collapse" :class="[show ? 'show': '']" id="navbarMenu">
            <div class="navbar-nav mr-auto text-center">
                <a href="/" class="nav-item nav-link">INICIO</a>
                <a class="nav-item nav-link" id="display-categorias" 
                     @click:native="clickMouse" @click="clickMouse">
                    CATEGORIAS
                </a>
                <a href="/contacto" class="nav-item nav-link">CONTACTO</a>
                <div v-if="!logeado">
                    <a href="/acceder" class="nav-item  nav-link xs-link d-xs-block d-lg-none">ACCEDER</a>
                </div>
                <div v-if="logeado">
                    <a class=" nav-item  nav-link xs-link text-uppercase d-xs-block d-lg-none" 
                        @click="clickUserXs">
                        {{user.name}}
                    </a>
                    <div class="drop d-lg-none d-xs-block nav-item" v-show="dw">
                        <div class="volver text-left" :class="claseVolver" @click="tapVolverMenu">
                            <span class="my-auto w-100 ml-3">
                                <i class="fas fa-arrow-left"></i>
                                Volver
                            </span>
                        </div>
                        <a class="nav-item nav-link">Mi Perfil</a>
                        <a class="nav-item nav-link" href="/favoritos">Mis Favoritos</a>
                        <a class="nav-item nav-link">Mis compras</a>
                        <div class="dropdown-divider"></div>
                        <a class="nav-link" @click="cerrarSesion" >Cerrar sesion</a>
                    </div>
                </div>

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
                <div v-if="!logeado">
                    <a href="/acceder" class="nav-item nav-link xs-link ">ACCEDER</a>
                </div>
                <div v-if="logeado">
                    <div class="dropdown">
                        <a class="dropdown-toggle nav-item nav-link xs-link text-uppercase a-user" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{user.name}}
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button">Mi Perfil</button>
                            <button class="dropdown-item" type="button">Mis Favoritos</button>
                            <button class="dropdown-item" type="button">Mis compras</button>
                            <div class="dropdown-divider"></div>
                            <button class="dropdown-item" type="button" @click="cerrarSesion" >Cerrar sesion</button>
                        </div>
                    </div>
                </div>
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
        <div v-if="pantalla > 991 && categorias.length > 0" :class="claseMenu" class="menu-categoria-lg" @mouseleave="hoverMouse">
            <div class="categorias">
                <menu-categoria v-for="categoria in categorias" 
                :key="categoria.id" :categoria="categoria" 
                @categoriaHover="CategoriaHover"
                @click.native="tapCategoria"/>
            </div>
            <div class="productos">
                <div v-if="productosCategoria.length > 0">
                    <menu-item-categoria v-for="producto in productosCategoria" 
                        :key="producto.id"
                        :producto="producto"
                        class="text-center" :class="claseProducto"
                    />
                </div>
                <div v-else class="text-center my-3" :class="claseProducto">
                    <p>No se encontraron productos</p>
                </div>
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
    import auth from '../../../mix/auth'
    export default {
        props:[],
        name:'navbar',
        mixins:[auth],
        data(){
            return{
                idCategoriaHover:0,
                pantalla: 0,
                dw:false,
                hover: false,
                claseMenu:'d-none',
                claseMenuXs:'d-none',
                claseProducto: 'd-none',
                classCat:'d-grid',
                claseVolver: 'd-grid',
                claseVolverProducto: 'd-none',
                categorias:[],
                productos:[],
                show:false
            }
        },
        beforeMount() {
            this.traerCategorias()
        },
        methods:{
            showMenu:function(){
                this.show = !this.show
            },
            traerCategorias:function(){
                axios.get('http://127.0.0.1:8000/api/categoria')
                    .then(res => {
                        this.categorias = res.data
                        this.getProductos()
                    })
                    .catch(err =>{
                        console.log(err);
                    })
            },
            cerrarSesion: function(){
                axios.post('http://127.0.0.1:8000/auth/logout')
                    .then(res => {
                        window.location.href = '/'
                    })
                    .catch(err =>{
                        console.log(err);
                        
                    })
            },
            clickUserXs:function(){
                this.dw = !this.dw
                
            },
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
                        this.claseProducto= 'd-none'
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
                this.dw = false;
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
            getProductos: function(){
                for (let index = 0; index <this.categorias.length; index++) {
                   for (let x = 0; x < this.categorias[index].producto.length;x++){
                        this.productos.push(this.categorias[index].producto[x])   
                    }
                }
                return this.productos
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
    .categorias{
        height: auto;
        overflow: auto;
    }
    .categorias::-webkit-scrollbar {
        width: 8px;     /* Tamaño del scroll en vertical */
        height: 8px;    /* Tamaño del scroll en horizontal */
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
    .drop{
        width: 100%;
        height: 100vh !important;
        left: 0;
        position:absolute;
        top:65px;
        background-color: white;
        color: inherit;
        display: block;
    }
    /*estilo de los links del menu*/
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
    .a-user{
        overflow: hidden;
        width: 100%;
        max-width: 10ch;
        text-align: center
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
