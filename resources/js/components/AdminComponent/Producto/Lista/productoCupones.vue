<template>
    <tr>
        <th class="align-middle text-center">
            {{cupon.id}}
        </th>
        <th class="align-middle text-center">
            {{cupon.codigo}}
        </th>
        <th class="align-middle text-center">
            ${{cupon.monto}}
        </th>
        <th class="align-middle text-center">
            {{cupon.created_at}}
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