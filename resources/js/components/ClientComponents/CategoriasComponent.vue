<template>
    <div class="d-categoria mt-4">
        <h3 class="text-center p-3">Categorias</h3>
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
    .d-categoria{
        font-family: 'Montserrat', sans-serif;
        font-size: 45px;
        letter-spacing:normal;
        text-align: center;
    }
</style>
