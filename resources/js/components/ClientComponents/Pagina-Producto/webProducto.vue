<template>
    <div class="container mt-5">
        <div class="row text-center  d-flex justify-content-center">
            <div class="col-12 col-sm-12 col-lg-8">
                <div class="h3 p-3 text-center mt-4">
                    Producto
                </div>      
            </div>
        </div>
        <div class="row d-flex ">
            <swiper-fotos-producto  class="col-12 col-xs-12 col-md-6 text-center"></swiper-fotos-producto>
            <info-producto  class="col-12 col-xs-12 col-md-6  text-left pr-5"></info-producto>
        </div>
        <div class="row mt-3">
            <informacion-producto></informacion-producto>
        </div>
        <div class="row mt-5">
            <productos-relacionados></productos-relacionados>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>
