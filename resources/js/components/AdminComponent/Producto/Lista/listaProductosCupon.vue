<template>
    <div class="row mt-4 d-flex justify-content-center">
        <div class="col-12">
            <h4>Productos con cupones</h4>
        </div>
        <div class="col-12 col-xs-12 col-md-6">
            <div class="form-group">
                <input type="text" name="txtBuscarCupon" id="txtBuscarCupon" placeholder="Buscar" v-model="buscar" class="form-control">
            </div>
        </div>
        <div class="col-12 col-xs-12 col-md-12">
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr class="text-center">
                            <th>Cod.</th>
                            <th>Nombre</th>
                            <th>precio</th>
                            <th>Cupon</th>
                            <th>Valor</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <producto-cupon v-for="cupon in filtarCupones" :key="cupon.id" :cupon="cupon"></producto-cupon>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'lista-productos-cupon',
    data(){
        return{
            buscar:'',
            cuponen:[
                {
                    id:'1',
                    nombre:'Nombre del producto',
                    precio: '234',
                    cupon:'123-xxx-yyy',
                    valor: 150
                },
                {
                    id:'2',
                    nombre:'Nombre del producto',
                    precio: '740',
                    cupon:'123-xxx-yyy',
                    valor: 250
                },
                {
                    id:'3',
                    nombre:'Nombre del producto',
                    precio: '634',
                    cupon:'123-xxx-yyy',
                    valor: 200
                }
            ]
        }
    },
    computed:{
        filtarCupones:function(){
            return this.cuponen.filter((cupon) =>{
                return cupon.id.match(this.buscar);
            });
        }
    }
}
</script>