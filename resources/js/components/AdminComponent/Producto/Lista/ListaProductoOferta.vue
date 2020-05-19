<template>
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
                <producto-oferta v-for="(oferta,index) in ofertas.data" 
                    :key="oferta.id" :oferta="oferta" @deleteOferta="deleteOferta(index)" />
                <tr v-if="ofertas.data.length <= 0">
                    <td colspan="7" class="text-center">
                        No se encontraron resultados
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name:'lista-productos-oferta',
    props:['ofertas'],
    data(){
        return{

        }
    },
    methods:{
        deleteOferta:function($i){
            this.ofertas.splice($i,1);
        }
    },
    computed:{

   },
}
</script>