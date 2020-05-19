<template>
    <div class="carousel-item">
        <img
            class="img"
            :src="`../../../img/productos/${foto.imagen_color_producto}`"
            :alt="'foto'"
        />
    </div>
</template>
<script>
export default {
    props: ["foto"],
    mounted() {},
    updated() {}
};
</script>
<style scoped>
.img {
    max-height: 80vh;
    height: auto;
    max-width: 100%;
    width: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
