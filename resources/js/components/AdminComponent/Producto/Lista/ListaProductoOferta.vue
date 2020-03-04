<template>
    <div class="row mt-4 d-flex justify-content-center">
        <div class="col-12">
            <h4>Productos en oferta</h4>
        </div>
        <div class="col-12 col-xs-12 col-md-6">
            <div class="form-group">
                <input type="text" name="txtBuscarOferta" id="txtBuscarOferta" v-model="buscar" class="form-control" placeholder="Buscar oferta por cod.">
            </div>
        </div>
        <div class="col-12">
            <div class="table-responsive">
                <table class="table table-stripted">
                    <thead>
                        <tr>
                            <th class="align-middle text-center">ID</th>
                            <th class="align-middle text-center">Codigo</th>
                            <th class="align-middle text-center">Producto</th>
                            <th class="align-middle text-center">% descuento</th>
                            <th class="align-middle text-center">Desde</th>
                            <th class="align-middle text-center">Hasta</th>
                            <th class="align-middle text-center">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <producto-oferta v-for="(oferta,index) in ArrayOfertas" 
                            :key="oferta.id" :oferta="oferta" @deleteOferta="deleteOferta(index)" />
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'lista-productos-oferta',
    data(){
        return{
            buscar:'',
            ofertas:[]
        }
    },
    beforeMount(){
        this.getOferta()
    },
    methods:{
        getOferta:function(){
            axios.get('http://127.0.0.1:8000/api/oferta')
                .then(res =>{
                    this.ofertas = res.data
                })
                .catch(err =>{
                    console.log(err);
                })
        },
        deleteOferta:function($i){
            this.ofertas.splice($i,1);
        }
    },
    computed:{
        ArrayOfertas(){
            if (this.buscar != ''){
                this.ofertas.filter(o => {
                    return o.producto.codigo.match(this.buscar) ? this.ofertas : "No se encontro el codigo"    
                })
            }
            else{
                return this.ofertas
            }
        }
   },
}
</script>