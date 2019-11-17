<template>
    <div class="col-12">
        <div class="row d-flex  justify-content-center">
            <div class="col-12 text-center">
                <h5 class="text-muted">Menu de navegación</h5>
            </div>
        </div>
       <div class="row d-flex justify-content-center">
            <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                <form  @submit.prevent="submit" method="post">
                    <div class="form-group">
                        <label for="txtColorFondo">Color de fondo:</label>
                        <input type="text" name="Fondo" id="txtColorFondo" v-model="fondo" placeholder="#333111" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="txtColorLetra">Color de letra/ iconos:</label>
                        <input type="text" name="Letra" id="txtColorLetra"  v-model="letra" placeholder="#333111" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="txtColorLetra">Logo:</label>
                        <input type="file" name="txtFile" id="File" ref="logo"  class="form-control" @change="logotext">
                    </div>
                    <div class="form-group d-flex">
                        <button class="btn btn-primary ml-auto" type="submit">Aceptar</button>
                    </div>
                </form>
            </div>
       </div>
    </div>
</template>
<script>
import { log } from 'util'
export default {
    name:'menu-form',
    data() {
        return {
            logo:'',
            letra:'',
            fondo:'',
        }
    },
    methods: {
        submit(){
            const params = {color: this.fondo, 
                            letra: this.letra, 
                            logo:this.logo
                        }
            // tengo que pasarlo como json
            console.log(params);
            
            axios.post('http://127.0.0.1:8000/api/menu',params )
                .then(Response => console.log(Response))
                .catch(err => console.log(err))
        },
        logotext(e){
            this.logo = e.target.files[0].name            
        }
    },
}
</script>