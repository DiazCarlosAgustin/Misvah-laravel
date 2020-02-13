<template>
    <div class="col-12 col-xs-12 col-md-12 col-lg-12 mt-4 border-bottom">
        <h3 class="text-center text-muted">Agregar nueva imagen</h3>
        <form action="" >
            
            <div class="form-group">
                <label for="txtStock">Color:</label>
                <lista-color-imagen v-for="color in colors" 
                    :color="color" :key="color.id" />   
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
    props:['colors'],
    data(){
        return{}
    }
}
</script>