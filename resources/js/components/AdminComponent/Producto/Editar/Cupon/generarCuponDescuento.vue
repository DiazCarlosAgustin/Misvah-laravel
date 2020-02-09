<template>
    <div class="col-12 col-xs-12 col-md-12 col-lg-12 mt-4 border-bottom">
        <h3 class="text-muted text-center">Generar cupon de descuento</h3>
        <form action="">
            <div class="form-group">
                <label for="txtCuponDescuento">Valor del cupon: </label>
                <input type="text" name="txtCuponDescuento"  class="form-control" placeholder="$">
                
            </div>
            <div class="form-group text-center">
                <button type="reset" class="btn btn-danger"><i class="fas fa-times"></i></button>
                <button type="submit" class="btn btn-success"><i class="fas fa-check"></i></button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name:'generar-cupon-descuento',
    data(){
        return{

        }
    }
}
</script>
<style scoped>

</style>
