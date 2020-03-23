<template>
    <div class="row d-flex justify-content-center">
        <div class="col-12 col-md-8 col-lg-6 my-3">
            <form action="categorias/buscar" role="search" method="get">
                <div class="input-group">
                    <input type="search" name="buscar" id="txtSearch"
                        placeholder="Buscar categoria"
                        class="form-control my-auto" required>
                    <span class="input-group-btn">
                        <button type="submit" class="btn btn-info">
                            Buscar
                        </button>
                    </span>
                </div>
            </form>
        </div>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead class="">
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Imagen </th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Editar</th>
                    <th scope="col">editar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="listCategory.length == 0" class="text-center">
                        <td colspan="6">No se encontraron categorias</td>
                    </tr>
                    <lista-categoria v-for="(categoria, index) in listCategory" 
                        :key="categoria.id"
                        :categoria="categoria" 
                        @eliminar="eliminar(index)"/>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name:'admin-categorias',
    props:['categorias'],
    data() {
        return {
            cat: this.categorias.data
        }
    },
    mounted(){
        
    },
    methods:{
        eliminar:function($id) {
            this.cat.splice($id,1)
        }
    },
    computed:{
        listCategory(){
            return this.cat
        }
    }
}
</script>