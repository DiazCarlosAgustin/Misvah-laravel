<template>
    <tr>
        <td class="align-middle text-center">
            {{oferta.id}}
        </td>
        <td class="align-middle text-center">
            {{oferta.producto.codigo}}
        </td>
        <td class="align-middle text-center">
            {{oferta.producto.nombre}}
        </td>
        <td class="align-middle text-center">
            {{oferta.porcentaje}}%
        </td>
        <td class="align-middle text-center">
            {{oferta.fecha_desde}}
        </td>
        <td class="align-middle text-center">
            {{oferta.fecha_hasta}}
        </td>
         <td class="align-middle text-center">
            <button type="button" class="btn btn-danger" @click="deleteOferta">
                <i class="fas fa-times"></i>
            </button>
        </td>
    </tr>
</template>
<script>
export default {
    name:'producto-oferta',
    props:['oferta'],
    data(){
        return{}
    },
    methods:{
        deleteOferta:function(){
            this.$emit('deleteOferta')
        }
    }
}
</script>