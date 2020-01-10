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
                        <producto-lista v-for="producto in productos" :key="producto.codigo" :producto="producto"></producto-lista>
                        <tr>
                            <td colspan="9"> 
                                <div class="text-center">
                                    <button v-if="actual != primera" class="btn btn-sm">
                                        Primera
                                    </button>
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
            actual:'',
            primera:'',
            siguiente:'',
            ultima:''
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/producto')
            .then(res => {
                this.productos = res.data.data
                this.actual = res.data.first_page_url
                this.primera = res.data.first_page_url
                this.siguiente = res.data.next_page_url
                this.ultima = res.data.last_page_url
            })
            .catch(err => {
                console.log(err);
            });
    },
}
</script>
<style scoped>
</style>
