<template>
    <div class="col-12 col-xs-12 col-md-12 col-lg-12  border-bottom pb-4">
        <h3 class="text-center text-muted">Agregar nuevo color</h3>
        <form @submit.prevent="agregarColor" enctype="multipart/form-data">
            <div class="form-group">
                <label for="txtColor">Descripcion:</label>
                <input type="text" placeholder="Ej: rojo" name="txtColor" id="txtColor"
                 class="form-control" v-model="color.descripcion">
            </div>
            <div class="form-group">
                <label for="fileColor">Imagen:</label>
                <input type="file" name="fileColor" id="fileColor" 
                    class="form-control" @change="handleImagen($event)"
                    accept=".png, .jpg, .jpeg">
            </div>
            <div class="text-center">
                <button type="reset" class="btn btn-danger"><i class="fas fa-times"></i></button>
                <button type="submit" class="btn btn-success"><i class="fas fa-check"></i></button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name:'agregar-color',
    props:['id_producto'],
    data(){
        return {
            color:{
                producto: 0,
                imagen:'',
                descripcion:''
            }
        }
    },
    methods:{
        handleImagen:function(e){
            var file = new FileReader()
            file.readAsDataURL(e.target.files[0])
            
            file.onload = (e) => {
                this.color.imagen = e.target.result
            }
        },
        agregarColor:function(){
            this.color.id_producto = this.id_producto
            
            axios.post('http://127.0.0.1:8000/api/color',this.color)
                .then(res=>{
                    const file = document.getElementById('fileColor')
                    if (res) {
                        var color = res.data[0]
                        this.color.descripcion = ''
                        
                        this.$emit("newColor", color)
                        file.value = null
                    }   
                })
                .catch(err=>{
                    console.log(err);                    
                    this.color.descripcion = ''
                    this.color.imagen = ''
                })
        }
    }
}
</script>