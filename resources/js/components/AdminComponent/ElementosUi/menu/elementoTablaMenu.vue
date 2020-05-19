<template>
    <tr>
        <th class="align-middle">{{ elemento.color }}</th>
        <th class="align-middle">{{ elemento.color_letra }}</th>
        <th class="align-middle">{{ elemento.created_at }}</th>
        <th class="align-middle">
            <div v-if="elemento.estado == 1">
                Activo
            </div>
            <div v-if="elemento.estado == 0">
                Inactivo
            </div>
        </th>
        <th class="align-middle">
            <button class="btn btn-danger" @click="cambiarEstado" v-if="elemento.estado == 1">
                Desabilitar
            </button>
            <button class="btn btn-success" @click="cambiarEstado" v-if="elemento.estado == 0">
                Habilitar
            </button>
        </th>
    </tr>
</template>
<script>
export default {
    name: "elementos-tabla-menu",
    props: ["elemento"],
    data() {
        return {};
    },
    methods: {
        cambiarEstado() {
            var id = this.elemento.id
            var param = {
                estado: !this.elemento.estado
            }
            axios
                .put("http://127.0.0.1:8000/api/menu/"+id,param)
                .then(res => {
                    this.elemento.estado = !this.elemento.estado;
                    this.$emit("cambioEstado", this.elemento.estado)
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>
