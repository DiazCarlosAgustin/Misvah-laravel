<template>
    <div class="col-12 col-xs-12 col-md-12 col-lg-8 border-right">
        <form action="" >
            <div class="form-group">
                <label for="txtCodProducto">Codigo:</label>
                <input v-model="producto.codigo" type="text" class="form-control" name="txtCodProducto" id="txtCodProducto">
            </div>
            <div class="form-group">
                <label for="txtNombreProducto">Nombre:</label>
                <input type="text" class="form-control" name="txtNombreProducto" id="txtNombreProducto" v-model="producto.nombre">
            </div>
            <div class="form-group">
                <label for="cbCategoriaProducto">Categoria:</label>
                <select name="" id="" class="custom-select" v-model="producto.categoria.nombre">
                    <option value="0" disabled>Seleccione una categoria</option>
                    <option v-for="categoria in categorias" :key="categoria.id">{{categoria.nombre}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="txtPrecioProducto">Precio:</label>
                <input type="number" name="txtPrecioProducto" id="txtPrecioProducto" min="0" v-model="producto.precio" class="form-control">
            </div>
            <div class="form-group">
                <label for="txtColoresProducto">Colores:</label>
                <div class="table-wrapper-scroll-y my-custom-scrollbar">
                    <table class="table  mb-0">
                        <thead>
                            <tr>
                                <th class="align-center text-center align-middle">Color</th>
                                <th class="align-center text-center align-middle">Stock</th>
                                <th class="align-center text-center align-middle">Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <color-editar-producto v-for="(color,index) in colors" 
                                :key="index" 
                                :color="color" 
                                @updateStock="updateStock(index,...arguments)"/>
                        </tbody>
                    </table>
                </div>

            </div>
            <div class="form-group">
                <label for="txtPrecioProducto">Imagenes:</label>
                <div class="table-responsive tabla-imagen-producto">
                    <table class="table table-striped">
                        <thead>
                            <tr class="text-center">
                                <th>Imagen</th>
                                <th>Color asoc.</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <imagen-editar-producto v-for="imagen in imagenes" :key="imagen.id" :imagen="imagen"></imagen-editar-producto>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="form-group">
                <label for="txtDescripcionProducto">Descripcion:</label>
                <textarea name="txtDescripcionProducto" id="txtDescripcionProducto" class="form-control w-100" cols="30" rows="10" v-model="producto.descripcion"></textarea>
            </div>
            <div class="form-group">
                <label for="txtInformacionProducto">Informacion adicional:</label>
                <textarea name="txtInformacionProducto" id="txtInformacionProducto" class="form-control w-100" cols="30" rows="10" v-model="producto.infomacion"></textarea>
            </div>
            <div class="form-group text-right">
                <button type="submit" class="btn btn-primary">Guardar cambios</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name:'editar-producto',
    props:['producto','colores'],
    data(){
        return {
            categorias:[],
            imagenes:[]
        }
    },
    async beforeMount(){
        this.getCategoria()
    },
    methods:{
        getCategoria:function() {
            axios.get('http://127.0.0.1:8000/api/categoria')
                .then(res =>{
                    this.categorias = res.data
                })
                .catch(err => {
                    console.log(err);
                })
        },
        updateStock:function($i,$stock){
            this.colores[$i].stock_color.stock = $stock
        }
    },
    computed:{
        colors:function(){
            return this.colores
        }
    }
}
</script>
<style scoped>
    .tabla-imagen-producto{
        position: relative;
        height: 185px;
        overflow: auto;
    }
</style>
