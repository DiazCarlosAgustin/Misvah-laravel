<template>
    <div class="col-12 col-xs-12 col-md-12 col-lg-12 my-4 ">
        <h3 class="text-muted text-center">Generar Oferta</h3>
        <div class="w-100 my-2">
            <div
                class="alert alert-danger alert-dismissible fade show"
                role="alert"
                v-if="err"
            >
                <p>{{ err }}</p>
                <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                    @click="err = ''"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div
                class="alert alert-success alert-dismissible fade show"
                role="alert"
                v-if="ok"
            >
                <p>{{ ok }}</p>
                <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                    @click="err = ''"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
        <form action="" @submit.prevent="newOferta">
            <div class="form-group">
                <label for="txtCuponDescuento">% en descuento: </label>
                <input
                    type="text"
                    name="txtCuponDescuento"
                    id="txtCuponDescuento"
                    class="form-control"
                    placeholder="%"
                    v-model="porcentaje"
                />
            </div>
            <div class="form-group">
                <div class="d-block">
                    <label for="txtCuponDescuento" class="demonstration d-block"
                        >Desde:</label
                    >
                    <el-date-picker
                        class="w-100"
                        v-model="desde"
                        format="dd/MM/yyyy"
                        type="date"
                        placeholder="Desde"
                        :picker-options="pickerOptions"
                    >
                    </el-date-picker>
                </div>
            </div>
            <div class="form-group">
                <div class="d-block">
                    <label for="txtCuponDescuento" class="demonstration d-block"
                        >Hasta:</label
                    >
                    <el-date-picker
                        class="w-100"
                        format="dd/MM/yyyy"
                        v-model="hasta"
                        type="date"
                        :picker-options="pickerOptions"
                        placeholder="Hasta"
                    >
                    </el-date-picker>
                </div>
            </div>
            <div class="form-group text-center">
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
import moment from "moment";
moment.locale("es");
export default {
    name: "generar-oferta",
    props: ["id"],
    data() {
        return {
            desde: moment(),
            hasta: moment(),
            porcentaje: 0,
            err: "",
            ok: "",
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() < Date.now();
                }
            }
        };
    },
    methods: {
        newOferta: function() {
            this.ok = "";
            this.err = "";
            var hoy = moment().format("YYYY-MM-DD");
            var desde = moment(this.desde).format("YYYY-MM-DD");
            var hasta = moment(this.hasta).format("YYYY-MM-DD");

            if (hoy <= desde) {
                if (desde != hasta) {
                    if (this.porcentaje <= 0) {
                        this.err = "El porcentaje debe de ser mayor a 0.";
                    } else {
                        const params = {
                            producto_id: this.id,
                            porcentaje: this.porcentaje,
                            desde: desde,
                            hasta: hasta
                        };
                        axios
                            .post("http://127.0.0.1:8000/api/oferta", params)
                            .then(res => {
                                this.ok = res.data.success;
                                this.err = res.data.err;
                            })
                            .catch(err => {
                                console.log(err);
                            });
                    }
                } else {
                    this.err =
                        "La fecha Desde y Hasta no deben de ser iguales.";
                }
            } else {
                this.err =
                    "La fecha desde debe ser mayor o igual a la fecha de hoy.";
            }
        }
    }
};
</script>
