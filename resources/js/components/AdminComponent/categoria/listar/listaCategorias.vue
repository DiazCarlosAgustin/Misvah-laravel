<template>
    <div class="container mt-5">
       <div class="row d-flex justify-content-center">
           <div class="col-12 text-center mt-4">
               <h4>Categorias</h4>
           </div>
       </div>
       <div class="row d-flex justify-content-center">
            <div class="col-12 col-md-10 text-center mt-2 mb-3">
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
                        <lista-categoria v-for="(categoria, index) in categorias" 
                            :key="categoria.id"
                            :categoria="categoria" 
                            @eliminar="eliminar(index)"/>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'admin-categorias',
    data() {
        return {
            categorias:[]
        }
    },
    beforeMount(){
        axios.get('http://127.0.0.1:8000/api/categoria')
            .then(res => {
                this.categorias = res.data
            })
            .catch(err => {
                console.log(err);
            })
    },
    methods:{
        eliminar:function($id) {
            this.categorias.splice($id,1)
        }
    }
}
</script>