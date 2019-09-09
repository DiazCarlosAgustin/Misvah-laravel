
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

//Inicio 
    //menu de la pagina navbar
    Vue.component('navbar', require('./components/ClientComponents/Menu/menu.vue').default);
    Vue.component('menu-categoria', require('./components/ClientComponents/Menu/categoriaMenu.vue').default);
    Vue.component('menu-item-categoria', require('./components/ClientComponents/Menu/itemCategoriaMenu.vue').default);

    // Componente de carrito
    Vue.component('carrito', require('./components/ClientComponents/Cart/carrito.vue').default);
    Vue.component('item-carrito', require('./components/ClientComponents/Cart/item-carrito.vue').default);
    // Pagina del carrito
    Vue.component('web-carrito', require('./components/ClientComponents/Cart/web-carrito.vue').default);
    Vue.component('producto-carrito', require('./components/ClientComponents/Cart/producto-carrito.vue').default);
    // Componente de fondo
    Vue.component('fondo-component', require('./components/ClientComponents/FondoComponent.vue').default);
    // Componente de categoria
    Vue.component('categorias-component', require('./components/ClientComponents/CategoriasComponent.vue').default);
    Vue.component('categoria-component', require('./components/ClientComponents/CategoriaComponent.vue').default);
    // componente de destacados + llamado del componente producto
    Vue.component('destacados-component', require('./components/ClientComponents/DestacadosComponent.vue').default);
// Pagina tienda
    Vue.component('tienda', require('./components/ClientComponents/Tienda/Tienda.vue').default);
    Vue.component('ajustes', require('./components/ClientComponents/Tienda/ajustes.vue').default);
    Vue.component('filtro-precio', require('./components/ClientComponents/Tienda/FiltroPrecio.vue').default);
    Vue.component('filtro-categoria', require('./components/ClientComponents/Tienda/FiltroCategoria.vue').default);
    Vue.component('filtro-ordenado', require('./components/ClientComponents/Tienda/FiltroOrdenado.vue').default);
    Vue.component('productos', require('./components/ClientComponents/Productos/Productos.vue').default);
    Vue.component('paginacion', require('./components/paginacion.vue').default);
    // componente del producto
    Vue.component('producto', require('./components/ClientComponents/Productos/Producto.vue').default);
// Pagina producto
    Vue.component('foto-producto', require('./components/ClientComponents/Pagina-Producto/FotosProducto.vue').default);
    Vue.component('swiper-fotos-producto', require('./components/ClientComponents/Pagina-Producto/swiper-fotos-productos.vue').default);
    Vue.component('web-producto', require('./components/ClientComponents/Pagina-Producto/webProducto.vue').default);
    Vue.component('info-producto', require('./components/ClientComponents/Pagina-Producto/info-producto.vue').default);
    Vue.component('color-producto', require('./components/ClientComponents/Pagina-Producto/color-producto.vue').default);
    Vue.component('informacion-producto', require('./components/ClientComponents/Pagina-Producto/informacion-producto.vue').default);
    Vue.component('productos-relacionados', require('./components/ClientComponents/Pagina-Producto/productos-relacionados.vue').default);
    // Pagina contacto
    Vue.component('web-contacto', require('./components/ClientComponents/Pagina-contacto/web-contacto.vue').default);
    //Pagina acceder
    Vue.component('web-acceder', require('./components/ClientComponents/Pagina-acceder/web-acceder.vue').default);
    //Pagina registrarse
    Vue.component('web-registrarse', require('./components/ClientComponents/Pagina-registrarse/web-registrarse.vue').default);
 
    
// Admin
    // Index
        // card
        Vue.component('cards-dashboard', require('./components/AdminComponent/Index/cards/CardsDashboard.vue').default);
        Vue.component('card-pedidos-nuevos', require('./components/AdminComponent/Index/cards/cardPedidos.vue').default);
        Vue.component('card-ganancias', require('./components/AdminComponent/Index/cards/cardGanancias.vue').default);
        Vue.component('card-productos-vendidos', require('./components/AdminComponent/Index/cards/cardProductos.vue').default);
        // Tabla ordenes
        Vue.component('tabla-ordenes', require('./components/AdminComponent/Index/tablas/tabla-ordenes/tablaOrdenes.vue').default);
        Vue.component('orden', require('./components/AdminComponent/Index/tablas/tabla-ordenes/orden.vue').default);
        // tabla mas vendidos
        Vue.component('tabla-mas-vendidos', require('./components/AdminComponent/Index/tablas/tabla-mas-vendidos/TablaProductoMasVendidos.vue').default);
        Vue.component('producto-mas-vendido', require('./components/AdminComponent/Index/tablas/tabla-mas-vendidos/productoMasVendido.vue').default);
        // tabla de productos con stock bajo
        Vue.component('tabla-productos-stock-bajo', require('./components/AdminComponent/Index/tablas/tabla-stock-bajo/tablaStockBajo.vue').default);
        Vue.component('producto-stock-bajo', require('./components/AdminComponent/Index/tablas/tabla-stock-bajo/productoStockBajo.vue').default);
    // Productos    
        // agregar
        Vue.component('agregar-producto', require('./components/AdminComponent/Producto/agregar/agregarProducto.vue').default);
        // Lista 
        Vue.component('lista-productos', require('./components/AdminComponent/Producto/Lista/ListaProductos.vue').default);
        Vue.component('producto-lista', require('./components/AdminComponent/Producto/Lista/productoLista.vue').default);
        Vue.component('lista-productos-oferta', require('./components/AdminComponent/Producto/Lista/listaProductoOferta.vue').default);
        Vue.component('producto-oferta', require('./components/AdminComponent/Producto/Lista/productoOferta.vue').default);
        Vue.component('lista-productos-cupones', require('./components/AdminComponent/Producto/Lista/listaProductosCupon.vue').default);
        Vue.component('producto-cupon', require('./components/AdminComponent/Producto/Lista/productoCupones.vue').default);
        // Ver
        Vue.component('admin-ver-producto', require('./components/AdminComponent/Producto/ver/adminVerProducto.vue').default);
        
        // Editar
        Vue.component('editar-producto', require('./components/AdminComponent/Producto/Editar/EditarProducto.vue').default);
        Vue.component('color-editar-producto', require('./components/AdminComponent/Producto/Editar/ColorEditarProducto.vue').default);
        Vue.component('imagen-editar-producto', require('./components/AdminComponent/Producto/Editar/ImagenesEditarProducto.vue').default);
        // Color nuevo, stock, imagen
        Vue.component('lista-color', require('./components/AdminComponent/Producto/Editar/Colores/ListaColores.vue').default);
        Vue.component('nuevo-color', require('./components/AdminComponent/Producto/Editar/Colores/NuevoColor.vue').default);
        Vue.component('stock-color', require('./components/AdminComponent/Producto/Editar/Colores/StockColor.vue').default);
        Vue.component('imagen-color', require('./components/AdminComponent/Producto/Editar/Colores/imagenColor.vue').default);
        // Generar cupon
        Vue.component('generar-cupon-descuento', require('./components/AdminComponent/Producto/Editar/Cupon/generarCuponDescuento.vue').default);
        // Oferta
        Vue.component('generar-oferta', require('./components/AdminComponent/Producto/Editar/Oferta/generarOferta.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app'
});
