
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
    // Componente de fondo
    Vue.component('fondo-component', require('./components/ClientComponents/FondoComponent.vue').default);
    // Componente de categoria
    Vue.component('categorias-component', require('./components/ClientComponents/CategoriasComponent.vue').default);
    Vue.component('categoria-component', require('./components/ClientComponents/CategoriaComponent.vue').default);
    // componente de destacados + llamado del componente producto
    Vue.component('destacados-component', require('./components/ClientComponents/DestacadosComponent.vue').default);
    // Componente de instagram
    Vue.component('instagram-component', require('./components/ClientComponents/instagramComponent.vue').default);
    Vue.component('foto-instagram', require('./components/ClientComponents/FotoInstagram.vue').default);
// Pagina tienda
    Vue.component('tienda', require('./components/ClientComponents/Tienda/Tienda.vue').default);
    Vue.component('ajustes', require('./components/ClientComponents/Tienda/ajustes.vue').default);
    Vue.component('filtro-precio', require('./components/ClientComponents/Tienda/FiltroPrecio.vue').default);
    Vue.component('filtro-categoria', require('./components/ClientComponents/Tienda/FiltroCategoria.vue').default);
    Vue.component('filtro-marca', require('./components/ClientComponents/Tienda/FiltroMarca.vue').default);
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
    
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app'
});
