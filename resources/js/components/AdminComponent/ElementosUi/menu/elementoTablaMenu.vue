<template>
    <tr>
        <th class="align-middle">{{elemento.color}}</th>
        <th class="align-middle">{{elemento.color_letra}}</th>
        <th class="align-middle">{{elemento.logo}}</th>
        <th class="align-middle">{{elemento.created_at}}</th>
        <th class="align-middle">
            <div v-if="elemento.estado === 1">
                Activo
            </div>
            <div v-if="elemento.estado === 0">
                Inactivo
            </div>
        </th>
        <th class="align-middle">
            <button class="btn btn-danger" v-if="elemento.estado === 1">Desabilitar</button>
            <button class="btn btn-success" v-if="elemento.estado === 0">Habilitar</button>
        </th>
    </tr>
</template>
<script>
export default {
    name:'elementos-tabla-menu',
    props:['elemento'],
    data() {
        return {
            
        }
    },
}
</script>