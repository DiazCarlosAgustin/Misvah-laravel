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
                        <producto-lista v-for="(producto,index) in listProduct" 
                            :key="producto.codigo" 
                            :producto="producto" 
                            @eliminar="eliminarProducto(index)"/>
                    </tbody>
                </table>
            </div>
            <div v-show="productos.length > 0" class="text-center my-3">
                <btn-paginacion v-for="index in last" :key="index" 
                    :actual="current"
                    :number="index"
                    :http="http+index" @next="actualPage"/>
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
            productos: [],
            actual:1,
            primera:'',
            siguiente:'',
            ultima:'',
            current:localStorage.getItem('current'),
            last:0,
            http:'http://127.0.0.1:8000/api/producto?page=',
            active:false
        }
    },
    async beforeMount() {
        this.getProductos()
    },
    methods: {
        getProductos: function() {
            axios.get(this.http+this.current)
            .then(res => {
                if (localStorage.getItem('current')) {
                    this.current = JSON.parse(localStorage.getItem('current'))
                }
                else{
                    this.current = res.data.current_page
                }       
                this.productos = res.data.data
                this.primera = res.data.first_page_url
                this.siguiente = res.data.next_page_url
                this.ultima = res.data.last_page_url
                this.last = res.data.last_page
                this.active = true
            })
            .catch(err => {
                console.log(err);
                this.active = true
            });
        },
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
    },
    mounted(){ 
        if (localStorage.getItem('current')) {
            this.current = JSON.parse(localStorage.getItem('current'))
        }
        if (localStorage.getItem('last')) {
            this.last = JSON.parse(localStorage.getItem('last'))
        }
    },
    watch:{
        last:function(newLast) {
            localStorage.setItem('last',JSON.stringify(newLast))
        },
        current:function(newCurrent){
            localStorage.setItem('current',JSON.stringify(newCurrent))
        }
    }
}
</script>
<style scoped>
</style>
