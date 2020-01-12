<template>
    <tr>
        <th class="align-middle" scope="row">{{producto.codigo}}</th>
        <td class="align-middle">{{producto.nombre}}</td>
        <td class="align-middle">{{producto.categoria.nombre}}</td>
        <td class="align-middle">{{producto.precio}}</td>
        <td class="align-middle">${{producto.precio}}</td>
        <td class="align-middle">{{producto.descripcion}}</td>
        <td class="align-middle text-center">
            <a href="/admin/ver_producto/1" class="btn btn-primary text-white"><i class="far fa-eye"></i></a>
        </td>
        <td class="align-middle text-center">
            <a href="/admin/editar_producto/1" class="btn btn-success text-white"><i class="far fa-edit"></i></a>
        </td>
        <td class="align-middle text-center">
            <button type="button" class="btn btn-danger"><i class="fas fa-times"></i></button>
        </td>
    </tr>
</template>
<script>
export default {
    props:['producto'],
    name: 'producto-lista',
    data(){
        return{}
    }
}
</script>
<style scoped>

</style>
