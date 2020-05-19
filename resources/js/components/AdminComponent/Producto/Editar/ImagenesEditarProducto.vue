<template>
    <tr v-if="imagen">
        <td class="align-middle text-center">
            <img
                :src="`../../../img/productos/${imagen.imagen_color_producto}`"
                alt="Imagen color producto"
                class="m-1"
                width="70"
                height="70"
            />
        </td>
        <td class="align-middle text-center">{{ imagen.color.descripcion }}</td>
        <td class="align-middle text-center">
            <button
                type="button"
                class="btn btn-success py-2 px-3 text-center align-middle"
            >
                <i class="fas fa-edit"></i>
            </button>
            <button
                type="button"
                class="btn btn-danger py-2 px-3 text-center align-middle"
                @click="deleteImagen"
            >
                <i class="fas fa-trash"></i>
            </button>
        </td>
    </tr>
</template>
<script>
export default {
    name: "imagen-editar-producto",
    props: ["imagen"],
    data() {
        return {};
    },
    mounted(){console.log(this.imagen)},
    methods: {
        deleteImagen: function() {
            axios
                .delete("http://127.0.0.1:8000/api/imagen/" + this.imagen.id)
                .then(res => {
                    this.$emit("deleteImagen");
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>
<style scoped></style>
