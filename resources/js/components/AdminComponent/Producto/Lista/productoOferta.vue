<template>
    <tr>
        <td class="align-middle text-center">
            {{producto.cod}}
        </td>
        <td class="align-middle text-center">
            {{producto.nombre}}
        </td>
        <td class="align-middle text-center">
            {{producto.precio}}
        </td>
        <td class="align-middle text-center">
            {{producto.descuento}}
        </td>
        <td class="align-middle text-center">
            {{producto.precioDescuento}}
        </td>
        <td class="align-middle text-center">
            {{producto.desde}}
        </td>
        <td class="align-middle text-center">
            {{producto.hasta}}
        </td>
         <td class="align-middle text-center">
            <button type="button" class="btn btn-danger"><i class="fas fa-times"></i></button>
        </td>
    </tr>
</template>
<script>
export default {
    name:'producto-oferta',
    props:['producto'],
    data(){
        return{}
    }
}
</script>