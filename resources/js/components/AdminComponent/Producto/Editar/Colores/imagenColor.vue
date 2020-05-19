<template>
    <div class="col-12 col-xs-12 col-md-12 col-lg-12 mt-4 border-bottom">
        <h3 class="text-center text-muted">Agregar nueva imagen</h3>
        <form @submit.prevent="agregarImagen" enctype="multipart/form-data">
            <div class="form-group">
                <label for="txtStock">Color:</label>
                <lista-color-imagen
                    v-for="color in colors"
                    :color="color"
                    :key="color.id"
                    @selectColor="getColorId"
                />
            </div>
            <div class="form-group">
                <label for="txtimagen">imagen:</label>
                <input
                    type="file"
                    name="txtimagen"
                    id="txtimagen"
                    class="form-control"
                    @change="handleImagen($event)"
                    accept=".png, .jpg, .jpeg"
                />
            </div>
            <div class="text-center form-group">
                <button type="reset" class="btn btn-danger">
                    <i class="fas fa-times"></i>
                </button>
                <button type="submit" class="btn btn-success">
                    <i class="fas fa-check"></i>
                </button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: "imagen-color",
    props: ["colors", "id"],
    data() {
        return {
            color: 0,
            id_producto: this.id,
            imagen: "",
        };
    },
    methods: {
        handleImagen: function (e) {
            let file = new FileReader();
            file.readAsDataURL(e.target.files[0]);
            file.onload = (e) => {
                this.imagen = e.target.result;
            };
        },
        agregarImagen: function () {
            const params = {
                id_color: this.color,
                id_producto: this.id_producto,
                imagen: this.imagen,
            };
            axios
                .post("http://127.0.0.1:8000/api/imagen", params)
                .then((res) => {
                    this.updateImagen(res.data);
                    document.getElementById('txtimagen').value = ""
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        updateImagen: function (imagen) {
            this.$emit("updateImagen", imagen);
        },
        getColorId: function ($id) {
            this.color = $id;
        },
    },
};
</script>
