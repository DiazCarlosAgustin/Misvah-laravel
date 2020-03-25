<template>
    <div class="swiper-container h-100 mt-2 w-auto">
        <div class="swiper-wrapper mb-5" :v-for="foto in fotos" :key="foto.id">
            <foto-producto class="swiper-slide" :foto="foto"></foto-producto>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</template>
<script>
export default {
    props:['fotos']
}
   
</script>
<style scoped>

</style>
