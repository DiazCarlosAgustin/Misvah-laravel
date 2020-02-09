<template>
    <tr>
        <td class="align-center align-middle text-center">
           <img :src="`../../../img/colores/${color.imagen_color}`" 
            :alt="color.descripcion" width="40"
            class="">  
        </td>
        <td class="align-center align-middle">
           <p class=" text-center align-middle m-0">{{color.stock_color.stock}} </p> 
        </td>
        <td class="align-center align-middle text-center">
            <button type="button" class="btn btn-success py-2 px-3 text-center" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger py-2 px-3 text-center"><i class="fas fa-trash"></i></button>
        </td>
    </tr>
</template>
<script>
export default {
    name:'ColorEditarProducto',
    props:['color'],
    data(){
        return{}
    }
}
</script>