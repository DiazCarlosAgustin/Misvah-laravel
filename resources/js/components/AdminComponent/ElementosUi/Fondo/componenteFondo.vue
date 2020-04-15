<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-12 text-center">
                <div class="h5">Imagen de fondo</div>
            </div>
            <div class="col-12 col-sm-12 co-md-8 col-lg-6">
                <form
                    @submit.prevent="agregarFondo"
                    role="form"
                    enctype="multipart/form-data"
                >
                    <div class="form-group">
                        <label for="ImagenFondo">Imagen de fondo:</label>
                        <input
                            type="file"
                            name="ImagenFondo"
                            id="ImagenFondo"
                            class="form-control"
                            @change="image($event)"
                        />
                    </div>
                    <div class="form-group d-flex">
                        <button type="submit" class="btn btn-primary ml-auto">
                            Aceptar
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-12">
                <div class="h5">
                    Historial de cambios
                </div>
            </div>
            <div class="col-12">
                <tabla-fondo
                    :imagenes="imagenes"
                    @estadoFondo="estadoFondo"
                ></tabla-fondo>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "fondo-componente",
    data() {
        return {
            imagen: "",
            imagenes: []
        };
    },
    async beforeMount() {
        axios
            .get("http://127.0.0.1:8000/api/fondo")
            .then(res => {
                this.imagenes = res.data;
            })
            .catch(err => {
                console.log(err);
            });
    },
    methods: {
        estadoFondo:function($i,$estado){
            this.imagenes[$i].estado = $estado
        },
        image: function(e) {
            var file = new FileReader();

            file.readAsDataURL(e.target.files[0]);

            file.onload = e => {
                this.imagen = e.target.result;
            };
        },
        agregarFondo: function() {
            const param = {
                imagen: this.imagen
            };
            axios
                .post("http://127.0.0.1:8000/api/fondo", param)
                .then(res => {
                    this.imagenes.push(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>
