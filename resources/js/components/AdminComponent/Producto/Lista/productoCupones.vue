<template>
    <tr>
        <th class="align-middle text-center">
            {{cupon.id}}
        </th>
        <th class="align-middle text-center">
            {{cupon.nombre}}
        </th>
        <th class="align-middle text-center">
            {{cupon.precio}}
        </th>
        <th class="align-middle text-center">
            {{cupon.cupon}}
        </th>
        <th class="align-middle text-center">
            {{cupon.valor}}
        </th>
        <td class="align-middle text-center">
            <button type="button" class="btn btn-danger"><i class="fas fa-times"></i></button>
        </td>
    </tr>
</template>
<script>
export default {
    name:'producto-cupon',
    props:['cupon'],
    data(){
        return{}
    }
}
</script>