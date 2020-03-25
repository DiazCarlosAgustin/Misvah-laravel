<template>
    <div>
        <img
            class="img"
            :src="`../../../img/productos/${imagen.imagen_color_producto}`"
            alt="Imagen del producto"
        />
    </div>
</template>
<script>
export default {
    props: ["foto"]
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
