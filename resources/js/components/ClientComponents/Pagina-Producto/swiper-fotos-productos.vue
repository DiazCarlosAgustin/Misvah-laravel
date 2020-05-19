<template>
    <carousel>
        <slide v-for="(imagen, index) in imagens" :key="index">
            <img
                class="img"
                :src="`../../../img/productos/${imagen.imagen_color_producto}`"
                :alt="'foto'"
            />
        </slide>
    </carousel>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
export default {
    props: ["imagens"],
    data() {
        return {};
    },
    mounted() {},
    updated() {
        console.log("update");
    },
    
};
</script>
<style scoped>
.swiper-container {
    width: 100%;
    height: auto;
}
.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

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
