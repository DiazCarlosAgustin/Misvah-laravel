<template>
    <tr>
        <th class="align-middle" scope="row">{{producto.codigo}}</th>
        <td class="align-middle">{{producto.nombre}}</td>
        <td class="align-middle">{{producto.categoria.nombre}}</td>
        <td class="align-middle">{{producto.precio}}</td>
        <td class="align-middle">${{producto.precio}}</td>
        <td class="align-middle">{{producto.descripcion}}</td>
        <td class="align-middle text-center">
            <a :href="'/admin/ver_producto/'+ this.id" class="btn btn-primary text-white btn-sm"><i class="far fa-eye"></i></a>
        </td>
        <td class="align-middle text-center">
            <a :href="'/admin/editar_producto/'+this.id" class="btn btn-success text-white btn-sm"><i class="far fa-edit"></i></a>
        </td>
        <td class="align-middle text-center">
            <button type="button" class="btn btn-danger btn-sm" @click="eliminar"><i class="fas fa-times"></i></button>
        </td>
    </tr>
</template>
<script>
export default {
    props:['producto'],
    name: 'producto-lista',
    data(){
        return{
            id: this.producto.id
        }
    },
    methods: {
        eliminar: function(){
            console.log(this.id);
            
            axios.delete('http://127.0.0.1:8000/api/producto/'+this.id)
                .then(res => {
                    this.$emit('eliminar')
                })
                .catch(err => {
                    console.log(err);
                })
        }
    },
}
</script>
<style scoped>

</style>
