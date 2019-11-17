<template>
    <div class="row r-acceder text-center d-flex justify-content-center">
        <div class="col-12 col-sm-12 col-md-12">
            <div class="h3 mt-5 ">
                Acceder
            </div>
        </div>
        <div class="col-12 col-xs-12 col-md-6 mt-4">
            <form @submit.prevent="login">
                <div class="form-group text-left">
                    <input type="email" name="txtAccederMail" id="txtAccederMail" class="form-control mb-4" placeholder="E-mail" required>
                </div>
                <div class="form-group text-left">
                    <input type="password" name="txtAccederPass" id="txtAccederPass" class="form-control  mb-4" placeholder="Contraseña" required>
                </div>
                <div class="d-flex justify-content-around">
                    <div>
                        <!-- Remember me -->
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember">
                            <label class="custom-control-label" for="defaultLoginFormRemember">Recordarme</label>
                        </div>
                    </div>
                    <div>
                        <!-- Forgot password -->
                        <a href="">¿Olvidaste tu contraseña?</a>
                    </div>
                </div>
                <div class="form-group">
                    <button class="btn btn-block my-4 pink" :style="{color:textcolor}" type="submit">Acceder</button>
                </div>
                <div class="form-group">
                    <p>¿No estas registrado?
                        <a href="/registrarse"> Registrarse</a>
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name:'web-acceder',
    data(){
        return{
            // bgcolor: '#ffb4ac',
            textcolor: '#fff',
            params:{
                email:'',
                password:''
            }
        }
    },
    methods: {
        login(){
            var token = document.head.querySelector('meta[name="csrf-token"]')
            window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
            axios.post('/login',this.params)
                .then(res =>{
                    console.log(res)
                    let token = res.data.token
                    console.log(token);
                    localStorage.setItem('token',token)
                    this.$router.push('/')
                    
                })
        }
    },
}
</script>
<style scoped>

</style>
