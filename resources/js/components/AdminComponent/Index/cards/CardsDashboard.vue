<template>
    <div class="row d-flex mt-5 justify-content-center">
        <div class="col-12 col-xs-12 col-md-6 col-lg-3 ">
            <card-pedidos-nuevos></card-pedidos-nuevos>
        </div>
        <div class="col-12 col-xs-12 col-md-6 col-lg-3 ">
            <card-ganancias></card-ganancias>
        </div>
        <div class="col-12 col-xs-12 col-md-6 col-lg-3 ">
            <card-productos-vendidos></card-productos-vendidos>
        </div>
    </div>
</template>
<script>
    export default {
       name:'CardsDashboard' 
    }
</script>
<style scoped>
    .row{
        margin-top: 55px;
    }
</style>
