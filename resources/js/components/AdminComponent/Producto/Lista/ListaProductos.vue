<template>
     <div class="row d-flex justify-content-center mt-4">
        <div class="col-12 col-xs-12 col-md-12">
            <div class="table-responsive mt-3">
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
                        <producto-lista v-for="(producto,index) in listProduct" 
                            :key="producto.codigo" 
                            :producto="producto" 
                            @eliminar="eliminarProducto(index)"/>
                        <tr>
                            <td colspan="9"> 
                                <div class="">
                                    <btn-paginacion v-for="index in last" :key="index" 
                                        :actual="currentPage"
                                        :number="index"
                                        :http="http+index" @next="actualPage"/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Lista-productos',
    data(){
        return{
            cod:'',
            productos: [],
            actual:1,
            primera:'',
            siguiente:'',
            ultima:'',
            current:1,
            last:0,
            http:'http://127.0.0.1:8000/api/producto?page='
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/producto')
            .then(res => {
                this.productos = res.data.data
                this.primera = res.data.first_page_url
                this.siguiente = res.data.next_page_url
                this.ultima = res.data.last_page_url
                this.current = res.data.current_page
                this.last = res.data.last_page
            })
            .catch(err => {
                console.log(err);
            });
    },
    methods: {
        actualPage: function($res){          
            this.productos = $res.data
            this.primera = $res.first_page_url
            this.siguiente = $res.next_page_url
            this.ultima = $res.last_page_url
            this.current = $res.current_page
            this.last = $res.last_page
        },
        eliminarProducto:function($i){
            this.productos.splice($i,1)
        }
    },
    computed: {
        listProduct: function(){
            return this.productos
        },
        currentPage: function(){
            return this.current
        },
    },
}
</script>
<style scoped>
</style>
