<template>
    <div class="container">
        <div class="row r-registrarse text-center d-flex justify-content-center">
            <div class="col-12 col-sm-12 col-md-6">
                <div class="my-4 ">
                    <h2>Registrarse</h2>    
                </div>
                <div class="form-registrarse text-left">
                    <form @submit.prevent="register()">
                        <div class="d-campos py-1">
                            <label class="text-left">Nombre <span class="text-danger"> * </span></label>
                            <input type="text" name="name" class="form-control" required v-model="name" autofocus>
                                <span class="invalid-feedback" role="alert">
                                    <strong></strong>
                                </span>
                        </div>
                        <div class="d-campos py-1">
                            <label class="text-left">Email  <span class="text-danger"> * </span></label>
                            <input id="email" type="email" class="form-control" name="email" required v-model="email">
                            <span class="invalid-feedback" role="alert">
                                <strong></strong>
                            </span>
                        </div>
                        <div class="d-campos py-1">
                            <label class="text-left">Telefono </label>
                            <input class="form-control mb-2 " type="tel" name="telefono" id="telefono"  v-model="telefono">
                        </div>
                        <div class="d-campos py-1">
                            <label class="text-left">Contraseña  <span class="text-danger"> * </span></label>
                            <input id="password" type="password" class="form-control" name="password" required v-model="password">
                                <span class="invalid-feedback" role="alert">
                                    <strong></strong>
                                </span>
                        </div>
                        <div class="d-campos py-1">
                            <label class="text-left">Confirmar contraseña  <span class="text-danger"> * </span></label>
                            <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                        </div>
                        <div class="form-group">
                            <button class="btn btn-block my-4 pink text-white" type="submit">Aceptar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'web-registrarse',
    data(){
        return{
            email:'',
            name:'',
            password:'',
            telefono:''
        }
    },
    methods: {
        register(){
            const params = {
                name: this.name,
                email: this.email,
                password: this.password,
                telefono: this.telefono
            }
            axios.post('auth/register',this.params)
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    alert(err);
                })
        }
    }
}
</script>