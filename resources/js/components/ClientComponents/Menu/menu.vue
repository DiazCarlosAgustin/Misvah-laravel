<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-navbar col-12 scrolling-navbar ">
        <!-- {{-- navbar-brand xs que solo se vera en celulares o tablets--}} -->
        <a href="#" class="navbar-brand d-xs-flex d-lg-none navbar-brand-xs borde">MISVHA</a>
        <!-- {{-- menu xs que se vera solo en tablets o celulares--}} -->
        <div class="menu-xs d-xs-flex d-lg-none" >
            <i class="material-icons" id="i-xs-buscar">search</i>
            <a href="/carrito">
                <span class="s-carrito bg-danger"></span>
                <i class="material-icons" id="i-xs-carrito">shopping_cart</i>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu"
                aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="dark-blue-text">
                    <i class="fas fa-bars fa-1x"></i>
                </span>
            </button>
        </div>
        <!-- {{--items del menu--}} -->
        <div class="navbar-collapse collapse" id="navbarMenu">
            <!-- {{--Menu del lado izquierdo--}} -->
            <div class="nav navbar-nav mr-auto text-center">
                <a href="/" class="nav-item nav-link xs-link">INICIO</a>
                <a href="/tienda" class="nav-item  nav-link xs-link">TIENDA</a>
                <a href="/contacto" class="nav-item  nav-link xs-link">CONTACTO</a>
                <!-- {{--este item solo se muestra en pantallas mobiles--}} -->
                <a href="/acceder')}}" class="nav-item  nav-link xs-link d-xs-block d-lg-none">ACCEDER</a>
            </div>
            <!-- {{--Menu del centro--}} -->
            <div class="mx-auto d-lg-flex d-none borde text-center ">
                <a href="/" class="navbar-brand mx-auto">MISVAH</a>
            </div>
            <!-- {{--Menu del lado derecho--}} -->
            <div class="nav navbar-nav ml-auto d-md-flex d-none ">
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
    </nav>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    /*Estilo del swiper*/
    .top-nav-collapse {
        background-color: white;
    }
    @media (max-width: 768px) {
        .navbar:not(.top-nav-collapse) {
        background-color: white;
        }
    }
    @media (min-width: 800px) and (max-width: 850px) {
        .navbar:not(.top-nav-collapse) {
        background-color: white;
        }
    }
    /*estilo de los links del menu*/
    .nav{
        max-height: 10vh;
        width: auto;
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
</style>
