<template>
    <div>
        <nav class="navbar navbar-dark  bg-purple fixed-top col-12 scrolling-navbar">
            <button class="navbar-toggler" type="button" @click="showMenu">
                <span class="align-middle">
                    <i class="fas fa-bars fa-1x" v-if="!show"></i>
                    <i class="fas fa-times fa-1x" v-if="show"></i>
                </span> 
            </button>
            <div class="d-flex ml-auto nav-flex-icon">
                <i class="fas fa-envelope text-white nav-link nav-item px-1"></i>
                <i class="fas fa-bell text-white nav-link nav-item"></i>
                <img src="https://via.placeholder.com/30x30.png" class="rounded-circle z-depth-0 w-100" alt="">
            </div>
            <div class="collapse navbar-collapse text-white bg-purple" :class="[show ? 'show': '']" id="sidebar">
                <div class="navbar-brand nav-link nav-item text-center w-100">
                    <h3>Mishvah</h3>
                    <h4>Admin</h4>
                </div>
                <div class="flex-column">
                    <a href="/admin/index" class="nav-item nav-link">Inicio</a>
                    <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Productos
                        </a>
                        <div class="dropdown-menu w-100 text-center" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/admin/nuevo_producto">Agregar</a>
                            <a class="dropdown-item" href="/admin/productos">Listar</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categoria
                        </a>
                        <div class="dropdown-menu w-100 text-center" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/admin/nueva_categoria" >Agregar</a>
                            <a class="dropdown-item" href="/admin/categorias">Listar</a>
                        </div>
                    </div>
                    <a href="/admin/elementos" class="nav-link nav-item">Elementos del UI</a>
                    <a href="" class="nav-link nav-item">Pedidos</a>
                    <a href="" class="nav-link nav-item">Ventas</a>
                    <a href="" class="nav-link nav-item">Estadisticas</a>
                </div>
            </div>
        </nav>
        <div class="col-12 col-xs-12 col-md-4 w-100 content d-none">
            <div class="notification">
                <div class="card border">
                    <div class="card-header bg-purple">
                        <div class="card-title text-white d-flex font-weight-bold">
                            Notificaciones
                            <div class="icon-close-notification ml-auto">
                                <i class="fas fa-times " id="close-noti"></i>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-1">
                        <div class="notification-info border-bottom w-100 m-0 p-1">
                            <div class="title-notification-info p-1 font-weight-bold d-flex">
                                Aviso de Stock bajo/ no disponible
                                <div class="icon-close-notification ml-auto">
                                    <i class="fas fa-times"></i>
                                </div>
                            </div>
                            <div class="description-notification pl-2">
                                El producto 'Nombre del producto' con codigo '123-Cod' se encuentra con un stock de X en el color X
                            </div>
                            <div class="time-notification p-1 text-muted text-right">
                                Hace 2 horas
                            </div>
                        </div>
                        <div class="notification-info border-bottom w-100 m-0 p-1">
                            <div class="title-notification-info p-1 font-weight-bold d-flex">
                                Aviso de Stock bajo/ no disponible
                                <div class="icon-close-notification ml-auto">
                                    <i class="fas fa-times"></i>
                                </div>
                            </div>
                            <div class="description-notification pl-2">
                                El producto 'Nombre del producto' con codigo '123-Cod' se encuentra con un stock de X en el color X
                            </div>
                            <div class="time-notification p-1 text-muted text-right">
                                Hace 2 horas
                            </div>
                        </div>
                        <div class="notification-info border-bottom w-100 m-0 p-1">
                            <div class="title-notification-info p-1 font-weight-bold d-flex">
                                Aviso de Stock bajo/ no disponible
                                <div class="icon-close-notification ml-auto">
                                    <i class="fas fa-times"></i>
                                </div>
                            </div>
                            <div class="description-notification pl-2">
                                El producto 'Nombre del producto' con codigo '123-Cod' se encuentra con un stock de X en el color X
                            </div>
                            <div class="time-notification p-1 text-muted text-right">
                                Hace 2 horas
                            </div>
                        </div>
                        <div class="notification-info border-bottom w-100 m-0 p-1">
                            <div class="title-notification-info p-1 font-weight-bold d-flex">
                                Aviso de Stock bajo/ no disponible
                                <div class="icon-close-notification ml-auto">
                                    <i class="fas fa-times"></i>
                                </div>
                            </div>
                            <div class="description-notification pl-2">
                                El producto 'Nombre del producto' con codigo '123-Cod' se encuentra con un stock de X en el color X
                            </div>
                            <div class="time-notification p-1 text-muted text-right">
                                Hace 2 horas
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'menuAdmin',
    data(){
        return{
            show:false
        }
    },
    methods:{
        showMenu:function(){
            this.show = !this.show
        },
    }
}
</script>