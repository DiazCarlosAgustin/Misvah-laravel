<template>
    <div class="col-12 col-xs-12 col-md-12 col-lg-12 mt-4 border-bottom">
        <h3 class="text-muted text-center">Generar cupon de descuento</h3>
        <form action="" @submit.prevent="nuevoCupon">
            <div class="form-group">
                <label for="txtCuponDescuento">Valor del cupon: </label>
                <input type="number" name="txtCuponDescuento"  
                    class="form-control" placeholder="$0" v-model="monto" 
                    min="0" required>
                
            </div>
            <div class="form-group text-center">
                <button type="reset" class="btn btn-danger"><i class="fas fa-times"></i></button>
                <button type="submit" class="btn btn-success"><i class="fas fa-check"></i></button>
            </div>
        </form>
        <div class="w-100">
            <div class="alert alert-danger alert-dismissible fade show" role="alert"  
                 @click="err = ''" v-if=" err.length > 0">
                <strong>{{err}} </strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="alert alert-success alert-dismissible fade show" role="alert" 
                v-if="cupon.length > 0"  @click="cupon = ''">
                <strong>Cupon generado! </strong> "{{cupon}}"
                <button type="button" class="close" data-dismiss="alert" aria-label="Close" >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'generar-cupon-descuento',
    props:['id'],
    data(){
        return{
            err:'',
            cupon:'',
            monto:Number
        }
    },
    methods:{
        nuevoCupon:function(){
            const params = {
                monto: this.monto
            }
            this.cupon = ""
            this.err = ""
            axios.post('http://127.0.0.1:8000/api/cupon',params)
                .then(res => {
                    this.cupon = res.data.codigo
                    this.monto = 0
                })
                .catch(err =>{
                    console.log(err);
                    this.err = "No se pudo generar el cupon, intente nuevamente."
                })
        }
    }
}
</script>
<style scoped>

</style>
