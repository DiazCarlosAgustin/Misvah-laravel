<template>
    <div class="col-12 col-xs-12 col-md-12 col-lg-12 my-4 ">
        <h3 class="text-muted text-center">Generar Oferta</h3>
        <div class="w-100 my-2">
            <div class="alert alert-danger alert-dismissible fade show" role="alert"  
                v-if="err" >
                <strong>{{err}} </strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="alert alert-success alert-dismissible fade show" role="alert"  
                v-if="ok">
                <strong>{{ok}} </strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
        <form action="" @submit.prevent="newOferta">
            <div class="form-group">
                <label for="txtCuponDescuento">% en descuento: </label>
                <input type="text" name="txtCuponDescuento" id="txtCuponDescuento" 
                    class="form-control" placeholder="%"
                    v-model="porcentaje">
            </div>
            <div class="form-group">
                <label for="txtCuponDescuento">Desde: </label>
                <input type="date" name="dtDesdeDescuanto" id="dtDesdeDescuanto"
                    class="form-control " v-model="desde" >
            </div>
            <div class="form-group">
                <label for="ctDescuentoHasta">Hasta: </label>
                <input type="date" name="ctDescuentoHasta" id="ctDescuentoHasta" 
                v-model="hasta" class="form-control">
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
    name:'generar-oferta',
    props:['id'],
    data(){
        return{
            desde:'',
            hasta:'',
            porcentaje:0,
            err:'',
            ok:''
        }
    },
    methods:{
        newOferta:function(){
            this.ok = ''
            this.err = ''
            const hasta = new Date(this.hasta)
            const desde = new Date(this.desde)

            const tiempo =  hasta.getTime()- desde.getTime()

            let dias = Math.round( (1000*60*60*24) / tiempo)            
            
            console.log(dias);
            
            if(dias >= 0){
                this.err = "La fecha Hasta debe ser mayor a la fecha Desde."
            }
            else{
                if(this.porcentaje <= 0){
                    this.err = "El porcentaje debe de ser mayor a 0."
                }
                else{
                    const params = {
                        producto_id : this.id,
                        porcentaje : this.porcentaje,
                        desde : this.desde,
                        hasta : this.hasta
                    }
                    axios.post('http://127.0.0.1:8000/api/oferta',params)
                        .then(res =>{
                            this.ok = res.data.success
                            this.err = res.data.err
                        })
                        .catch(err =>{
                            console.log(err);
                        })
                }
            }
        },
    },
}
</script>