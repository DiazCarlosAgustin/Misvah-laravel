<template>
    <div class="container">
        <div class="row r-registrarse text-center d-flex justify-content-center">
            <div class="col-12 col-sm-12 col-md-6">
                <div class="my-4 ">
                    <h2>Registrarse</h2>    
                </div>
                <div class="form-registrarse text-left">
                    <form @submit.prevent="register()" role="form">
                        <div class="d-campos py-1">
                            <label class="text-left">Nombre <span class="text-danger"> * </span></label>
                            <input type="text" name="name" class="form-control" required v-model="name" autofocus>
                        </div>
                        <div class="d-campos py-1">
                            <label class="text-left">Email  <span class="text-danger"> * </span></label>
                            <input id="email" type="email" class="form-control" name="email" 
                                required v-model="email"  @input="clearMessagge()">
                            <div v-show="error.length > 0" class="text-left">
                                <span class="text-danger">
                                    {{error}}
                                </span>
                            </div>
                        </div>
                        <div class="d-campos py-1">
                            <label class="text-left">Telefono </label>
                            <input class="form-control mb-2 " type="tel" name="telefono" id="telefono"  v-model="telefono">
                        </div>
                        <div class="d-campos py-1">
                            <label class="text-left">Contraseña  <span class="text-danger"> * </span></label>
                            <input id="password" type="password" class="form-control" 
                                name="password" required v-model="password"
                                @input="clearMessagge()">
                                <span v-show="passLength.length > 0" class="text-danger" role="alert">
                                    <strong>{{passLength}}</strong>
                                </span>
                        </div>
                        <div class="d-campos py-1">
                            <label class="text-left">Confirmar contraseña  <span class="text-danger"> * </span></label>
                            <input id="password-confirm" v-model="passwordConfirm" type="password" 
                                class="form-control" name="password_confirmation" 
                                required autocomplete="new-password">
                            <div v-show="validationPassword" class="text-left">
                                <span  class="text-danger">
                                    <strong>{{errorPassword}}</strong>
                                </span>
                            </div>
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
            passwordConfirm:'',
            telefono:'',
            error:'',
            errorPassword:'',
            passLength:''
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
            if(this.password.length >= 8){
                axios.post('auth/register',params)
                    .then(res => {
                        if(res.data.error != ""){
                            this.error = res.data.error
                        }
                        else{
                            this.error = ""
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        
                    })
            }
            else{
                this.passLength = "La contraseña tiene que tener mas de 8 caracteres."
            }
        },
        clearMessagge: function(){
            this.passLength = ''
            this.error = ''
            
        }
    },
    computed: {
        validationPassword: function(){
            if(this.password != this.passwordConfirm){
                this.errorPassword = "Las contraseñas no coinciden."
                return true
            }
            else{
                this.errorPassword = ''
                return false
            }
            
        }
    },
}
</script>