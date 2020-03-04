<template>
    <div class="container">
        <div class="row d-flex justify-content-center mt-3">
            <div class="col-12 col-xs-12 col-md-6">
                <div class="text-center">
                    <h2>Agregar nuevo productos</h2>
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center my-3">
            <div class="col-12 col-xs-12 col-md-6">
                <div class="group-form">
                    <label for="archivoProducto">Archivo .cvs</label>
                    <input type="file" accept=".csv" name="archivoProducto" id="archivoProducto" class="form-control" @change="leerExcel">
                </div>
            </div>
        </div>

        <div class="row justify-content-center">
            <div v-if="productos.length > 0" class="col-12 table-responsive">
                <table class="table table-striped ">
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Nombre</th>
                            <th>Categoria</th>
                            <th>Precio</th>
                            <th>Descripcion</th>
                            <th>Informacion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <lista-nuevo-producto v-for="(producto, index) in allProductos" 
                            :key="producto.id"
                            :producto="producto"
                            :categorias="categorias"
                            @cambioCategoria="cambioCategoria(index,...arguments)"/>
                        <tr>
                            <td colspan="6">
                                <button class="btn btn-success float-right" 
                                    @click="cargarProducto">
                                    Guardar
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'agregar-producto',
    data() {
        return {
            productos:[],
            categorias:[],
            post:[]
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/categoria')
            .then(res => {
                this.categorias = res.data
            })
            .catch(err =>{
                console.log(err);
            })
    },
    methods:{
        leerExcel:function(e){
            const file = new FileReader()

            file.readAsText(e.target.files[0])
           
            file.onload = () =>{
                const text = file.result
                this.productos = this.csvJson(text)
            }
        },
        csvJson:function(text){
            var linesArray= text.split(/\r\n|\n/);
            let lines = []
            var producto = []
            let cabecera = linesArray[0].split(";")

            for (let i = 1; i < linesArray.length; i++) {
                var CurrentLine =  linesArray[i].split(";")
                
                if(CurrentLine.length == cabecera.length){
                    let prod = {"codigo":CurrentLine[0],
                                "nombre":CurrentLine[1],
                                "categoria":'',
                                "precio":CurrentLine[2],
                                "descripcion":CurrentLine[3],
                                "informacion":CurrentLine[4]}
                    producto.push(prod)
                }
            }
            return producto
        },
        cambioCategoria: function($id,$categoria){
            this.productos[$id].categoria = $categoria
            console.log(this.productos[$id].categoria);    
        },
        cargarProducto: function(){
            this.post = this.productos.filter(p => p.categoria > 0)
            this.productos = this.productos.filter(p => p.categoria == 0)
            for (let i = 0; i < this.post.length; i++) {
                const param = {
                    cod:this.post[i].codigo,
                    nombre:this.post[i].nombre,
                    categoria:this.post[i].categoria,
                    precio:this.post[i].precio,
                    descripcion:this.post[i].descripcion,
                    informacion:this.post[i].informacion
                }
                axios.post('http://127.0.0.1:8000/api/producto',param)
                    .then(res =>{
                        console.log(res.data);
                    })
                    .catch(err =>{
                        console.log(err);
                    })
            }
        }
    },
    computed: {
        allProductos(){
            return this.productos
        }
    },
}
</script>
<style lang="css">
    
</style>