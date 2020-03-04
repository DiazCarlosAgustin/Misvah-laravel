<template>
     <div class="row d-flex justify-content-center mt-4">
        <div class="col-12 col-xs-12 col-md-12">
            <div class="table-responsive mt-3" v-if="productos.length > 0 && active">
                <table class="table table-striped" id="tablaProductos">
                    <thead>
                        <tr class="text-center">
                            <th scope="col">Codigo</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Ver</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody class="text-center">
                        <producto-lista v-for="(producto,index) in productos" 
                            :key="producto.codigo" 
                            :producto="producto" 
                            @eliminar="eliminarProducto(index)"/>
                    </tbody>
                </table>
            </div>
            <div v-show="productos" class="text-center my-3">
                <btn-paginacion :pagination="pagination" @changePage="changePage"/>
            </div>
            <loader :active="!active"/>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Lista-productos',
    data(){
        return{
            cod:'',
            productos: {},
            pagination:{
                total:0,
                current_page:0, 
                per_page:0, 
                last_page:0, 
                from:0, 
                to:0
            },
            http:'http://127.0.0.1:8000/api/producto?page=',
            active:false
        }
    },
    async beforeMount() {
        this.getProductos()
    },
    methods: {
        getProductos:function(page) {
            axios.get(this.http + page)
            .then(res => {
                this.productos = res.data.productos.data
                this.pagination = res.data.pagination
                this.active = true
            })
            .catch(err => {
                console.log(err);
            });
        },
        eliminarProducto:function($i){
            this.productos.splice($i,1)
        },
        changePage:function(page){
            this.pagination.current_page = page
            this.getProductos(page)
        }
    },
    computed: {
        listProduct:function(){
            return this.productos
        },
    },
    mounted(){ 
        
    }
}
</script>
<style scoped>
</style>
