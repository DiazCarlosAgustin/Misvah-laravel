<template>
    <tr>
        <th class="align-middle" scope="row">{{producto.codigo}}</th>
        <td class="align-middle">{{producto.nombre}}</td>
        <td class="align-middle">{{producto.categoria.nombre}}</td>
        <td class="align-middle">${{producto.precio}}</td>
        <td class="align-middle">
            <p v-if="producto.estado == 1">Activo</p>
            <p v-if="producto.estado == 0">Inactivo</p>
        </td>
        <td class="align-middle">{{producto.descripcion}}</td>
        <td class="align-middle text-center">
            <a :href="'/admin/ver_producto/'+ this.id" class="btn btn-primary text-white btn-sm"><i class="far fa-eye"></i></a>
        </td>
        <td class="align-middle text-center">
            <a :href="'/admin/editar_producto/'+this.id" class="btn btn-success text-white btn-sm"><i class="far fa-edit"></i></a>
        </td>
        <td class="align-middle text-center">
            <button type="button" class="btn btn-danger btn-sm" @click="show" :class="producto.estado == 0 ? 'no-btn disabled' : ''">
                <i class="fas fa-times"></i>
            </button>
        </td>
    </tr>
</template>
<script>
export default {
    props:['producto'],
    name: 'producto-lista',
    data(){
        return{
            id: this.producto.id,
            mensaje:'el producto'
        }
    },
    methods: {
        show:function(){
            this.$emit('show',this.producto.id) 
        }
    },
}
</script>
<style scoped>
    .no-btn{
        pointer-events: none;
    }
</style>
