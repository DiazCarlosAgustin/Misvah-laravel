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
                        <producto-lista v-for="(producto,index) in productos.data" 
                            :key="producto.codigo" 
                            :producto="producto" 
                            @eliminar="eliminarProducto(index)"/>
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
        }
    },
}
</script>
<style scoped>
</style>
