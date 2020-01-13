<template>
    <tr class="">
        <td class="align-middle" scope="row">{{categoria.id}}</td>
        <td class="align-middle">{{categoria.nombre}}</td>
        <td class="align-middle">
            <img :src="`../../../img/${categoria.imagen_categoria}`" alt="" width="95">
        </td>
        <td class="align-middle">
            {{categoria.descripcion}}
        </td>
        <td class="align-middle text-center">
            <button class="btn btn-success text-white" @click="editar">
                <i class="far fa-edit"></i>
            </button>
        </td>
        <td class="align-middle text-center">
            <button type="button" class="btn btn-danger" @click="eliminar">
                <i class="fas fa-times"></i>
            </button>
        </td>
    </tr>
</template>
<script>
export default {
    name:'lista-categoria',
    props:['categoria'],
    data() {
        return {
            id: this.categoria.id
        }
    },
    methods: {
        editar: function(){
<<<<<<< HEAD
            // axios.get('http://127.0.0.1:8000/api/categoria/'+this.categoria.id)
            //     .then(res => {
            //         console.log(res);
                    
            //     })
            //     .catch(err => {
            //         console.log(err);
                    
            //     })
            window.location.href = "http://127.0.0.1:8000/admin/editar_categoria/" + this.categoria.id 
=======
            window.location.href = "http://127.0.0.1:8000/admin/editar_producto/" + this.categoria.id 
        },
        eliminar:function(){
            axios.delete('http://127.0.0.1:8000/api/categoria/' + this.id)
                .then(res => {
                    this.$emit('eliminar')
                })
                .catch(err => {
                    console.log(err);
                })
>>>>>>> 4175af3ae9761c3a3fae5acd323fcb3d07b1e7f9
        }
    },

}
</script>