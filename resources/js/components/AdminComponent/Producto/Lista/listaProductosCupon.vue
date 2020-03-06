<template>
    <div class="table-responsive">
        <table class="table table-striped">
            <thead>
                <tr class="text-center">
                    <th>Cod.</th>
                    <th>Cupon</th>
                    <th>Valor</th>
                    <th>Fecha Generado</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                <producto-cupon v-for="cupon in cupones.data" 
                    :key="cupon.id" 
                    :cupon="cupon" />
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name:'lista-productos-cupon',
    props:['cupones'],
    data(){
        return{
        }
    },
    methods:{
    
    },
    computed:{
      
    },
}
</script>