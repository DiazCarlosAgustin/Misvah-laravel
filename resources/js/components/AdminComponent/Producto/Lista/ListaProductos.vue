<template>
     <div class="row d-flex justify-content-center mt-4">
        <div class="col-xs-12 col-md-6">
            <div class="input-group"> 
                <input type="text" class="form-control h-auto" placeholder="Cod. producto" v-model="cod">
                <div class="input-group-append">
                    <label class="buscar input-group-text m-0">
                        <i class="fas fa-search"></i>
                    </label>
                </div>
            </div>
        </div>
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
                        <producto-lista v-for="producto in filtrarProducto" :key="producto.codigo" :producto="producto"></producto-lista>
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
            productos: [
                {
                    codigo: '123-cod',
                    nombre: 'Producto-1',
                    categoria: 'categoria-2',
                    precio:234,
                    estado: 'oculto',
                    descripcion:'Esto seria la descripcion del producto'
                },
                {
                    codigo: '124-cod',
                    nombre: 'Producto-2',
                    categoria: 'categoria-1',
                    precio:264,
                    estado: 'visible',
                    descripcion:'Esto seria la descripcion del producto'
                },
                {
                    codigo: '125-cod',
                    nombre: 'Producto-1',
                    categoria: 'categoria-2',
                    precio:234,
                    estado: 'oculto',
                    descripcion:'Esto seria la descripcion del producto'
                }
            ]
        }
    },
    computed:{
        filtrarProducto: function(){
            return this.productos.filter((producto) => {
                return producto.codigo.match(this.cod);
            })
        },
    }
}
</script>
<style scoped>
</style>
