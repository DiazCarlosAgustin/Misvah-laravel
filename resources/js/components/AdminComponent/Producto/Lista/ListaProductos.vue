<template>
     <div class="row d-flex justify-content-center mt-4">
        <div class="col-12 col-md-8 col-lg-6">
            <form action="productos/buscar" role="search" method="get">
                <div class="input-group">
                    <input type="search" name="buscar" id="txtSearch"
                        placeholder="Buscar producto"
                        class="form-control my-auto" required>
                    <span class="input-group-btn">
                        <button type="submit" class="btn btn-info">
                            Buscar
                        </button>
                    </span>
                </div>
            </form>
        </div>
        <modal :mensaje="mensaje"
            v-show="active"
            @event="eliminar" 
            @close="closeModal"
        />
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
                        <producto-lista v-for="(producto,index) in productos.data" 
                            :key="producto.codigo" 
                            :producto="producto" 
                            @show="modal(index,...arguments)"/>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Lista-productos',
    props:['productos'],
    data(){
       return{
            mensaje:'Al eliminar este producto se eliminaran: Imagenes, Colores, en caso de que posea ordenes de compra no se podra eliminar.',
            active:false,
            prod:{
                id:0,
                index:0
            }
       }
    },
    mounted(){
        console.log(this.productos)
    },
    methods:{
        closeModal:function(){
            this.active = false
        },
        modal:function(index,id){
            this.active = true
            this.prod.id = id
            this.prod.index = index

            console.log(this.prod);
            
        },
        eliminar: function(status){
            if(status){
                axios.delete('http://127.0.0.1:8000/api/producto/'+this.prod.id)
                .then(res => {
                    location.reload()
                })
                .catch(err => {
                    console.log(err);
                })
            }
        }
    },
    computed:{
    }
}
</script>
<style scoped>
</style>
