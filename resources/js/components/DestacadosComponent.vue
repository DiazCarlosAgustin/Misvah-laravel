<template>
    <div>
        <div class="Titulo-destacados">Destacados</div>
        <div class="swiper-container swiper-destacados  justify-content-center">
            <div class="swiper-wrapper mb-5">
                <destacado-component></destacado-component>
                <destacado-component></destacado-component>
                <destacado-component></destacado-component>
                <destacado-component></destacado-component>
            </div>
            <!-- Add Pagination -->
            <div class="pagination-pagination pagination-destacados text-center"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'destacados'
}
</script>
<style>
/*estilo de swiper.js*/
.swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    height:100% + 20px !important;
    text-align: center;
    font-size: 18px;
    background: #f2f2;
    /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
  }
</style>
