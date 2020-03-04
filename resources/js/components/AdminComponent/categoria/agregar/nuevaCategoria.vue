<template>
    <div class="container d-nueva-categoria my-3">
        <div class="row d-flex justify-content-center mt-4">
            <div class="col-12 text-center mt-5">
                <h2>Nueva categoria</h2>
            </div>
        </div>
        <div class="row d-flex justify-content-center mt-5">
            <div class="col-12 col-xs-12 col-md-8 text-center">
                <form @submit.prevent="agregar" role="form" enctype="multipart/form-data">
                        <div class="form-group row">
                            <label for="txtNombreCategoria" class="col-sm-2 col-form-label">Nombre:</label>
                            <div class="col-sm-10">
                                <input type="text" v-model="nombre" class="form-control" id="txtNombreCategoria" placeholder="Nombre">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="txtNombreCategoria" class="col-sm-2 col-form-label">Imagen:</label>
                            <div class="col-sm-10">
                                <input type="file"  class="form-control" id="txtFotoCategoria" @change="image($event)">
                            </div>
                        </div>
                        <div class="form-group row">
                                <label for="txtDescripcionCategoria" class="col-sm-2 col-form-label">Descripcion:</label>
                                <div class="col-sm-10">
                                    <textarea name="txtDescripcionCategoria" id="txtDescripcionCategoria" v-model="descripcion" class="form-control" placeholder="Descripcion" cols="30" rows="10"></textarea>
                                </div>
                            </div>
                        <div class="form-group row float-right">
                            <button type="submit" class="btn btn-pink m-1 btn-lg">Aceptar</button>
                        </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'agregar-categoria',
    data() {
        return {
            nombre:'',
            imagen:'',
            descripcion: '',
        }
    },
    methods: {
        image:function(e){
            var file = new FileReader()
            
            file.readAsDataURL(e.target.files[0])
            
            file.onload = (e) => {
                this.imagen = e.target.result
            }
        },
        agregar: function(){
            const params = {
                nombre: this.nombre,    
                descripcion: this.descripcion,
                imagen: this.imagen
            }
            axios.post('http://127.0.0.1:8000/api/categoria',params)
                .then(res => {
                    console.log(res.data);
                })
                .catch(err =>{
                    console.log(err);    
                })
        }
    },
}
</script>
<style scoped>

</style>