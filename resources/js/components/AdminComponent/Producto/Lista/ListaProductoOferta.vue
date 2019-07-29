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
                            <th class="align-middle text-center">Cod.</th>
                            <th class="align-middle text-center">Nombre</th>
                            <th class="align-middle text-center">precio</th>
                            <th class="align-middle text-center">% descuento</th>
                            <th class="align-middle text-center">precio descuento</th>
                            <th class="align-middle text-center">Desde</th>
                            <th class="align-middle text-center">Hasta</th>
                            <th class="align-middle text-center">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <producto-oferta v-for="producto in filtrarOferta" :key="producto.cod" :producto="producto"></producto-oferta>
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
            productosOferta:[
                {
                    cod:'1',
                    nombre: 'Nombre producto',
                    precio: 255,
                    descuento: 25,
                    precioDescuento: 0,
                    desde: '25/07/2019',
                    hasta: '29/07/2019'
                },
                {
                    cod:'2',
                    nombre: 'Nombre producto',
                    precio: 295,
                    descuento: 15,
                    precioDescuento:0,
                    desde: '22/07/2019',
                    hasta: '29/07/2019'
                }
            ]
        }
    },
   computed:{
       filtrarOferta: function(){
            return this.productosOferta.filter((producto) => {
                return producto.cod.match(this.buscar);
            })
        },
   },
}
</script>