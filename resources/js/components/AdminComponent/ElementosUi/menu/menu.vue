<template>
    <div class="col-12">
        <div class="row d-flex  justify-content-center">
            <div class="col-12 text-center">
                <h5 class="text-muted">Menu de navegación</h5>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                <div
                    class="alert alert-danger alert-dismissible fade show"
                    role="alert"
                    v-if="error != ''"
                >
                    {{ error }}
                    <button
                        type="button"
                        class="close aling-middle"
                        data-dismiss="alert"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form @submit.prevent="submit" method="post">
                    <div class="form-group">
                        <label for="txtColorFondo">Color de fondo:</label>
                        <div class="form-row w-100">
                            <div class="col-10">
                                <input
                                    type="text"
                                    placeholder="#000"
                                    v-model="colorFondo"
                                    name="txtColorFondo"
                                    id="ColorFondo"
                                    class="form-control"
                                />
                            </div>
                            <div class="col-2">
                                <el-color-picker
                                    v-model="colorFondo"
                                ></el-color-picker>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="txtColorLetra"
                            >Color de letra/ iconos:</label
                        >
                        <div class="form-row w-100">
                            <div class="col-10">
                                <input
                                    type="text"
                                    placeholder="#000"
                                    v-model="colorLetra"
                                    name="txtColorLetra"
                                    id="colorLetra"
                                    class="form-control"
                                />
                            </div>
                            <div class="col-2">
                                <el-color-picker
                                    v-model="colorLetra"
                                ></el-color-picker>
                            </div>
                        </div>
                    </div>
                    <div class="form-group d-flex">
                        <button class="btn btn-primary ml-auto" type="submit">
                            Aceptar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "menu-form",
    data() {
        return {
            colorFondo: null,
            colorLetra: null,
            error: ""
        };
    },
    methods: {
        submit() {
            const params = {
                color: this.colorFondo,
                letra: this.colorLetra
            };
            // tengo que pasarlo como json
            this.error = "";
            axios
                .post("http://127.0.0.1:8000/api/menu", params)
                .then(res => {
                    if (res.data.mensaje) {
                        this.error = res.data.mensaje;
                    } else {
                        this.$emit("newStyleMenu", res.data);
                    }
                })
                .catch(err => console.log(err));
        }
    }
};
</script>
