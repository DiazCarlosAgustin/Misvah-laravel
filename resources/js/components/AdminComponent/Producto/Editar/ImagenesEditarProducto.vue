<template>
    <tr>
        <td class="align-middle text-center"><img :src="imagen.src" alt="" class="m-1"></td>
        <td class="align-middle text-center">{{imagen.color}}</td>      
        <td class="align-middle text-center">
           <button type="button" class="btn btn-success py-2 px-3 text-center align-middle"><i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger py-2 px-3 text-center align-middle"><i class="fas fa-trash"></i></button>
        </td>       
    </tr>
</template>
<script>
export default {
    name:'imagen-editar-producto',
    props:['imagen'],
    data(){
        return{}
    }
}
</script>
<style scoped>
    
</style>
