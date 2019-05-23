<template>
    <div>
        <div class="Titulo-destacados">Destacados</div>
        <div class="swiper-container swiper-destacados  justify-content-center  animated fadeIn">
            <div class="swiper-wrapper" style="height: auto !important;">
                <destacado-component ></destacado-component>
                <destacado-component ></destacado-component>
                <destacado-component></destacado-component>
                <destacado-component></destacado-component>
            </div>
            <!-- Add Pagination -->
            <div class="pagination-pagination pagination-destacados text-danger text-center"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'destacados'
}
</script>
<style scoped>
/*estilo de swiper.js*/
.swiper-container {
    width: 100%;
    height: auto;
  }
</style>
