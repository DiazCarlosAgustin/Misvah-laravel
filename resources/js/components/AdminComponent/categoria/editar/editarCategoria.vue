<template>
    <div class="container d-nueva-categoria">
        <div class="row d-flex justify-content-center">
            <div class="col-12 text-center mt-3">
                <h2>Editar categoria</h2>
            </div>
        </div>
        <div class="row d-flex justify-content-center mt-5">
            <div class="col-12 col-xs-12 col-md-6">
                <form role="form" method="put"  enctype="multipart/form-data" @submit.prevent="editar">
                        <div class="form-group ">
                            <label for="txtNombreCategoria" class="">Nombre:</label>
                            <div class="">
                                <input type="text"  class="form-control" id="txtNombreCategoria" 
                                    v-model="nombre">
                            </div>
                        </div>
                        <div class="form-group row d-flex justify-content-center">
                            <label for="txtNombreCategoria" class="">Imagen:</label>
                            <div class=" col-sm-12 d-block text-center">
                                <img :src="`../../../img/${categoria.imagen_categoria}`" v-if="!file" alt="" class="d-block mx-auto img-edit">
                                <img :src="imagen" v-else width="350" alt="imagen categoria" class="d-block mx-auto img-edit">
                                <button v-show="!edit" class="btn btn-sm btn-success" @click.prevent="showEdit">Editar</button>
                            </div>
                            <div class="col-sm-10 my-3" v-if="edit">
                                <input type="file" @change="fileImage" class="form-control d-block" name="fileImagenCategoria" id="fileImagenCategoria" >
                                <button class="btn btn-sm btn-success" @click.prevent="cargarImagen" v-if="imagen.length > 0">Aceptar</button>
                                <button class="btn btn-sm btn-danger" @click.prevent="cancelEdit">Cancelar</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="txtDescripcionCategoria" class="">Descripcion:</label>
                            <div class="">
                                <textarea name="txtDescripcionCategoria" id="txtDescripcionCategoria" 
                                    cols="30" rows="10" class="form-control" v-model="descripcion">
                                </textarea>
                            </div>
                        </div>
                        <div class="form-group float-right">
                            <a href="/admin/categorias" class="btn btn-danger m-1">Volver</a>
                            <button type="submit" class="btn btn-primary m-1">Aceptar</button>
                        </div>
                </form>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name:'editar-categoria',
    props:['categoria'],
    data() {
        return {
            edit:false,
            nombre: this.categoria.nombre,
            id: this.categoria.id,
            imagen: '',
            descripcion: this.categoria.descripcion,
            file:'',
        }
    },
    mounted(){
        console.log(this.categoria);
        
    },
    methods: {
        cancelEdit: function(){
            this.edit = false
            this.imagen = ''
        },
        showEdit: function(){
            this.edit = !this.edit
        },
        fileImage:function(e){
            var file = new FileReader()
            file.readAsDataURL(e.target.files[0])

            file.onload = (e) =>{
                this.imagen = e.target.result
            }
        },
        cargarImagen: function(){
            this.file = true
            this.edit = !this.edit
        },
        editar: function(){
            if (this.imagen.length == 0){
                this.imagen =  this.categoria.imagen_categoria
            }
            const param = {
                nombre: this.nombre,
                imagen: this.imagen,
                descripcion: this.descripcion
            }
            console.log(param);
            
            axios.put('http://127.0.0.1:8000/api/categoria/' + this.id ,param)
                .then(res => {
                    if (res.data.messagge == 'Se actualizo correctamete.') {
                         window.location.href = "http://127.0.0.1:8000/admin/categorias"
                    }
                })
                .catch(err =>{
                    console.log(err);
                    
                })
        }
    },
}
</script>
<style scoped>
    .img-edit{
        width: 100%;
    }
</style>