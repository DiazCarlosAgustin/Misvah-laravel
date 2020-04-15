<template>
    <tr>
        <td class="align-middle">
            <img
                :src="`../../../img/fondos/${imagen.imagen}`"
                alt="Imagen de Fondo"
                width="90"
                height="65"
            />
        </td>
        <td class="align-middle">
            {{ imagen.imagen }}
        </td>
        <td class="align-middle">
            <p>{{ imagen.updated_at }}</p>
        </td>
        <td class="align-middle" v-if="imagen.estado == 0">Habilitado</td>
        <td class="align-middle" v-if="imagen.estado == 1">Deshabilitado</td>
        <td class="align-middle">
            <button
                class="btn btn-success"
                v-if="imagen.estado == 0"
                @click="updateEstado"
            >
                Habilitar
            </button>
            <button class="btn btn-danger" v-else @click="updateEstado">
                Deshabilitar
            </button>
        </td>
    </tr>
</template>
<script>
export default {
    props: ["imagen"],
    methods: {
        updateEstado: function() {
            axios
                .put("http://127.0.0.1:8000/api/fondo/" + this.imagen.id)
                .then(res => {
                    this.$emit("estadoFondo", res.data.estado)
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>
