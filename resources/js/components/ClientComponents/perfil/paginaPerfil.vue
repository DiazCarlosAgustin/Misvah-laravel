<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-12 mt-4 text-center">
                <h2>Mi perfil</h2>
            </div>
            <div class="col-12 my-2 text-center">
                <h4>Informacion Personal</h4>
            </div>
            <div class="col-12 col-md-6 mt-3">
                <form @submit.prevent="editarPerfil">
                    <div class="form-group">
                        <SfInput
                            v-model="perfil.name"
                            :type="'text'"
                            :label="'Nombre'"
                            :name="'txtNombre'"
                            :valid="true"
                            :required="true"
                            :error-message="errorNombre"
                            :class="'inputCustom'"
                        />
                    </div>
                    <div class="form-group">
                        <SfInput
                            v-model="perfil.telefono"
                            :type="'number'"
                            :label="'Telefono'"
                            :name="'txtTelefono'"
                            :valid="true"
                            :required="true"
                            :error-message="errorTelefono"
                            :class="'inputCustom'"
                        />
                    </div>
                    <div class="form-group">
                        <SfInput
                            v-model="perfil.email"
                            :type="'text'"
                            :label="'Correo'"
                            :name="'txtCorreo'"
                            :valid="true"
                            :required="true"
                            :error-message="errorMail"
                            :class="'inputCustom'"
                        />
                    </div>
                    <div class="col-12 my-3" v-if="alertEdit.msg">
                        <SfAlert :message="alertEdit.msg" :type="alertEdit.tipo" />
                    </div>
                    <div class="d-flex justify-content-end">
                        <SfButton :class="'btnCustom'" :disabled="false">
                            Guardar
                        </SfButton>
                    </div>
                </form>
            </div>
            <div class="col-12 mb-2 mt-4 text-center">
                <h4>Cambiar contraseña</h4>
            </div>
            <div class="col-12 col-md-6 mt-3">
                <form @submit.prevent="newPassword">
                    <div class="form-group">
                        <SfInput
                            v-model="actual"
                            :type="'password'"
                            :label="'Contraseña actual'"
                            :name="'txtactual'"
                            :valid="errorActual.valid"
                            :required="true"
                            :error-message="errorActual.msg"
                            :has-show-password="true"
                        />
                    </div>
                    <div class="form-group">
                        <SfInput
                            v-model="nueva"
                            :type="'password'"
                            :label="'Nueva contraseña'"
                            :name="'txtNueva'"
                            :valid="errorNueva.valid"
                            :required="true"
                            :error-message="errorNueva.msg"
                            :has-show-password="true"
                        />
                    </div>
                    <div class="form-group">
                        <SfInput
                            v-model="confirmacion"
                            :type="'password'"
                            :label="'Confirmar contraseña'"
                            :name="'txtConfirmacion'"
                            :valid="errorConfirmacion.valid"
                            :required="true"
                            :error-message="errorConfirmacion.msg"
                            :has-show-password="true"
                        />
                    </div>
                    <div class="col-12 my-3" v-if="alert.msg">
                        <SfAlert :message="alert.msg" :type="alert.tipo" />
                    </div>
                    <div class="d-flex justify-content-end">
                        <SfButton
                            :class="'btnCustom'"
                            :disabled="false"
                            type="submit"
                        >
                            Guardar
                        </SfButton>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { SfInput, SfButton, SfAlert } from "@storefront-ui/vue";
export default {
    props: {
        perfil: {
            type: Object,
            default: {}
        }
    },
    components: {
        SfInput,
        SfButton,
        SfAlert
    },
    data() {
        return {
            actual: "",
            nueva: "",
            confirmacion: "",
            errorConfirmacion: {
                valid: true,
                msg: ""
            },
            errorNueva: {
                valid: true,
                msg: ""
            },
            errorActual: {
                valid: true,
                msg: ""
            },
            errorNombre: {
                valid: true,
                msg: ""
            },
            errorTelefono: {
                valid: true,
                msg: ""
            },
            errorMail: {
                valid: true,
                msg: ""
            },
            alert: {
                msg: "",
                tipo: ""
            },
            alertEdit: {
                msg: "",
                tipo: ""
            }
        };
    },
    methods: {
        newPassword() {
            this.clearVarObj();
            const params = {
                actual: this.actual,
                nueva: this.nueva,
                id: this.perfil.id
            };
            if (this.nueva.length >= 8) {
                this.errorNueva.msg = "";
                this.errorNueva.valid = true;
                if (this.validarPass()) {
                    axios
                        .post("auth/changePassword", params)
                        .then(res => {
                            if (res.data.Ok) {
                                this.alert.msg = res.data.Ok;
                                this.alert.tipo = "success";
                                this.nueva = "";
                                this.actual = "";
                                this.confirmacion = "";
                            }
                            if (res.data.error) {
                                this.alert.msg = res.data.error;
                                this.alert.tipo = "danger";
                            }
                            if (res.data.fail) {
                                this.errorActual.msg = res.data.fail;
                                this.errorActual.valid = false;
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        });
                } else {
                    this.errorConfirmacion.valid = false;
                    this.errorConfirmacion.msg =
                        "Las contraseñas con coinciden.";
                }
            } else {
                this.errorNueva.valid = false;
                this.errorNueva.msg = "Debe de tener al menos 8 caracteres.";
            }
        },
        validarPass() {
            return this.nueva === this.confirmacion ? true : false;
        },
        editarPerfil() {
            if (
                this.perfil.email != "" &&
                this.perfil.telefono != "" &&
                this.perfil.name != ""
            ) {
                const params = {
                    email: this.perfil.email,
                    telefono: this.perfil.telefono,
                    nombre: this.perfil.name,
                    id: this.perfil.id
                };
                axios
                    .post("auth/editPerfil", params)
                    .then(res => {
                        if (res.data.Ok) {
                            this.alertEdit.msg = res.data.Ok;
                            this.alertEdit.tipo = "success";
                        } else {
                            this.alertEdit.msg = res.data.fail;
                            this.alertEdit.tipo = "danger";
                        }
                    })
                    .catch();
            }
        },
        clearVarObj() {
            // Var Obj
            this.errorConfirmacion.msg = "";
            this.errorConfirmacion.valid = !this.errorConfirmacion.valid;
            this.errorNueva.msg = "";
            this.errorNueva.valid = !this.errorNueva.valid;
            this.errorActual.msg = "";
            this.errorActual.valid = this.errorActual.valid;
            this.errorActual.msg = "";
            this.errorNombre.msg = "";
            this.errorNombre.valid = !this.errorNombre.valid;
            this.errorTelefono.msg = "";
            this.errorTelefono.valid = !this.errorTelefono.valid;
            this.errorMail.msg = "";
            this.errorMail.valid = !this.errorMail.valid;
        }
    },
    watch: {
        errorConfirmacion($new) {
            this.errorConfirmacion = $new;
        },
        errorNueva($new) {
            this.errorNueva = $new;
        },
        errorActual($new) {
            this.errorNueva = $new;
        },
        alert($new) {
            this.alert = $new;
        }
    }
};
</script>
<style>
.btnCustom {
    --button-background: #e91e63;
    --button-color: white;
}
.inputCustom {
    --input-label-required: black;
    --input-label-color: black;
    --input-color: black;
}
</style>
