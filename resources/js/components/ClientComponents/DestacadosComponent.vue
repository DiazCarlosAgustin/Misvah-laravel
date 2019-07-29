<template>
    <div class="mt-4">
        <h3 class="p-3 text-center">Destacados</h3>
        <div class="swiper-container swiper-destacados  justify-content-center  animated fadeIn">
            <div class="swiper-wrapper">
                <div class="swiper-slide animated fadeIn">
                    <producto ></producto>
                </div>
                <div class="swiper-slide animated fadeIn">
                    <producto ></producto>
                </div>
                <div class="swiper-slide animated fadeIn">
                    <producto ></producto>
                </div>
                <div class="swiper-slide animated fadeIn">
                    <producto ></producto>
                </div>
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
        width: auto ;
        height: auto;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
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
    .d-destacados{
        position: relative;
        height: 100%;
    }
    .Titulo-destacados{
        font-size: 45px;
        text-align: center;
    }
</style>
