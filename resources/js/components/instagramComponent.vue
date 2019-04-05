<template>
    <div class="">
        <div class="Titulo-instagram">Instagram</div>
        <div class="usuario-intagram"><a href="">@Misvah-moda</a></div>
        <div class="swiper-container mt-3">
            <div class="swiper-wrapper">
                <foto-instagram></foto-instagram>
                <foto-instagram></foto-instagram>
                <foto-instagram></foto-instagram>
                <foto-instagram></foto-instagram>
                <foto-instagram></foto-instagram>
                <foto-instagram></foto-instagram>
                <foto-instagram></foto-instagram>
                <foto-instagram></foto-instagram>
                <foto-instagram></foto-instagram>
                <foto-instagram></foto-instagram>
                <foto-instagram></foto-instagram>
                <foto-instagram></foto-instagram>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'instagram'
}
</script>   
<style>
/*estilo de swiper.js*/
.swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    widows:350px !important;
    height: 380px !important;
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
