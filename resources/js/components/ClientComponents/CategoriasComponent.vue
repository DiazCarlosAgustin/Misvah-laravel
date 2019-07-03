<template>
    <div class="d-categoria mt-4">
        <div class="h3 p-3 text-center">Categorias</div>
        <div class="row">
            <div class="col-12 col-xs-12 col-md-6 col-lg-4"> 
                <categoria-component class=" animated fadeIn"></categoria-component>
            </div>
            <div class="col-12 col-xs-12 col-md-6 col-lg-4"> 
                <categoria-component class=" animated fadeIn"></categoria-component>
            </div>
            <div class="col-12 col-xs-12 col-md-6 col-lg-4"> 
                <categoria-component class=" animated fadeIn"></categoria-component>
            </div>
            <div class="col-12 col-xs-12 col-md-6 col-lg-4"> 
                <categoria-component class=" animated fadeIn"></categoria-component>
            </div>
            <div class="col-12 col-xs-12 col-md-6 col-lg-4"> 
                <categoria-component class=" animated fadeIn"></categoria-component>
            </div>
            <div class="col-12 col-xs-12 col-md-6 col-lg-4"> 
                <categoria-component class=" animated fadeIn"></categoria-component>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'categorias'
}
</script>
<style scoped>
    .d-categoria{
        position: relative;
    }   
    .d-categoria .Titulo-categoria{
        padding: 35px 0 25px 0;
        font-family: Impact, Charcoal, sans-serif !important;
        font-size: 45px;
        text-align: center;
    }
</style>
