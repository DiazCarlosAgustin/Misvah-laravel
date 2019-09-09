<template>
    <div class="col-12 col-xs-12 col-md-12 col-lg-12 mt-4 border-bottom">
        <h3 class="text-center text-muted">Agregar nueva imagen</h3>
        <form action="" >
            
            <div class="form-group">
                <label for="txtStock">Color:</label>
                <lista-color v-for="color in colores" :color="color" :key="color.id"></lista-color>   
            </div>
            <div class="form-group">
                <label for="txtimagen">imagen:</label>
                <input type="file" name="txtimagen" id="txtimagen" class="form-control">
            </div>
            <div class="text-center form-group">
                <button type="reset" class="btn btn-danger"><i class="fas fa-times"></i></button>
                <button type="submit" class="btn btn-success"><i class="fas fa-check"></i></button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name:'imagen-color',
    data(){
        return{
            colores:[
            {
                id:1,
                nombre: 'rojo',
                stock: 10
            },
            {
                id:2,
                nombre: 'negro',
                stock: 3
            },
            {
                id:3,
                nombre: 'gris',
                stock: 7
            } ,
            {
                id:4,
                nombre: 'rosa',
                stock: 7
            },
            {
                id:5,
                nombre: 'marron',
                stock: 7
            }
        ]
        }
    }
}
</script>